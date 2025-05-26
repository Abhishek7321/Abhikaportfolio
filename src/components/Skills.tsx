import SectionTitle from './SectionTitle';
import { Code, Server, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    // Frontend Skills
    { name: 'HTML', proficiency: 90, category: 'frontend' },
    { name: 'CSS', proficiency: 85, category: 'frontend' },
    { name: 'JavaScript', proficiency: 80, category: 'frontend' },
    { name: 'Bootstrap', proficiency: 85, category: 'frontend' },
    { name: 'Tailwind CSS', proficiency: 80, category: 'frontend' },
    
    // Backend Skills
    { name: 'Java', proficiency: 85, category: 'backend' },
    { name: 'C', proficiency: 90, category: 'backend' },
    { name: 'Node.js', proficiency: 75, category: 'backend' },
    { name: 'Spring Boot', proficiency: 70, category: 'backend' },
    
    // Mobile & Tools
    { name: 'Kotlin', proficiency: 80, category: 'tools' },
    { name: 'Figma', proficiency: 75, category: 'tools' },
    { name: 'Git', proficiency: 85, category: 'tools' }
  ];

  // Categorize skills
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  const SkillCard = ({ 
    title, 
    icon: Icon, 
    skills 
  }: { 
    title: string; 
    icon: any; 
    skills: Skill[] 
  }) => (
    <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg">
          <Icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Skills" subtitle="What I'm good at" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
          <SkillCard 
            title="Frontend Development" 
            icon={Code} 
            skills={frontendSkills} 
          />
          
          <SkillCard 
            title="Backend Development" 
            icon={Server} 
            skills={backendSkills} 
          />
          
          <SkillCard 
            title="Tools & Technologies" 
            icon={Wrench} 
            skills={toolsSkills} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;