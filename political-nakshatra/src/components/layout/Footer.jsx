// Footer Component

import { Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800/80 backdrop-blur-sm border-t border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> for understanding Indian politics
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <p className="text-sm text-gray-500">
              © 2026 Political Nakshatra
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-500 text-center">
            This tool is for educational purposes. Party positions are estimates based on policy analysis.
            Your responses are stored locally and never sent to any server.
          </p>
        </div>
      </div>
    </footer>
  );
}
