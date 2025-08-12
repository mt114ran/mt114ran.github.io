'use client';

import { useEffect } from 'react';

export default function MermaidClientWrapper() {
  useEffect(() => {
    const initMermaid = async () => {
      const mermaid = (await import('mermaid')).default;
      
      mermaid.initialize({
        startOnLoad: false,
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

      // Mermaidダイアグラムを処理
      const mermaidElements = document.querySelectorAll('.mermaid');
      if (mermaidElements.length > 0) {
        mermaid.run({
          nodes: Array.from(mermaidElements),
        });
      }
    };

    initMermaid();
  }, []);

  return null;
}