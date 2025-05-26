import { ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const handleExploreClick = () => {
    setActiveSection('about');
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              👋 BTech CSE Student
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              <span className="block">Hi, I'm</span>
              <span className="text-teal-600 dark:text-teal-400 block">Abhishek Kumar Rai</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              Enthusiastic software developer with proficiency in C, Java, and web development. Eager to contribute to a fast-paced tech team and enhance my programming expertise while delivering high-quality software solutions.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-fade-in-up animation-delay-600">
              <button
                onClick={handleExploreClick}
                className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                Explore My Work
                <ArrowDown className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('contact');
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Me
              </a>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 animate-fade-in-up animation-delay-800">
              <a 
                href="https://github.com/Abhishek7321" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                <GitHub className="w-6 h-6" />
              </a>
              <a 
                href="http://www.linkedin.com/in/Abhishekrai2022" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:Abhika581@gmail.com" 
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-up animation-delay-600">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-teal-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                <img
                  src="/Photos/Abhishek.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;