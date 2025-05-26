import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gpa?: string;
}

const Education = () => {
  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Graphic Era Hill University',
      location: 'Dehradun, Uttarakhand',
      period: '2022 - 2026',
      description: 'Currently pursuing B.Tech in Computer Science with focus on Data Structures & Algorithms, Web Development, Computer Networks, App Development, UI/UX, and System Design.',
      gpa: '8.75/10'
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Kendriya Vidyalaya No.1',
      location: 'Dehradun, Uttarakhand',
      period: '2020 - 2022',
      description: 'Completed 12th standard with PCM (Physics, Chemistry, Mathematics) stream. Developed strong foundation in mathematics and logical reasoning.',
      gpa: '85%'
    },
    {
      degree: 'Matriculation (Class X)',
      institution: 'Kendriya Vidyalaya No.1',
      location: 'Dehradun, Uttarakhand',
      period: '2019 - 2020',
      description: 'Completed 10th standard with distinction. Developed fundamental knowledge in science, mathematics, and computer applications.',
      gpa: '92%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education" subtitle="My academic journey" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon and Degree */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.degree}</h3>
              </div>

              {/* Institution */}
              <h4 className="text-lg font-medium text-teal-600 dark:text-teal-400 mb-4">
                {item.institution}
              </h4>

              {/* Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{item.location}</span>
                </div>
                {item.gpa && (
                  <div className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium">
                    Score: {item.gpa}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;