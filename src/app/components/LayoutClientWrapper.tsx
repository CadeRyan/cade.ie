'use client'; // This component needs to be a client component to use hooks

import React from 'react'; // Removed useEffect import
import { usePathname } from 'next/navigation';
// Removed Image import as footer image is removed
import { Header, TetheredFlow } from './'; // Import components from barrel file

interface LayoutClientWrapperProps {
  children: React.ReactNode;
}

export default function LayoutClientWrapper({ children }: LayoutClientWrapperProps) {
  const pathname = usePathname();

  // Removed useEffect hook for body class manipulation

  return (
    <>
      {/* Add TetheredFlow as background on non-wedding pages */}
      {pathname !== '/wedding' && <TetheredFlow />}

      {pathname !== '/wedding' && <Header />} {/* Conditionally render Header */}
      {children}
      {pathname !== '/wedding' && <div className="bottom-gradient" />} {/* Conditionally render gradient */}

      {/* Removed conditional footer image rendering */}
    </>
  );
}
