"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type { TerrainScene } from "./TerrainScene";

/**
 * Mounts the persistent WebGL terrain behind the whole site.
 * The scene survives route changes; only its mood shifts per route.
 */
export default function GLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<TerrainScene | null>(null);
  const pathname = usePathname();
  const pathRef = useRef(pathname);
  pathRef.current = pathname;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let scene: TerrainScene | null = null;

    // Lazy-load three.js so it never blocks first paint.
    import("./TerrainScene").then(({ TerrainScene }) => {
      if (cancelled || !canvasRef.current) return;
      try {
        scene = new TerrainScene(canvasRef.current, pathRef.current);
        sceneRef.current = scene;
      } catch {
        // No WebGL — the solid ink background simply remains.
      }
    });

    return () => {
      cancelled = true;
      scene?.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    sceneRef.current?.setRoute(pathname);
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
