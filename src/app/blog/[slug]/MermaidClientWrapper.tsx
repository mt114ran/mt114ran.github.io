'use client';

import { useEffect } from 'react';

export default function MermaidClientWrapper() {
  useEffect(() => {
    const initMermaid = async () => {
      const mermaid = (await import('mermaid')).default;
      
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        securityLevel: 'loose',
        themeVariables: {
          primaryColor: '#1e293b',
          primaryTextColor: '#f1f5f9',
          primaryBorderColor: '#475569',
          lineColor: '#64748b',
          secondaryColor: '#334155',
          tertiaryColor: '#475569',
          // 背景色
          background: '#0f172a',
          mainBkg: '#1e293b',
          secondBkg: '#334155',
          tertiaryBkg: '#475569',
          // テキスト色
          textColor: '#f1f5f9',
          taskTextColor: '#f1f5f9',
          taskTextDarkColor: '#f1f5f9',
          // シーケンス図の設定
          actorBkg: '#1e293b',
          actorBorder: '#475569',
          actorTextColor: '#f1f5f9',
          actorLineColor: '#64748b',
          signalColor: '#f1f5f9',
          signalTextColor: '#f1f5f9',
          labelBoxBkgColor: '#1e293b',
          labelBoxBorderColor: '#475569',
          labelTextColor: '#f1f5f9',
          loopTextColor: '#f1f5f9',
          noteBkgColor: '#334155',
          noteTextColor: '#f1f5f9',
          activationBkgColor: '#334155',
          sequenceNumberColor: '#f1f5f9'
        }
      });

      // Mermaidダイアグラムを処理
      const mermaidElements = document.querySelectorAll('.mermaid');
      if (mermaidElements.length > 0) {
        try {
          await mermaid.run({
            nodes: Array.from(mermaidElements) as HTMLElement[],
          });
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          // エラーが発生した要素に対してフォールバック表示
          mermaidElements.forEach((element) => {
            const el = element as HTMLElement;
            if (el.textContent && !el.querySelector('svg')) {
              el.style.padding = '1rem';
              el.style.backgroundColor = '#1e293b';
              el.style.border = '1px solid #475569';
              el.style.borderRadius = '0.375rem';
              el.style.fontFamily = 'monospace';
              el.style.whiteSpace = 'pre-wrap';
              el.style.color = '#f1f5f9';
            }
          });
        }
      }
    };

    initMermaid().catch(console.error);
  }, []);

  return null;
}