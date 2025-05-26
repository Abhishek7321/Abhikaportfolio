import { Calendar, MapPin, Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  // Sample experience data - replace with your actual experience
  const experiences: ExperienceItem[] = [
    {
      title: "Web Development Intern",
      company: "Hacks4u Pvt Ltd.",
      location: "Paryagraj, Uttar Pradesh",
      period: "April 2025 - Present",
      description: [
        "Developing and maintaining responsive web applications using React.js and TypeScript",
        "Collaborating with the design team to implement UI/UX designs and ensure consistency across the platform",
        "Optimizing application performance and improving page load times by 30%",
        "Participating in code reviews and implementing feedback to improve code quality"
      ],
      technologies: ["React.js", "TypeScript", "Node.js", "MongoDB", "Git"]
    },
    {
      title: "Research Assistant",
      company: "University AI Lab",
      location: "Dehradun, Uttarakhand",
      period: "Nov 2024 - Jan 2025",
      description: [
        "Assisted in research on computer vision algorithms for object detection and tracking",
        "Implemented and tested various machine learning models to improve accuracy and performance",
        "Collected and preprocessed large datasets for training neural networks",
        "Co-authored a research paper presented at a student conference"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NumPy"]
    },
    {
      title: "Open Source Contributor",
      company: "GitHub Projects",
      location: "Remote",
      period: "Jun 2023 - Dec 2023",
      description: [
        "Contributed to multiple open-source projects in the JavaScript ecosystem",
        "Fixed bugs and implemented new features for popular libraries",
        "Collaborated with global developer communities to improve documentation",
        "Participated in code reviews and mentored new contributors"
      ],
      technologies: ["JavaScript", "React", "Node.js", "Git", "GitHub"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Work Experience" subtitle="My professional journey" />
        
        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex items-start pb-12 ${
                index !== experiences.length - 1 ? 'border-b border-slate-200 dark:border-slate-700 mb-12' : ''
              }`}
            >
              {/* Company logo/icon */}
              <div className="absolute left-0 mt-1">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
              </div>
              
              {/* Experience content */}
              <div className="ml-20">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                <h4 className="text-lg font-medium text-teal-600 dark:text-teal-400 mt-1">{exp.company}</h4>
                
                <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700 dark:text-slate-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
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

export default Experience;