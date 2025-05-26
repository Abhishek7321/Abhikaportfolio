import { Code, Server, Layout, Monitor } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Image and bio */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Hello! I'm a third-year BTech Computer Science & Engineering student passionate about creating innovative solutions. I enjoy tackling complex problems and turning ideas into reality through code.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              My journey in technology began when I first discovered programming in high school, and since then, I've been constantly learning and exploring new technologies to expand my skillset.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              When I'm not coding, you might find me participating in hackathons, contributing to open-source projects, or exploring the latest advancements in AI and machine learning.
            </p>
          </div>
          
          {/* Interests and expertise */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">My Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Interest card 1 */}
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="bg-teal-100 dark:bg-teal-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-900/50 transition-colors duration-300">
                  <Code className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Web Development</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Building modern, responsive websites and web applications using the latest technologies and frameworks.
                </p>
              </div>
              
              {/* Interest card 2 */}
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="bg-teal-100 dark:bg-teal-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-900/50 transition-colors duration-300">
                  <Server className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Backend Development</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Designing and implementing scalable server-side applications and RESTful APIs.
                </p>
              </div>
              
              {/* Interest card 3 */}
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="bg-teal-100 dark:bg-teal-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-900/50 transition-colors duration-300">
                  <Monitor className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Machine Learning</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Exploring AI and machine learning algorithms to solve real-world problems and create intelligent systems.
                </p>
              </div>
              
              {/* Interest card 4 */}
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="bg-teal-100 dark:bg-teal-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-900/50 transition-colors duration-300">
                  <Layout className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">UI/UX Design</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Creating intuitive and visually appealing interfaces that enhance user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;