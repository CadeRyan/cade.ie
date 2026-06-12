"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { TransitionProvider } from "./TransitionProvider";
import Preloader from "./Preloader";
import SmoothScroll from "./SmoothScroll";
import Header from "./Header";
import Footer from "./Footer";
import Cursor from "./Cursor";
import GLBackground from "@/components/gl/GLBackground";

/** Everything around the page content. Bare routes (the wedding embed) opt out. */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/wedding") {
    return <>{children}</>;
  }

  return (
    <TransitionProvider>
      <GLBackground />
      <SmoothScroll />
      <Preloader />
      <Header />
      <main id="main" className="relative z-10">
        {children}
      </main>
      <Footer />
      <Cursor />
      <div className="grain" aria-hidden />
    </TransitionProvider>
  );
}
