'use client';

import { useEffect } from 'react';
import mermaid from 'mermaid';

export default function MermaidRenderer() {
  useEffect(() => {
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
    
    // Mermaidダイアグラムを再レンダリング
    mermaid.contentLoaded();
  }, []);

  return null;
}