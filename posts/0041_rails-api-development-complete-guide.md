---
id: 41
title: "Ruby on Rails API開発完全ガイド - RESTful設計からGraphQL、パフォーマンス最適化まで"
tags: ["Ruby on Rails", "API", "REST", "GraphQL", "JWT", "パフォーマンス", "セキュリティ", "RSpec"]
create: "2025-08-25 01:04"
update: "2025-08-25 01:04"
---

Ruby on Rails開発経験3年以上を求める求人で「API開発経験」は必須要件です。しかし、単に「Rails APIモードを使える」だけでは不十分です。本記事では、RESTful API設計の原則から、認証・認可、パフォーマンス最適化、GraphQL実装まで、実務で必要な知識を網羅的に解説します。

## 💡 初心者向け解説

### APIとは？

**簡単に言うと**: アプリケーション同士が会話するための窓口です。

```
例：レストランの注文システム
Webサイト/アプリ：お客様（フロントエンド）
API：ウェイター（通信の仲介）
Rails：厨房（バックエンド）
データベース：食材庫
```

### なぜRails APIが選ばれるのか？

- **開発速度**: 規約重視で高速開発が可能
- **成熟度**: 豊富なGemエコシステム
- **スケーラビリティ**: 大規模サービスでの実績
- **メンテナンス性**: Railsの規約による統一性

## 📚 目次

