import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Abhikamotors.com",
      description: "Fully dynamic responsive landing page for Abhina Motors PVT LTD with modern design and seamless user experience.",
      image: "/Photos/abhikamotors.png",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "MongoDB"],
      githubLink: "https://github.com/Abhishek7321",
      liveLink: "https://abhikamotors.com/",
      category: "web"
    },
    {
      id: 2,
      title: "Abhika Trading Bot",
      description: "An automated trading bot that makes trades with 60% accuracy using advanced algorithms and market analysis.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Pine Script"],
      githubLink: "https://github.com/Abhishek7321",
      category: "trading"
    },
    {
      id: 3,
      title: "Hacks For You PVT. LTD.",
      description: "A comprehensive website for a trading academy offering courses and educational resources.",
      image: "/Photos/Hacks4u.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/Abhisek7321",
      liveLink: "https://hacks4u.in",
      category: "web"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "trading", name: "Trading" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Projects" subtitle="Some of my recent work" />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-teal-600 dark:bg-teal-500 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Links */}
                <div className="absolute bottom-4 right-4 flex gap-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
                    aria-label="View source code on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
