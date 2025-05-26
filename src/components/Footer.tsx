import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-teal-400 mb-2">Portfolio</h2>
            <p className="text-slate-400 max-w-xs">
              A passionate Computer Science student building the future one line of code at a time.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-8 md:mb-0">
            <a href="#about" className="text-slate-300 hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-300 hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-teal-400 transition-colors">Projects</a>
            <a href="#education" className="text-slate-300 hover:text-teal-400 transition-colors">Education</a>
            <a href="#experience" className="text-slate-300 hover:text-teal-400 transition-colors">Experience</a>
            <a href="#contact" className="text-slate-300 hover:text-teal-400 transition-colors">Contact</a>
          </div>
          
          {/* Social links */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-teal-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-teal-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-slate-300 hover:text-teal-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <a 
              href="#"
              onClick={(e) => e.preventDefault()} // Replace with actual download link
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;