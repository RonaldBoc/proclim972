'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrestationsOpen, setIsPrestationsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    {
      label: 'Nos prestations',
      submenu: [
        { href: '/prestations/climatisation', label: 'Climatisation' },
        { href: '/prestations/photovoltaique', label: 'Panneaux photovoltaïques' },
      ],
    },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="ProClim972 Logo"
              width={240}
              height={80}
              className="h-2 md:h-38 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              link.submenu ? (
                <div key={index} className="relative group">
                  <button 
                    className="flex items-center gap-1.5 text-gray-700 hover:text-cyan-600 font-medium transition-colors py-2"
                    onMouseEnter={() => setIsPrestationsOpen(true)}
                    onMouseLeave={() => setIsPrestationsOpen(false)}
                  >
                    {link.label}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 min-w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-gray-100"
                    onMouseEnter={() => setIsPrestationsOpen(true)}
                    onMouseLeave={() => setIsPrestationsOpen(false)}
                  >
                    {link.submenu.map((sublink, subindex) => (
                      <Link
                        key={subindex}
                        href={sublink.href}
                        className="block px-5 py-3 text-gray-700 hover:bg-linear-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Right side: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:0596452367" className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
              <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-semibold">0596 45 23 67</span>
            </a>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-gray-100 pt-4">
            {navLinks.map((link, index) => (
              link.submenu ? (
                <div key={index} className="mb-2">
                  <button
                    className="flex items-center justify-between w-full py-3 text-gray-700 font-medium"
                    onClick={() => setIsPrestationsOpen(!isPrestationsOpen)}
                  >
                    {link.label}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform ${isPrestationsOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isPrestationsOpen && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-cyan-200">
                      {link.submenu.map((sublink, subindex) => (
                        <Link
                          key={subindex}
                          href={sublink.href}
                          className="block py-2 text-gray-600 hover:text-cyan-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="block py-3 text-gray-700 font-medium hover:text-cyan-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Mobile phone */}
            <a href="tel:0596452367" className="flex items-center gap-3 py-4 mt-2 border-t border-gray-100">
              <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-700">0596 45 23 67</span>
            </a>
            
            <Link
              href="/contact"
              className="block w-full text-center bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactez-nous
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
