import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h1 className="text-4xl text-brand-accent font-serif mb-4">404</h1>
            <p className="text-gray-400 mb-8">Pagina niet gevonden.</p>
            <Link to="/" className="text-white border-b border-white pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
                Terug naar home
            </Link>
        </div>
    );
}
