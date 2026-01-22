import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-brand-dark border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Fotografie Portfolio via Antigravity.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <span className="text-gray-500 text-xs uppercase tracking-widest">
                            Gemaakt met React & Tailwind
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
