"use client";

import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Start hidden until mouse moves

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true); // Show cursor on first move
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
       // No need to explicitly set false here, handleMouseOver covers it
    };
    
    const handleMouseLeave = () => {
        setIsVisible(false); // Hide cursor when mouse leaves window
    };
    
    const handleMouseEnter = () => {
        setIsVisible(true); // Show cursor when mouse enters window
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut); // Keep for potential future use
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);


    // Add cursor: none to body on mount
    document.body.style.cursor = 'none';
    // Ensure interactive elements also hide default cursor
    document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
        (el as HTMLElement).style.cursor = 'none';
    });


    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);

      // Restore default cursor on unmount
      document.body.style.cursor = 'auto';
       document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
        (el as HTMLElement).style.cursor = 'auto';
      });
    };
  }, [isVisible]); // Re-run effect if isVisible changes

  // Don't render the cursor if it's not visible (e.g., mouse outside window)
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
