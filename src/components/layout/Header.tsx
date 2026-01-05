// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Si estamos en la home, scroll suave
    if (pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar a home y luego scroll
      router.push(`/#${targetId}`);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lyfeman
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Sobre Lyfeman
            </a>
            <a 
              href="/#apps"
              onClick={(e) => handleNavClick(e, 'apps')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Apps
            </a>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Proyectos
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a
              href="/#about"
              onClick={(e) => {
                handleNavClick(e, 'about');
                setMobileMenuOpen(false);
              }}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sobre Lyfeman
            </a>
            <a
              href="/#apps"
              onClick={(e) => {
                handleNavClick(e, 'apps');
                setMobileMenuOpen(false);
              }}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            />
            <a>
              Apps
            </a>
            <Link
              href="/projects"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Proyectos
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}