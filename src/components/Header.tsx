import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-teal-600 dark:text-teal-400"
            onClick={() => handleNavClick('home')}
          >
            MyWeb
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors duration-300 hover:text-teal-600 dark:hover:text-teal-400 ${
                  activeSection === item.id
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Resume download button */}
            <a
              href="#"
              className="hidden sm:flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              onClick={(e) => e.preventDefault()} // Replace with actual download link
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-xl">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`py-2 px-4 text-base font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#"
                className="flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg transition-colors duration-300"
                onClick={(e) => e.preventDefault()} // Replace with actual download link
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;