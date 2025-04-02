"use client";

import Link from "next/link";
import Image from "next/image"; // Import Image component
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Using lucide-react icons

// Reusable NavLink component for consistent styling
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      // Added whitespace-nowrap, updated colors to match koduu theme
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
        isActive
          ? "bg-light-teal/10 text-light-teal shadow-inner" // Active state style using light-teal
          : "text-white/80 hover:bg-light-teal/10 hover:text-light-teal" // Default state style using white/light-teal
      }`}
    >
      {children}
    </Link>
  );
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to detect scroll position for header styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Header: Floating pill style */}
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ${
          isScrolled ? 'shadow-md' : '' // Add shadow on scroll
        }`}
      >
        {/* Background with blur and border - updated colors */}
        {/* Applied responsive gap and removed fixed margin from logo link below */}
        {/* Added w-max to prevent the container itself from shrinking */}
        {/* Changed 2xl:gap-12 to wide:gap-12 (using custom 1440px breakpoint) */}
        <div className="flex w-max items-center flex-nowrap md:gap-8 xl:gap-24 wide:gap-48 bg-dark-blue/30 backdrop-blur-sm border border-dark-blue-2/60 rounded-full px-6 py-2 shadow-lg">
          <Link
            href="/"
            // Replaced text with Image component
            className="block flex-shrink-0 transition-opacity duration-200 hover:opacity-80 text-xl font-semibold text-white no-underline" // Use text styles
            aria-label="Cade Ryan Home" // Updated aria-label
          >
            Cade Ryan {/* Replaced Image with text */}
          </Link>
          <nav className="flex flex-shrink-0 items-center gap-2"> {/* Added flex-shrink-0 */}
            {/* Updated NavLinks - Added Home */}
            <NavLink href="/">Home</NavLink> {/* Added Home link */}
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* Mobile Header: Full width, fixed at top - updated colors */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between p-4 bg-dark-blue/90 backdrop-blur-md border-b border-dark-blue-2/30">
        <Link
          href="/"
           // Replaced text with Text
           className="block transition-opacity duration-200 hover:opacity-80 text-lg font-semibold text-white no-underline" // Use text styles
           aria-label="Cade Ryan Home" // Updated aria-label
        >
          Cade Ryan {/* Replaced Image with text */}
        </Link>
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          className="p-2 text-light-teal" // Icon color updated
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Panel: Slides from left - updated colors */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-dark-blue z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full" // Slide animation
        }`}
      >
        {/* Mobile menu links - updated colors */}
        <nav className="flex flex-col items-center justify-center h-full gap-6 pt-16"> {/* Added padding-top */}
          <Link href="/" className="text-2xl font-medium text-white hover:text-orange" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/about" className="text-2xl font-medium text-white hover:text-orange" onClick={toggleMobileMenu}>About</Link>
          <Link href="/projects" className="text-2xl font-medium text-white hover:text-orange" onClick={toggleMobileMenu}>Projects</Link>
          <Link href="/contact" className="text-2xl font-medium text-white hover:text-orange" onClick={toggleMobileMenu}>Contact</Link>
        </nav>
      </div>
      {/* No spacer needed, content can flow underneath */}
    </>
  );
}
