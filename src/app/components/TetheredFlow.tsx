"use client";

import React, { useEffect, useRef, useCallback } from 'react';

const TetheredFlow = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<any[]>([]);
  const flowingPathsRef = useRef<any[]>([]);
  const timeRef = useRef<number>(0);

  // Handle canvas clicks to create interactive nodes
  const handleCanvasClick = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    if (!(window as any).Node || !(window as any).createConnections) return;
    
    // Create a new interactive node at click position
    const newNode = new (window as any).Node(clickX, clickY, Math.random() * 6 + 4, 'interactive');
    nodesRef.current.push(newNode);

    // Create connections
    (window as any).createConnections();
  }, []);

  // Main animation and setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to viewport size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial sizing and setup event listener
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation tracking
    let animationFrame = 0;
    
    // Width and height for calculations
    const width = canvas.width;
    const height = canvas.height;

    // Transparent background
    const bgColor = 'transparent';
    
    // Initialize Node class
    class Node {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      type: string;
      speed: number;
      connections: any[];
      opacity: number;
      phase: number;
      flowOffset: number;
      pulseSpeed: number;
      moveRange: number;
      shapeType: string;
      rotation: number;
      rotationSpeed: number;
      birthTime?: number;
      growthPhase?: number;
      maxGrowth?: number;

      constructor(x: number, y: number, size: number, type: string) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.size = size;
        this.type = type;
        this.speed = Math.random() * 0.01 + 0.005;
        this.connections = [];
        this.opacity = Math.random() * 0.4 + 0.4;
        this.phase = Math.random() * Math.PI * 2;
        this.flowOffset = Math.random() * 100;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.moveRange = Math.random() * 30 + 20;
        this.shapeType = Math.random() > 0.6 ? 'rect' : 'line';
        this.rotation = Math.random() * Math.PI;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        
        // Interactive nodes
        if (type === 'interactive') {
          this.birthTime = timeRef.current;
          this.growthPhase = 0;
          this.maxGrowth = 1;
          this.moveRange = this.moveRange * 0.5;
          this.opacity = 0.8;
          this.shapeType = 'rect'; // Always use square for interactive nodes
        }
      }

      update() {
        const noiseX = Math.sin(timeRef.current * this.speed + this.phase) * this.moveRange;
        const noiseY = Math.cos(timeRef.current * this.speed * 0.7 + this.phase) * this.moveRange;

        if (this.type === 'heaven') {
          this.x = this.originX + noiseX;
          this.y = this.originY + noiseY * 0.7;
        } else if (this.type === 'earth') {
          this.x = this.originX + noiseX * 0.6 + Math.sin(timeRef.current * 0.02 + this.flowOffset) * 10;
          this.y = this.originY + noiseY * 0.8;
        } else if (this.type === 'vibe') {
          this.x = this.originX + Math.sin(timeRef.current * 0.03) * 20;
          this.y = this.originY + Math.cos(timeRef.current * 0.04) * 20;
          this.size = 6 + Math.sin(timeRef.current * 0.05 + this.phase) * 2;
        } else if (this.type === 'interactive') {
          this.x = this.originX + noiseX * 0.3;
          this.y = this.originY + noiseY * 0.3;

          if (this.growthPhase !== undefined && this.maxGrowth !== undefined && 
              this.growthPhase < this.maxGrowth) {
            this.growthPhase += 0.05;
          }
        }

        this.rotation += this.rotationSpeed;
      }

      draw() {
        if (!ctx) return;
        
        let fillColor;
        // White for normal nodes, teal for interactive
        if (this.type === 'heaven' || this.type === 'earth') {
          fillColor = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
        } else if (this.type === 'interactive') {
          fillColor = `rgba(111, 255, 233, ${this.opacity})`;
        } else {
          fillColor = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
        }

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Growth animation for interactive nodes
        let sizeMultiplier = 1;
        if (this.type === 'interactive' && this.growthPhase !== undefined) {
          sizeMultiplier = Math.min(this.growthPhase, 1);
          
          if (this.growthPhase >= 1) {
            // Create a single fading circle that emanates
            const timeSinceBirth = timeRef.current - (this.birthTime || 0);
            const cycleTime = 120; // Time for one complete cycle
            const cyclePhase = (timeSinceBirth % cycleTime) / cycleTime;
            
            if (cyclePhase < 0.8) { // Only show during 80% of the cycle for a pause between pulses
              const expansionFactor = 1 + cyclePhase * 6; // Expand to 4x the size over time
              const ringRadius = this.size * 0.6 *expansionFactor;
              const fadeOpacity = Math.max(0, 0.6 - cyclePhase * 0.75); // Fade to invisible
              
              ctx.strokeStyle = `rgba(111, 255, 233, ${fadeOpacity})`;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
        }

        ctx.fillStyle = fillColor;

        if (this.shapeType === 'rect') {
          const pulseSize = this.size * sizeMultiplier * (1 + Math.sin(timeRef.current * this.pulseSpeed) * 0.2);
          ctx.fillRect(-pulseSize/2, -pulseSize/2, pulseSize, pulseSize);
        } else {
          const pulseLength = this.size * 2 * sizeMultiplier * (1 + Math.sin(timeRef.current * this.pulseSpeed) * 0.2);
          ctx.fillRect(-pulseLength/2, -1, pulseLength, 2);
        }

        ctx.restore();
      }
    }

    // Make Node available globally
    (window as any).Node = Node;

    // Initialize nodes
    const initNodes = () => {
      // Heaven nodes
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width * 0.8 + width * 0.1;
        const y = Math.random() * height * 0.4;
        const size = Math.random() * 4 + 2;
        nodesRef.current.push(new Node(x, y, size, 'heaven'));
      }
      
      // Earth nodes
      for (let i = 0; i < 15; i++) {
        const bias = Math.random() * Math.random(); 
        const x = width * bias * 0.7 + width * 0.1;
        const y = height * 0.4 + Math.random() * height * 0.2;
        const size = Math.random() * 4 + 2;
        nodesRef.current.push(new Node(x, y, size, 'earth'));
      }
      
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * width * 0.7 + width * 0.15;
        const y = height * 0.6 + Math.random() * height * 0.35;
        const size = Math.random() * 4 + 2;
        nodesRef.current.push(new Node(x, y, size, 'earth'));
      }
      
      // Vibe node
      nodesRef.current.push(new Node(width * 0.15, height * 0.5, 6, 'vibe'));
    };

    // Create connections between nodes
    const createConnections = () => {
      // Calculate responsive connection distances based on screen size
      const screenWidth = window.innerWidth;
      // Base distances for large screens
      const largeScreenStandardDistance = 240;
      const largeScreenInteractiveDistance = 360;
      // Scale factor (ranges from 0.5 to 1 based on screen width from 600px to 1920px)
      const scaleFactor = Math.min(Math.max((screenWidth - 600) / 1320, 0.5), 1);
      // Calculate actual distances to use
      const standardDistance = largeScreenStandardDistance * scaleFactor;
      const interactiveDistance = largeScreenInteractiveDistance * scaleFactor;

      for (let i = 0; i < nodesRef.current.length; i++) {
        nodesRef.current[i].connections = [];
        for (let j = 0; j < nodesRef.current.length; j++) {
          if (i !== j) {
            const dx = nodesRef.current[i].x - nodesRef.current[j].x;
            const dy = nodesRef.current[i].y - nodesRef.current[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            let maxDistance = standardDistance;
            if (nodesRef.current[i].type === 'vibe' || nodesRef.current[j].type === 'vibe' || 
                nodesRef.current[i].type === 'interactive' || nodesRef.current[j].type === 'interactive') {
              maxDistance = interactiveDistance;
            }
            
            if (distance < maxDistance) {
              let opacity = (1 - (distance / maxDistance)) * 0.3;
              if (nodesRef.current[i].type === 'interactive' || nodesRef.current[j].type === 'interactive') {
                opacity *= 1.5;
              }
              
              nodesRef.current[i].connections.push({
                to: j,
                distance: distance,
                opacity: opacity
              });
            }
          }
        }
      }
    };
    
    // Make createConnections available globally
    (window as any).createConnections = createConnections;
    
    // Draw connections between nodes
    const drawConnections = () => {
      if (!ctx) return;
      
      for (let i = 0; i < nodesRef.current.length; i++) {
        const node = nodesRef.current[i];
        for (const conn of node.connections) {
          const targetNode = nodesRef.current[conn.to];
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          
          const midX = (node.x + targetNode.x) / 2;
          const midY = (node.y + targetNode.y) / 2;
          const flowOffsetX = Math.sin(timeRef.current * 0.02 + i * 0.1) * 10;
          const flowOffsetY = Math.cos(timeRef.current * 0.02 + i * 0.1) * 10;
          
          ctx.quadraticCurveTo(
            midX + flowOffsetX,
            midY + flowOffsetY,
            targetNode.x,
            targetNode.y
          );
          
          // White connections for regular nodes, teal for interactive
          let connectionColor;
          if (node.type === 'interactive' || targetNode.type === 'interactive') {
            connectionColor = `rgba(111, 255, 233, ${conn.opacity})`;
          } else {
            connectionColor = `rgba(255, 255, 255, ${conn.opacity * 0.9})`;
          }
          
          ctx.strokeStyle = connectionColor;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      timeRef.current += 0.5;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update nodes
      for (const node of nodesRef.current) {
        node.update();
      }
      
      // Periodically recreate connections
      if (timeRef.current % 30 === 0) {
        createConnections();
      }
      
      // Draw connections
      drawConnections();
      
      // Draw nodes
      for (const node of nodesRef.current) {
        node.draw();
      }
      
      // Special effects for vibe node
      const vibeNode = nodesRef.current.find(n => n.type === 'vibe');
      if (vibeNode && ctx) {
        ctx.save();
        ctx.translate(vibeNode.x, vibeNode.y);
        
        const numLines = 20;
        for (let i = 0; i < numLines; i++) {
          const angle = i / numLines * Math.PI * 2;
          const length = 20 + Math.sin(angle * 3 + timeRef.current * 0.05) * 10;
          
          ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(
            Math.cos(angle) * length,
            Math.sin(angle) * length
          );
          ctx.stroke();
        }
        
        ctx.restore();
      }
      
      // Continue animation
      animationFrame = requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    initNodes();
    createConnections();
    animationFrame = requestAnimationFrame(animate);
    
    // No need to add click event listener here since we use the onClick prop on the canvas element
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
      // We don't need to remove the click event listener since we use the onClick prop
      nodesRef.current = [];
      flowingPathsRef.current = [];
    };
  }, [handleCanvasClick]);

  // This needs to be a higher z-index but still behind content to ensure clicks work properly
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0, // Moved to 0 to be above truly background elements but below content
      pointerEvents: 'none' // Allow clicks to pass through to elements behind
    }}>
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        style={{ 
          display: 'block',
          width: '100%',
          height: '100%',
          cursor: 'crosshair',
          pointerEvents: 'auto' // Enable pointer events just for the canvas
        }}
      />
    </div>
  );
};

export default TetheredFlow;
