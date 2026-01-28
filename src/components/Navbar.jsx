import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Start', path: '/' },
        { name: 'Inhoud', path: '/toc' },
        { name: 'Portfolio', path: '/gallery' },
        { name: 'Lichtplan', path: '/lighting' },
        { name: 'Info', path: '/info' },
    ];

    // Helper to check if link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled || isOpen
                    ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg'
                    : 'bg-transparent border-b border-transparent py-2'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Area */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="flex items-center gap-2 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="text-2xl font-serif tracking-widest text-brand-accent group-hover:text-white transition-colors duration-300">
                                MD
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`relative px-1 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 group ${isActive(item.path)
                                            ? 'text-brand-accent'
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                    {/* Animated Underline */}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent transform origin-left transition-transform duration-300 ease-out ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            aria-label="Toggle main menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="h-6 w-6 transform rotate-90 transition-transform duration-300" />
                            ) : (
                                <Menu className="h-6 w-6 transition-transform duration-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Animated Panel) */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-dark/95 backdrop-blur-md border-b border-white/10 shadow-xl">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.path)
                                    ? 'bg-white/10 text-brand-accent'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}