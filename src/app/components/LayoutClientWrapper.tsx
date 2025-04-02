'use client'; // This component needs to be a client component to use hooks

import React from 'react'; // Removed useEffect import
import { usePathname } from 'next/navigation';
// Removed Image import as footer image is removed
import { Header } from './Header'; // Assuming Header is in the same directory or adjust path

interface LayoutClientWrapperProps {
  children: React.ReactNode;
}

export default function LayoutClientWrapper({ children }: LayoutClientWrapperProps) {
  const pathname = usePathname();

  // Removed useEffect hook for body class manipulation

  return (
    <>
      {/* Removed conditional top image rendering from here */}

      {pathname !== '/wedding' && <Header />} {/* Conditionally render Header */}
      {children}
      {pathname !== '/wedding' && <div className="bottom-gradient" />} {/* Conditionally render gradient */}

      {/* Removed conditional footer image rendering */}
    </>
  );
}
