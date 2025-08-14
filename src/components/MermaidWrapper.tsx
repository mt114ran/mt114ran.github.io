'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidWrapperProps {
  chart: string;
}

export default function MermaidWrapper({ chart }: MermaidWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        themeVariables: {
          primaryColor: '#e1f5fe',
          primaryTextColor: '#000',
          primaryBorderColor: '#0066cc',
          lineColor: '#5a5a5a',
          secondaryColor: '#fff3e0',
          tertiaryColor: '#f3e5f5'
        }
      });

      // 一意のIDを生成
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      containerRef.current.innerHTML = `<div class="mermaid" id="${id}">${chart}</div>`;
      
      // Mermaidを再実行
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div 
      ref={containerRef} 
      className="flex justify-center my-6 overflow-x-auto"
    />
  );
}