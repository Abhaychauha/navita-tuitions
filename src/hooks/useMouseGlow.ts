import { useState, useCallback, useRef } from 'react';

export const useMouseGlow = () => {
  const [position, setPosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (window.innerWidth < 768) return;

    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 0.7
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition(prev => ({ ...prev, opacity: 0 }));
  }, []);

  return { containerRef, position, handleMouseMove, handleMouseLeave };
};
