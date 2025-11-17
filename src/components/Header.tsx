import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">SimpliLearn</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">For Business</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>

            <Link to="/login" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <User className="h-5 w-5 mr-1" />
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Sign Up Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Courses</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Programs</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">For Business</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Resources</a>

            <Link to="/login" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Login
            </Link>
            <Link to="/signup" className="block px-3 py-2 text-white bg-blue-600 rounded-md">
              Sign Up Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
