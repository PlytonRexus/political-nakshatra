// Layout Component - Wraps all pages

import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