- [Rails API基礎](#rails-api基礎)
- [RESTful API設計](#restful-api設計)
- [認証・認可の実装](#認証認可の実装)
- [エラーハンドリングとレスポンス設計](#エラーハンドリングとレスポンス設計)
- [パフォーマンス最適化](#パフォーマンス最適化)
- [GraphQL実装](#graphql実装)
- [テスト戦略](#テスト戦略)
- [セキュリティ対策](#セキュリティ対策)
- [バージョニングとデプロイ](#バージョニングとデプロイ)

## Rails API基礎

### Rails APIモードのセットアップ

```bash
# APIモードでRailsアプリケーション作成
rails new my_api --api --database=postgresql

# 主な違い：
# - ApplicationControllerがActionController::APIを継承
# - ビュー層、アセットパイプライン、セッション関連が除外
# - CORSやJSONレンダリングに最適化
```

### 基本的なAPIコントローラー

```ruby
# app/controllers/api/v1/base_controller.rb
module Api
  module V1
    class BaseController < ApplicationController
      # 共通のエラーハンドリング
      rescue_from ActiveRecord::RecordNotFound, with: :not_found
      rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
      rescue_from ActionController::ParameterMissing, with: :bad_request

      private

      def not_found(exception)
        render json: { 
          error: {
            message: exception.message,
            type: 'ResourceNotFound'
          }
        }, status: :not_found
      end

      def unprocessable_entity(exception)
        render json: { 
          error: {
            message: exception.record.errors.full_messages.join(', '),
            type: 'ValidationError',
            details: exception.record.errors.details
          }
        }, status: :unprocessable_entity
      end

      def bad_request(exception)
        render json: { 
          error: {
            message: exception.message,
            type: 'BadRequest'
          }
        }, status: :bad_request
      end

      # ページネーション用メソッド
      def paginate(resource)
        resource.page(params[:page] || 1).per(params[:per_page] || 20)
      end

      # メタ情報の追加
      def render_with_meta(resource, options = {})
        if resource.respond_to?(:current_page)
          options[:meta] = pagination_meta(resource)
        end
        render json: resource, **options
      end

      def pagination_meta(resource)
        {
          current_page: resource.current_page,
          total_pages: resource.total_pages,
          total_count: resource.total_count,
          per_page: resource.limit_value
        }
      end
    end
  end
end
```

### Serializerの実装（ActiveModel::Serializers）

```ruby
# Gemfile
gem 'active_model_serializers', '~> 0.10.0'

# app/serializers/api/v1/user_serializer.rb
module Api
  module V1
    class UserSerializer < ActiveModel::Serializer
      attributes :id, :email, :name, :avatar_url, :created_at
      
      # 関連の定義
      has_many :posts
      has_one :profile
      
      # カスタム属性
      attribute :full_name do
        "#{object.first_name} #{object.last_name}"
      end
      
      # 条件付き属性
      attribute :admin_info, if: :is_admin?
      
      def admin_info
        {
          last_login: object.last_login_at,
          permissions: object.permissions
        }
      end
      
      def is_admin?
        scope && scope.admin?
      end
      
      # URLヘルパーの使用
      link(:self) { api_v1_user_url(object) }
    end
  end
end
```

## RESTful API設計

### リソースベースのURL設計

```ruby
# config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # リソースフルなルーティング
      resources :users do
        member do
          post :activate
          post :deactivate
        end
        
        collection do
          get :search
          get :export
        end
        
        # ネストしたリソース
        resources :posts, shallow: true do
          resources :comments
          resources :likes, only: [:create, :destroy]
        end
      end
      
      # カスタムルート
      post 'auth/login', to: 'authentication#login'
      post 'auth/logout', to: 'authentication#logout'
      post 'auth/refresh', to: 'authentication#refresh'
      
      # 検索エンドポイント
      namespace :search do
        get 'users', to: 'users#index'
        get 'posts', to: 'posts#index'
        get 'global', to: 'global#index'
      end
    end
  end
end
```

### HTTPステータスコードの適切な使用

```ruby
# app/controllers/api/v1/posts_controller.rb
module Api
  module V1
    class PostsController < BaseController
      before_action :authenticate_user!
      before_action :set_post, only: [:show, :update, :destroy]
      before_action :authorize_user!, only: [:update, :destroy]

      # GET /api/v1/posts
      def index
        posts = Post.published
                   .includes(:user, :tags, :comments)
                   .search(params[:q])
                   .filter_by_tags(params[:tags])
                   .order(created_at: :desc)
        
        posts = paginate(posts)
        
        render_with_meta(
          posts,
          each_serializer: PostSerializer,
          include: ['user', 'tags']
        )
      end

      # GET /api/v1/posts/:id
      def show
        render json: @post, 
               serializer: PostDetailSerializer,
               include: ['user', 'comments', 'comments.user']
      end

      # POST /api/v1/posts
      def create
        post = current_user.posts.build(post_params)
        
        if post.save
          # 201 Created
          render json: post, 
                 serializer: PostSerializer,
                 status: :created,
                 location: api_v1_post_url(post)
        else
          # 422 Unprocessable Entity
          render json: { 
            errors: post.errors.full_messages,
            details: post.errors.details 
          }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/posts/:id
      def update
        if @post.update(post_params)
          # 200 OK
          render json: @post, serializer: PostSerializer
        else
          # 422 Unprocessable Entity
          render json: { 
            errors: @post.errors.full_messages 
          }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/posts/:id
      def destroy
        @post.destroy
        # 204 No Content
        head :no_content
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def authorize_user!
        # 403 Forbidden
        unless @post.user == current_user || current_user.admin?
          render json: { 
            error: 'You are not authorized to perform this action' 
          }, status: :forbidden
        end
      end

      def post_params
        params.require(:post).permit(
          :title, 
          :content, 
          :published, 
          tag_ids: [],
          images_attributes: [:id, :url, :caption, :_destroy]
        )
      end
    end
  end
end
```

### フィルタリングとソート

```ruby
# app/models/concerns/filterable.rb
module Filterable
  extend ActiveSupport::Concern

  module ClassMethods
    def filter(filtering_params)
      results = self.where(nil)
      filtering_params.each do |key, value|
        results = results.public_send("filter_by_#{key}", value) if value.present?
      end
      results
    end
  end
end

# app/models/post.rb
class Post < ApplicationRecord
  include Filterable
  
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_and_belongs_to_many :tags
  
  # スコープ定義
  scope :published, -> { where(published: true) }
  scope :draft, -> { where(published: false) }
  scope :recent, -> { where('created_at > ?', 1.week.ago) }
  
  # フィルタリング用スコープ
  scope :filter_by_status, ->(status) { 
    case status
    when 'published' then published
    when 'draft' then draft
    else all
    end
  }
  
  scope :filter_by_user_id, ->(user_id) { where(user_id: user_id) }
  
  scope :filter_by_tags, ->(tag_names) {
    joins(:tags).where(tags: { name: tag_names })
  }
  
  scope :filter_by_date_range, ->(from, to) {
    where(created_at: from..to)
  }
  
  # 全文検索
  scope :search, ->(query) {
    return all if query.blank?
    
    where('title ILIKE :q OR content ILIKE :q', q: "%#{query}%")
  }
  
  # ソート
  scope :sort_by_field, ->(field, direction = 'asc') {
    safe_fields = %w[created_at updated_at title views_count]
    safe_directions = %w[asc desc]
    
    field = 'created_at' unless safe_fields.include?(field)
    direction = 'desc' unless safe_directions.include?(direction)
    
    order(field => direction)
  }
end

# コントローラーでの使用
def index
  posts = Post.filter(
    status: params[:status],
    user_id: params[:user_id],
    tags: params[:tags]
  ).sort_by_field(params[:sort], params[:direction])
  
  render json: paginate(posts)
end
```

## 認証・認可の実装

### JWT認証の実装

```ruby
# Gemfile
gem 'jwt'
gem 'bcrypt'

# app/lib/json_web_token.rb
class JsonWebToken
  SECRET_KEY = Rails.application.credentials.secret_key_base || Rails.application.secrets.secret_key_base
  
  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY, 'HS256')
  end
  
  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY, true, algorithm: 'HS256')[0]
    HashWithIndifferentAccess.new(decoded)
  rescue JWT::DecodeError => e
    raise ExceptionHandler::InvalidToken, e.message
  end
end

# app/controllers/concerns/exception_handler.rb
module ExceptionHandler
  extend ActiveSupport::Concern
  
  class AuthenticationError < StandardError; end
  class InvalidToken < StandardError; end
  class MissingToken < StandardError; end
  class ExpiredToken < StandardError; end
  
  included do
    rescue_from ExceptionHandler::AuthenticationError, with: :unauthorized_request
    rescue_from ExceptionHandler::InvalidToken, with: :unauthorized_request
    rescue_from ExceptionHandler::MissingToken, with: :unauthorized_request
    rescue_from ExceptionHandler::ExpiredToken, with: :unauthorized_request
  end
  
  private
  
  def unauthorized_request(e)
    render json: { error: e.message }, status: :unauthorized
  end
end

# app/controllers/concerns/authenticable.rb
module Authenticable
  extend ActiveSupport::Concern
  
  included do
    before_action :authenticate_request
    attr_reader :current_user
  end
  
  private
  
  def authenticate_request
    @current_user = AuthorizeApiRequest.new(request.headers).call
  rescue StandardError => e
    render json: { error: e.message }, status: :unauthorized
  end
  
  def authenticate_user!
    authenticate_request
  end
end

# app/services/authorize_api_request.rb
class AuthorizeApiRequest
  def initialize(headers = {})
    @headers = headers
  end
  
  def call
    user
  end
  
  private
  
  attr_reader :headers
  
  def user
    @user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
  rescue ActiveRecord::RecordNotFound => e
    raise ExceptionHandler::InvalidToken, "Invalid token: #{e.message}"
  end
  
  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end
  
  def http_auth_header
    if headers['Authorization'].present?
      return headers['Authorization'].split(' ').last
    end
    raise ExceptionHandler::MissingToken, 'Missing token'
  end
end
```

### 認証コントローラー

```ruby
# app/controllers/api/v1/authentication_controller.rb
module Api
  module V1
    class AuthenticationController < BaseController
      skip_before_action :authenticate_user!, only: [:login, :register]
      
      # POST /api/v1/auth/register
      def register
        user = User.new(user_params)
        
        if user.save
          token = generate_token(user)
          render json: {
            user: UserSerializer.new(user),
            token: token,
            expires_at: 24.hours.from_now
          }, status: :created
        else
          render json: { 
            errors: user.errors.full_messages 
          }, status: :unprocessable_entity
        end
      end
      
      # POST /api/v1/auth/login
      def login
        user = User.find_by(email: params[:email])
        
        if user&.authenticate(params[:password])
          token = generate_token(user)
          
          # ログイン履歴の記録
          user.update(
            last_login_at: Time.current,
            last_login_ip: request.remote_ip
          )
          
          render json: {
            user: UserSerializer.new(user),
            token: token,
            expires_at: 24.hours.from_now
          }
        else
          render json: { 
            error: 'Invalid email or password' 
          }, status: :unauthorized
        end
      end
      
      # POST /api/v1/auth/logout
      def logout
        # JWTの場合、クライアント側でトークンを削除
        # オプション：トークンをブラックリストに追加
        token = request.headers['Authorization']&.split(' ')&.last
        BlacklistedToken.create(token: token, expires_at: 24.hours.from_now) if token
        
        head :no_content
      end
      
      # POST /api/v1/auth/refresh
      def refresh
        # リフレッシュトークンの実装
        refresh_token = params[:refresh_token]
        
        if valid_refresh_token?(refresh_token)
          user = User.find_by(refresh_token: refresh_token)
          new_token = generate_token(user)
          
          render json: {
            token: new_token,
            expires_at: 24.hours.from_now
          }
        else
          render json: { 
            error: 'Invalid refresh token' 
          }, status: :unauthorized
        end
      end
      
      private
      
      def user_params
        params.permit(:email, :password, :password_confirmation, :name)
      end
      
      def generate_token(user)
        JsonWebToken.encode(user_id: user.id)
      end
      
      def valid_refresh_token?(token)
        # リフレッシュトークンの検証ロジック
        return false if token.blank?
        
        user = User.find_by(refresh_token: token)
        user && user.refresh_token_expires_at > Time.current
      end
    end
  end
end
```

### 認可（Pundit使用）

```ruby
# Gemfile
gem 'pundit'

# app/policies/application_policy.rb
class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    true
  end

  def show?
    true
  end

  def create?
    user.present?
  end

  def update?
    user.present? && (record.user == user || user.admin?)
  end

  def destroy?
    update?
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope.all
    end
  end
end

# app/policies/post_policy.rb
class PostPolicy < ApplicationPolicy
  def index?
    true
  end
  
  def show?
    record.published? || record.user == user || user&.admin?
  end
  
  def create?
    user.present?
  end
  
  def update?
    record.user == user || user&.admin?
  end
  
  def destroy?
    record.user == user || user&.admin?
  end
  
  def publish?
    record.user == user || user&.admin?
  end
  
  class Scope < Scope
    def resolve
      if user&.admin?
        scope.all
      elsif user
        scope.where('published = ? OR user_id = ?', true, user.id)
      else
        scope.published
      end
    end
  end
end

# コントローラーでの使用
class PostsController < BaseController
  include Pundit
  
  def index
    posts = policy_scope(Post)
    render json: posts
  end
  
  def show
    post = Post.find(params[:id])
    authorize post
    render json: post
  end
  
  def update
    post = Post.find(params[:id])
    authorize post
    
    if post.update(post_params)
      render json: post
    else
      render json: { errors: post.errors }, status: :unprocessable_entity
    end
  end
end
```

## エラーハンドリングとレスポンス設計

### 統一的なエラーレスポンス

```ruby
# app/controllers/concerns/error_handler.rb
module ErrorHandler
  extend ActiveSupport::Concern
  
  included do
    rescue_from StandardError, with: :handle_internal_server_error
    rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :handle_unprocessable_entity
    rescue_from ActionController::ParameterMissing, with: :handle_bad_request
    rescue_from Pundit::NotAuthorizedError, with: :handle_forbidden
    
    # カスタムエラー
    rescue_from CustomErrors::ValidationError, with: :handle_validation_error
    rescue_from CustomErrors::AuthenticationError, with: :handle_authentication_error
    rescue_from CustomErrors::RateLimitError, with: :handle_rate_limit
  end
  
  private
  
  def handle_internal_server_error(exception)
    logger.error exception.message
    logger.error exception.backtrace.join("\n")
    
    if Rails.env.production?
      render_error(500, 'Internal Server Error', 'An error occurred')
    else
      render_error(500, 'Internal Server Error', exception.message)
    end
  end
  
  def handle_not_found(exception)
    render_error(404, 'Not Found', exception.message)
  end
  
  def handle_unprocessable_entity(exception)
    render_error(
      422, 
      'Unprocessable Entity', 
      exception.record.errors.full_messages.join(', '),
      exception.record.errors.details
    )
  end
  
  def handle_bad_request(exception)
    render_error(400, 'Bad Request', exception.message)
  end
  
  def handle_forbidden(exception)
    render_error(403, 'Forbidden', 'You are not authorized to perform this action')
  end
  
  def handle_validation_error(exception)
    render_error(422, 'Validation Error', exception.message, exception.errors)
  end
  
  def handle_authentication_error(exception)
    render_error(401, 'Authentication Error', exception.message)
  end
  
  def handle_rate_limit(exception)
    response.headers['X-RateLimit-Limit'] = exception.limit.to_s
    response.headers['X-RateLimit-Remaining'] = '0'
    response.headers['X-RateLimit-Reset'] = exception.reset_at.to_i.to_s
    
    render_error(429, 'Too Many Requests', 'Rate limit exceeded')
  end
  
  def render_error(status, error_type, message, details = nil)
    error_response = {
      error: {
        status: status,
        type: error_type,
        message: message,
        timestamp: Time.current.iso8601
      }
    }
    
    error_response[:error][:details] = details if details.present?
    
    render json: error_response, status: status
  end
end

# app/lib/custom_errors.rb
module CustomErrors
  class BaseError < StandardError
    attr_reader :status, :error_type, :details
    
    def initialize(message = nil, status = nil, error_type = nil, details = nil)
      @status = status
      @error_type = error_type
      @details = details
      super(message)
    end
  end
  
  class ValidationError < BaseError
    def initialize(message = 'Validation failed', details = nil)
      super(message, 422, 'ValidationError', details)
    end
  end
  
  class AuthenticationError < BaseError
    def initialize(message = 'Authentication failed')
      super(message, 401, 'AuthenticationError')
    end
  end
  
  class RateLimitError < BaseError
    attr_reader :limit, :reset_at
    
    def initialize(limit, reset_at)
      @limit = limit
      @reset_at = reset_at
      super('Rate limit exceeded', 429, 'RateLimitError')
    end
  end
end
```

### レスポンスフォーマット標準化

```ruby
# app/services/response_builder.rb
class ResponseBuilder
  def self.success(data = nil, message = nil, meta = {})
    response = {
      success: true,
      timestamp: Time.current.iso8601
    }
    
    response[:data] = data if data.present?
    response[:message] = message if message.present?
    response[:meta] = meta if meta.present?
    
    response
  end
  
  def self.error(status, error_type, message, details = nil)
    {
      success: false,
      error: {
        status: status,
        type: error_type,
        message: message,
        details: details
      }.compact,
      timestamp: Time.current.iso8601
    }
  end
  
  def self.paginated(collection, serializer, options = {})
    {
      success: true,
      data: ActiveModelSerializers::SerializableResource.new(
        collection,
        each_serializer: serializer,
        **options
      ),
      meta: {
        pagination: {
          current_page: collection.current_page,
          total_pages: collection.total_pages,
          total_count: collection.total_count,
          per_page: collection.limit_value,
          next_page: collection.next_page,
          prev_page: collection.prev_page
        }
      },
      timestamp: Time.current.iso8601
    }
  end
end

# コントローラーでの使用
def index
  posts = Post.published.page(params[:page])
  render json: ResponseBuilder.paginated(posts, PostSerializer)
end

def create
  post = current_user.posts.build(post_params)
  
  if post.save
    render json: ResponseBuilder.success(
      PostSerializer.new(post),
      'Post created successfully'
    ), status: :created
  else
    render json: ResponseBuilder.error(
      422,
      'ValidationError',
      'Validation failed',
      post.errors.details
    ), status: :unprocessable_entity
  end
end
```

## パフォーマンス最適化

### N+1問題の解決

```ruby
# app/models/post.rb
class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes
  has_and_belongs_to_many :tags
  
  # Bullet gemによる検出
  # Gemfile
  # gem 'bullet', group: :development
  
  # スコープでのincludes
  scope :with_associations, -> {
    includes(:user, :tags, comments: :user)
  }
  
  # カウンターキャッシュの使用
  # comments_count, likes_count カラムを追加
  has_many :comments, counter_cache: true
  has_many :likes, counter_cache: true
end

# app/controllers/api/v1/posts_controller.rb
def index
  # ❌ N+1問題が発生
  posts = Post.all
  
  # ✅ includesで解決
  posts = Post.includes(:user, :tags, :comments)
  
  # ✅ より詳細な最適化
  posts = Post
    .includes(:user, :tags)
    .includes(comments: [:user, :likes])
    .references(:comments)
    .where('comments.created_at > ?', 1.week.ago)
  
  render json: posts
end

# app/serializers/post_serializer.rb
class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :comments_count, :likes_count
  
  belongs_to :user
  has_many :tags
  
  # カウンターキャッシュを活用
  def comments_count
    object.comments_count # N+1を避ける
  end
  
  def likes_count
    object.likes_count # N+1を避ける
  end
end
```

### キャッシング戦略

```ruby
# config/environments/production.rb
config.cache_store = :redis_cache_store, {
  url: ENV['REDIS_URL'],
  expires_in: 1.hour
}

# app/controllers/api/v1/posts_controller.rb
class PostsController < BaseController
  def index
    posts = Rails.cache.fetch(cache_key_for_posts, expires_in: 30.minutes) do
      Post.published
          .includes(:user, :tags)
          .order(created_at: :desc)
          .limit(100)
          .to_a # 配列に変換してキャッシュ
    end
    
    render json: posts
  end
  
  def show
    post = Rails.cache.fetch("post/#{params[:id]}", expires_in: 1.hour) do
      Post.includes(:user, :tags, comments: :user)
          .find(params[:id])
    end
    
    # ETags使用
    if stale?(post)
      render json: post, serializer: PostDetailSerializer
    end
  end
  
  private
  
  def cache_key_for_posts
    "posts/#{params[:page]}/#{params[:per_page]}/#{Post.maximum(:updated_at)}"
  end
end

# app/models/post.rb
class Post < ApplicationRecord
  # キャッシュの自動無効化
  after_commit :clear_cache
  
  private
  
  def clear_cache
    Rails.cache.delete("post/#{id}")
    Rails.cache.delete_matched("posts/*")
  end
end

# Fragment Caching in Serializers
class PostSerializer < ActiveModel::Serializer
  cache key: 'post', expires_in: 3.hours
  
  attributes :id, :title, :content
  has_many :comments
  
  def cache_key
    "#{object.cache_key}/#{object.comments.maximum(:updated_at)}"
  end
end
```

### データベース最適化

```ruby
# app/models/concerns/searchable.rb
module Searchable
  extend ActiveSupport::Concern
  
  included do
    # PostgreSQL全文検索
    scope :search, ->(query) {
      return all if query.blank?
      
      # tsvectorカラムを使用（マイグレーションで追加）
      where("search_vector @@ plainto_tsquery('english', ?)", query)
    }
  end
end

# db/migrate/add_search_vector_to_posts.rb
class AddSearchVectorToPosts < ActiveRecord::Migration[7.0]
  def up
    # tsvectorカラムを追加
    add_column :posts, :search_vector, :tsvector
    
    # インデックスを追加
    add_index :posts, :search_vector, using: :gin
    
    # トリガーを作成
    execute <<-SQL
      CREATE TRIGGER posts_search_vector_update
      BEFORE INSERT OR UPDATE ON posts
      FOR EACH ROW EXECUTE FUNCTION
      tsvector_update_trigger(search_vector, 'pg_catalog.english', title, content);
    SQL
  end
  
  def down
    remove_column :posts, :search_vector
  end
end

# 複合インデックスの活用
class AddCompoundIndexes < ActiveRecord::Migration[7.0]
  def change
    # よく一緒に検索される条件
    add_index :posts, [:user_id, :published, :created_at]
    add_index :posts, [:published, :created_at]
    
    # 部分インデックス（条件付きインデックス）
    add_index :posts, :created_at, where: "published = true", name: 'index_published_posts_on_created_at'
  end
end

# クエリ最適化
class Post < ApplicationRecord
  # バッチ処理
  def self.process_all
    find_each(batch_size: 1000) do |post|
      post.process
    end
  end
  
  # SELECT句の最適化
  scope :minimal, -> {
    select(:id, :title, :created_at)
  }
  
  # EXISTS使用
  scope :with_comments, -> {
    where('EXISTS (SELECT 1 FROM comments WHERE comments.post_id = posts.id)')
  }
  
  # Window関数の活用
  scope :ranked_by_likes, -> {
    select('posts.*, RANK() OVER (ORDER BY likes_count DESC) as rank')
  }
end
```

### バックグラウンドジョブ

```ruby
# Gemfile
gem 'sidekiq'
gem 'redis'

# app/jobs/notification_job.rb
class NotificationJob < ApplicationJob
  queue_as :default
  
  def perform(user_id, notification_type, data = {})
    user = User.find(user_id)
    
    case notification_type
    when 'new_comment'
      NotificationService.send_new_comment_notification(user, data)
    when 'new_like'
      NotificationService.send_new_like_notification(user, data)
    end
  end
end

# app/controllers/api/v1/comments_controller.rb
def create
  comment = @post.comments.build(comment_params)
  comment.user = current_user
  
  if comment.save
    # 非同期で通知を送信
    NotificationJob.perform_later(
      @post.user_id,
      'new_comment',
      { comment_id: comment.id }
    )
    
    render json: comment, status: :created
  else
    render json: { errors: comment.errors }, status: :unprocessable_entity
  end
end

# app/services/heavy_operation_service.rb
class HeavyOperationService
  def self.process_async(data)
    # Sidekiqで非同期実行
    ProcessingWorker.perform_async(data)
    
    # ジョブIDを返す
    { job_id: SecureRandom.uuid, status: 'processing' }
  end
end

# app/workers/processing_worker.rb
class ProcessingWorker
  include Sidekiq::Worker
  
  sidekiq_options retry: 3, dead: false
  
  def perform(data)
    # 重い処理
    result = ComplexCalculation.new(data).execute
    
    # 結果をRedisに保存
    Rails.cache.write("processing_result_#{data['id']}", result, expires_in: 1.day)
    
    # WebSocketで通知（Action Cable使用）
    ActionCable.server.broadcast(
      "processing_#{data['user_id']}",
      { status: 'completed', result: result }
    )
  end
end
```

## GraphQL実装

### GraphQL基本セットアップ

```ruby
# Gemfile
gem 'graphql'
gem 'graphiql-rails', group: :development

# app/graphql/types/base_object.rb
module Types
  class BaseObject < GraphQL::Schema::Object
    edge_type_class(Types::BaseEdge)
    connection_type_class(Types::BaseConnection)
    field_class Types::BaseField
  end
end

# app/graphql/types/user_type.rb
module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :name, String, null: true
    field :posts, [Types::PostType], null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    
    # カスタムフィールド
    field :post_count, Integer, null: false
    
    def post_count
      object.posts.count
    end
    
    # 認証が必要なフィールド
    field :private_info, String, null: true
    
    def private_info
      return nil unless context[:current_user] == object
      object.private_info
    end
  end
end

# app/graphql/types/post_type.rb
module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :content, String, null: false
    field :published, Boolean, null: false
    field :user, Types::UserType, null: false
    field :comments, [Types::CommentType], null: true
    field :tags, [Types::TagType], null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end

# app/graphql/types/query_type.rb
module Types
  class QueryType < Types::BaseObject
    # ユーザー一覧
    field :users, [Types::UserType], null: false do
      argument :limit, Integer, required: false, default_value: 20
      argument :offset, Integer, required: false, default_value: 0
    end
    
    def users(limit:, offset:)
      User.limit(limit).offset(offset)
    end
    
    # 単一ユーザー
    field :user, Types::UserType, null: true do
      argument :id, ID, required: true
    end
    
    def user(id:)
      User.find_by(id: id)
    end
    
    # 投稿検索
    field :posts, Types::PostType.connection_type, null: false do
      argument :filter, Types::PostFilterType, required: false
      argument :order_by, Types::PostOrderType, required: false
    end
    
    def posts(filter: nil, order_by: nil)
      scope = Post.published
      scope = apply_filter(scope, filter) if filter
      scope = apply_order(scope, order_by) if order_by
      scope
    end
    
    private
    
    def apply_filter(scope, filter)
      scope = scope.where(user_id: filter.user_id) if filter.user_id
      scope = scope.search(filter.search) if filter.search
      scope = scope.where('created_at >= ?', filter.from_date) if filter.from_date
      scope = scope.where('created_at <= ?', filter.to_date) if filter.to_date
      scope
    end
    
    def apply_order(scope, order_by)
      case order_by
      when 'CREATED_AT_ASC'
        scope.order(created_at: :asc)
      when 'CREATED_AT_DESC'
        scope.order(created_at: :desc)
      when 'TITLE_ASC'
        scope.order(title: :asc)
      else
        scope
      end
    end
  end
end

# app/graphql/types/mutation_type.rb
module Types
  class MutationType < Types::BaseObject
    field :create_post, mutation: Mutations::CreatePost
    field :update_post, mutation: Mutations::UpdatePost
    field :delete_post, mutation: Mutations::DeletePost
    field :login, mutation: Mutations::Login
    field :register, mutation: Mutations::Register
  end
end

# app/graphql/mutations/create_post.rb
module Mutations
  class CreatePost < BaseMutation
    # 引数の定義
    argument :title, String, required: true
    argument :content, String, required: true
    argument :published, Boolean, required: false, default_value: false
    argument :tag_ids, [ID], required: false
    
    # 戻り値の定義
    field :post, Types::PostType, null: true
    field :errors, [String], null: false
    
    def resolve(title:, content:, published:, tag_ids: [])
      # 認証チェック
      return { post: nil, errors: ['Not authenticated'] } unless context[:current_user]
      
      post = context[:current_user].posts.build(
        title: title,
        content: content,
        published: published
      )
      
      post.tag_ids = tag_ids if tag_ids.present?
      
      if post.save
        { post: post, errors: [] }
      else
        { post: nil, errors: post.errors.full_messages }
      end
    end
  end
end
```

### GraphQL認証とN+1対策

```ruby
# app/graphql/my_api_schema.rb
class MyApiSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
  
  # GraphQL-Batch for N+1 prevention
  use GraphQL::Batch
  
  # Query complexity prevention
  max_complexity 300
  max_depth 10
  
  def self.unauthorized_object(error)
    raise GraphQL::ExecutionError, "You don't have permission to access #{error.object}"
  end
end

# app/graphql/loaders/association_loader.rb
class Loaders::AssociationLoader < GraphQL::Batch::Loader
  def initialize(model, association_name)
    @model = model
    @association_name = association_name
  end
  
  def perform(records)
    preload_association(records)
    records.each { |record| fulfill(record, read_association(record)) }
  end
  
  private
  
  def preload_association(records)
    ActiveRecord::Associations::Preloader.new(
      records: records,
      associations: @association_name
    ).call
  end
  
  def read_association(record)
    record.public_send(@association_name)
  end
end

# app/graphql/types/post_type.rb
module Types
  class PostType < Types::BaseObject
    field :comments, [Types::CommentType], null: true
    
    # N+1を防ぐためのDataLoader使用
    def comments
      Loaders::AssociationLoader.for(Post, :comments).load(object)
    end
    
    field :user, Types::UserType, null: false
    
    def user
      Loaders::RecordLoader.for(User).load(object.user_id)
    end
  end
end

# app/controllers/graphql_controller.rb
class GraphqlController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def execute
    variables = prepare_variables(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    
    context = {
      current_user: current_user,
      request: request
    }
    
    result = MyApiSchema.execute(
      query,
      variables: variables,
      context: context,
      operation_name: operation_name
    )
    
    render json: result
  rescue StandardError => e
    raise e unless Rails.env.development?
    handle_error_in_development(e)
  end
  
  private
  
  def current_user
    token = request.headers['Authorization']&.split(' ')&.last
    return nil unless token
    
    decoded = JsonWebToken.decode(token)
    User.find(decoded[:user_id])
  rescue StandardError
    nil
  end
  
  def prepare_variables(variables_param)
    case variables_param
    when String
      variables_param.present? ? JSON.parse(variables_param) || {} : {}
    when Hash
      variables_param
    when ActionController::Parameters
      variables_param.to_unsafe_hash
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{variables_param}"
    end
  end
  
  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")
    
    render json: {
      errors: [{ message: e.message, backtrace: e.backtrace }],
      data: {}
    }, status: 500
  end
end
```

## テスト戦略

### RSpecでのAPI テスト

```ruby
# spec/rails_helper.rb
require 'spec_helper'
ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'

RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
  config.include RequestSpecHelper, type: :request
  
  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end
end

# spec/support/request_spec_helper.rb
module RequestSpecHelper
  def json
    JSON.parse(response.body)
  end
  
  def auth_headers(user)
    token = JsonWebToken.encode(user_id: user.id)
    { 'Authorization' => "Bearer #{token}" }
  end
end

# spec/requests/api/v1/posts_spec.rb
require 'rails_helper'

RSpec.describe 'Posts API', type: :request do
  let(:user) { create(:user) }
  let(:headers) { auth_headers(user) }
  
  describe 'GET /api/v1/posts' do
    let!(:posts) { create_list(:post, 10, published: true) }
    
    before { get '/api/v1/posts', params: {}, headers: headers }
    
    it 'returns posts' do
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(10)
    end
    
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
    
    context 'with pagination' do
      before do
        get '/api/v1/posts', params: { page: 2, per_page: 5 }, headers: headers
      end
      
      it 'returns paginated results' do
        expect(json['data'].size).to eq(5)
        expect(json['meta']['current_page']).to eq(2)
      end
    end
    
    context 'with filters' do
      let!(:user_posts) { create_list(:post, 3, user: user, published: true) }
      
      before do
        get '/api/v1/posts', params: { user_id: user.id }, headers: headers
      end
      
      it 'returns filtered posts' do
        expect(json['data'].size).to eq(3)
        expect(json['data'].all? { |p| p['user_id'] == user.id }).to be true
      end
    end
  end
  
  describe 'POST /api/v1/posts' do
    let(:valid_attributes) do
      { post: { title: 'Test Post', content: 'Test content', published: true } }
    end
    
    context 'when the request is valid' do
      before { post '/api/v1/posts', params: valid_attributes, headers: headers }
      
      it 'creates a post' do
        expect(json['data']['title']).to eq('Test Post')
      end
      
      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end
    
    context 'when the request is invalid' do
      let(:invalid_attributes) { { post: { title: '' } } }
      
      before { post '/api/v1/posts', params: invalid_attributes, headers: headers }
      
      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
      
      it 'returns a validation failure message' do
        expect(json['errors']).to include("Title can't be blank")
      end
    end
  end
  
  describe 'PUT /api/v1/posts/:id' do
    let(:post_record) { create(:post, user: user) }
    let(:valid_attributes) { { post: { title: 'Updated Title' } } }
    
    before do
      put "/api/v1/posts/#{post_record.id}", 
          params: valid_attributes, 
          headers: headers
    end
    
    context 'when the record exists' do
      it 'updates the record' do
        expect(json['data']['title']).to eq('Updated Title')
      end
      
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
    
    context 'when user is not the owner' do
      let(:other_user) { create(:user) }
      let(:headers) { auth_headers(other_user) }
      
      it 'returns status code 403' do
        expect(response).to have_http_status(403)
      end
    end
  end
  
  describe 'DELETE /api/v1/posts/:id' do
    let!(:post_record) { create(:post, user: user) }
    
    before { delete "/api/v1/posts/#{post_record.id}", headers: headers }
    
    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
    
    it 'deletes the record' do
      expect(Post.find_by(id: post_record.id)).to be_nil
    end
  end
end

# spec/integration/api_integration_spec.rb
RSpec.describe 'API Integration', type: :request do
  describe 'complete user flow' do
    it 'allows user registration, login, and resource creation' do
      # ユーザー登録
      post '/api/v1/auth/register', params: {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User'
      }
      
      expect(response).to have_http_status(201)
      token = json['token']
      
      # ログイン
      post '/api/v1/auth/login', params: {
        email: 'test@example.com',
        password: 'password123'
      }
      
      expect(response).to have_http_status(200)
      expect(json['token']).to be_present
      
      # リソース作成
      post '/api/v1/posts', 
           params: { post: { title: 'Test', content: 'Content' } },
           headers: { 'Authorization' => "Bearer #{token}" }
      
      expect(response).to have_http_status(201)
      expect(json['data']['title']).to eq('Test')
    end
  end
end
```

## セキュリティ対策

### API セキュリティベストプラクティス

```ruby
# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins ENV.fetch('ALLOWED_ORIGINS', '*').split(',')
    
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true,
      max_age: 86400
  end
end

# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  # Rate limiting
  include Rack::Attack
  
  # SQL Injection対策は標準のActive Recordメソッドを使用
  # XSS対策はAPIモードでは基本的に不要（JSONレスポンスのため）
  
  # CSRF対策（APIでは通常不要だが、Cookie認証の場合は必要）
  # protect_from_forgery with: :null_session
  
  # Strong Parameters
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  # APIキー認証（オプション）
  before_action :authenticate_api_key!, if: :api_key_required?
  
  private
  
  def authenticate_api_key!
    api_key = request.headers['X-API-Key']
    
    unless api_key && ApiKey.active.exists?(key: api_key)
      render json: { error: 'Invalid API key' }, status: :unauthorized
    end
  end
  
  def api_key_required?
    # 特定のエンドポイントでAPIキーを要求
    request.path.start_with?('/api/admin')
  end
end

# config/initializers/rack_attack.rb
class Rack::Attack
  # Rate limiting
  throttle('api/ip', limit: 100, period: 5.minutes) do |req|
    req.ip if req.path.start_with?('/api')
  end
  
  # ログイン試行の制限
  throttle('logins/ip', limit: 5, period: 20.seconds) do |req|
    if req.path == '/api/v1/auth/login' && req.post?
      req.ip
    end
  end
  
  # ユーザーごとの制限
  throttle('api/user', limit: 1000, period: 1.hour) do |req|
    if req.env['HTTP_AUTHORIZATION']
      token = req.env['HTTP_AUTHORIZATION'].split(' ').last
      decoded = JsonWebToken.decode(token) rescue nil
      decoded[:user_id] if decoded
    end
  end
  
  # Blockルール
  blocklist('block suspicious requests') do |req|
    # SQLインジェクションのパターンを検出
    Rack::Attack::Fail2Ban.filter("pentesters-#{req.ip}", maxretry: 3, findtime: 10.minutes, bantime: 30.minutes) do
      CGI.unescape(req.query_string) =~ /(%27|')|(%3B|;)|(<|%3C)|(>|%3E)/i
    end
  end
end

# app/services/security_audit_service.rb
class SecurityAuditService
  def self.audit_request(request, user = nil)
    AuditLog.create!(
      user: user,
      action: "#{request.method} #{request.path}",
      ip_address: request.remote_ip,
      user_agent: request.user_agent,
      parameters: filter_sensitive_params(request.params),
      performed_at: Time.current
    )
  end
  
  private
  
  def self.filter_sensitive_params(params)
    Rails.application.config.filter_parameters.each do |param|
      params = params.deep_transform_values do |value|
        value.to_s.include?(param.to_s) ? '[FILTERED]' : value
      end
    end
    params
  end
end
```

## バージョニングとデプロイ

### APIバージョニング戦略

```ruby
# URLパスベースのバージョニング
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
    
    namespace :v2 do
      resources :posts do
        member do
          post :react
        end
      end
    end
  end
  
  # デフォルトバージョンへのリダイレクト
  get 'api/posts', to: redirect('/api/v1/posts')
end

# ヘッダーベースのバージョニング
class ApplicationController < ActionController::API
  before_action :set_api_version
  
  private
  
  def set_api_version
    @api_version = request.headers['Accept-Version'] || 'v1'
    
    unless %w[v1 v2].include?(@api_version)
      render json: { error: 'Invalid API version' }, status: :bad_request
    end
  end
end

# app/controllers/api/posts_controller.rb
module Api
  class PostsController < BaseController
    def index
      case @api_version
      when 'v1'
        render json: posts_v1
      when 'v2'
        render json: posts_v2
      end
    end
    
    private
    
    def posts_v1
      Post.all.as_json(only: [:id, :title, :content])
    end
    
    def posts_v2
      Post.all.as_json(
        only: [:id, :title, :content],
        methods: [:reactions_count, :views_count]
      )
    end
  end
end
```

### デプロイ設定

```ruby
# config/deploy.rb (Capistrano)
lock '~> 3.17.0'

set :application, 'my_api'
set :repo_url, 'git@github.com:username/my_api.git'
set :deploy_to, '/var/www/my_api'
set :rbenv_ruby, '3.2.0'

append :linked_files, 'config/database.yml', 'config/master.key'
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system'

namespace :deploy do
  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end
  
  after :publishing, :restart
end

# docker-compose.yml
version: '3.8'
services:
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    command: redis-server
    volumes:
      - redis_data:/data
  
  web:
    build: .
    command: bundle exec puma -C config/puma.rb
    volumes:
      - .:/app
    ports:
      - "3000:3000"
    depends_on:
      - db
      - redis
    environment:
      DATABASE_URL: postgresql://postgres:password@db/my_api_production
      REDIS_URL: redis://redis:6379/0
  
  sidekiq:
    build: .
    command: bundle exec sidekiq
    volumes:
      - .:/app
    depends_on:
      - db
      - redis
    environment:
      DATABASE_URL: postgresql://postgres:password@db/my_api_production
      REDIS_URL: redis://redis:6379/0

volumes:
  postgres_data:
  redis_data:

# Dockerfile
FROM ruby:3.2.0
RUN apt-get update -qq && apt-get install -y postgresql-client
WORKDIR /app
COPY Gemfile* ./
RUN bundle install
COPY . .
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
```

## まとめ

### Rails API開発チェックリスト

**設計**:
- [ ] RESTful原則に従ったURL設計
- [ ] 適切なHTTPステータスコードの使用
- [ ] 一貫性のあるレスポンスフォーマット
- [ ] エラーハンドリングの実装

**パフォーマンス**:
- [ ] N+1問題の解決（includes, eager_load）
- [ ] 適切なインデックスの設定
- [ ] キャッシング戦略の実装
- [ ] バックグラウンドジョブの活用

**セキュリティ**:
- [ ] 認証・認可の実装
- [ ] Rate limitingの設定
- [ ] CORS設定
- [ ] SQLインジェクション対策

**テスト**:
- [ ] Request specの作成
- [ ] 統合テストの実装
- [ ] パフォーマンステスト
- [ ] セキュリティテスト

### 面接での回答例

**Q: Rails APIモードの利点は？**

```
A: Rails APIモードは通常のRailsから不要な機能を削除し、
API開発に最適化されています。

主な利点：
1. 軽量化：ビュー層やアセットパイプラインを除外
2. パフォーマンス：メモリ使用量削減、レスポンス速度向上
3. ミドルウェア最適化：API用に最適化された構成

実装面では、ApplicationControllerがActionController::APIを
継承し、JSONレンダリングに特化した設定になっています。
```

**Q: N+1問題をどう解決しますか？**

```
A: N+1問題は主に3つの方法で解決します：

1. includes：関連データを事前読み込み
   Post.includes(:comments, :user)

2. eager_load：LEFT JOINで一度に取得
   Post.eager_load(:comments).where(comments: { approved: true })

3. カウンターキャッシュ：集計値をカラムに保存
   has_many :comments, counter_cache: true

開発環境ではBullet gemで検出し、
本番環境ではNew RelicやDatadogでモニタリングします。
```

### 継続的な学習のために

1. **実践プロジェクト**: 実際のAPIを構築
2. **パフォーマンス測定**: Apache Bench、JMeterでの負荷テスト
3. **最新動向**: Rails 7.1の新機能、Hotwire Turbo
4. **他言語との比較**: Go、Node.jsのAPI開発も学習

## 参考リンク

- [Ruby on Rails Guides](https://guides.rubyonrails.org/api_app.html)
- [JSON:API Specification](https://jsonapi.org/)
- [GraphQL Ruby](https://graphql-ruby.org/)
- [Rails Performance](https://www.speedshop.co/)
- [Rails Security Guide](https://guides.rubyonrails.org/security.html)

---

*この記事は、Ruby on Rails API開発における3年以上の実務経験で必要な知識を網羅的にまとめました。*