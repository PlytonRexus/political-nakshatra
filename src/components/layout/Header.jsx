// Header Component

import { Link } from 'react-router-dom';
import { Stars } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Stars className="text-yellow-400" size={32} />
            <div>
              <h1 className="text-xl font-bold text-white">Political Nakshatra</h1>
              <p className="text-xs text-gray-400">राजनीति नक्षत्र</p>
            </div>
          </Link>

          <nav className="flex gap-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
