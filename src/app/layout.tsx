// Removed 'use client' and usePathname import
import type { Metadata } from "next";

import "./globals.css";
// Removed DotAnimation, Added CustomCursor
// Import Header removed as it's now handled by LayoutClientWrapper
import { CustomCursor } from "./components"; 
import LayoutClientWrapper from './components/LayoutClientWrapper'; // Import the new wrapper

export const metadata: Metadata = {
  title: "Cade Ryan",
  description: "Cade Ryan - Software Engineer based in Vancouver, BC. Building innovative digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Removed pathname logic
  return (
    <html lang="en" className="dark-theme">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/koduu_favicon.svg" type="image/svg+xml" />
        
        <script
            type="application/javascript"
            id="voxMailScript"
            data-serviceID="8a15c64efd7ec"
            async
            defer
            src="https://us-central1-vcml-7b6cd.cloudfunctions.net/getScript?serviceID=8a15c64efd7ec"
        ></script>
     
      </head>
      <body>
        {/* <DotAnimation /> Removed */}
        {/* <div className="dots" /> Removed */}
        <CustomCursor /> {/* Added CustomCursor component */}
        {/* Wrap children and conditional header logic in the client wrapper */}
        <LayoutClientWrapper>
          {children}
        </LayoutClientWrapper>
        {/* Removed bottom-gradient div, now handled by LayoutClientWrapper */}
      </body>
    </html>
  );
}
