import { Award, Trophy, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: 'award' | 'trophy' | 'star';
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "24-Hour Hackathon Winner",
      organization: "Graphic Era University",
      date: "2023",
      description: "Led the team to success in a 24-hour hackathon organized by Graphic Era University, demonstrating strong leadership and technical skills.",
      icon: 'trophy'
    },
    {
      title: "Scrap Creativity Competition Winner",
      organization: "BTech Mechanical Engineering Department, GEHU",
      date: "2023",
      description: "Won first prize in the Scrap Creativity Competition organized by the Mechanical Engineering Department at Graphic Era Hill University.",
      icon: 'trophy'
    },
    {
      title: "HackerRank C Language Achievement",
      organization: "HackerRank",
      date: "2023",
      description: "Earned 4-Star Silver Badge in C programming language, demonstrating strong problem-solving skills and language proficiency.",
      icon: 'star'
    },
    {
      title: "HackerRank Python Achievement",
      organization: "HackerRank",
      date: "2023",
      description: "Achieved 2-Star Bronze Badge in Python programming, showcasing versatility in multiple programming languages.",
      icon: 'award'
    }
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'award':
        return <Award className="w-6 h-6" />;
      case 'trophy':
        return <Trophy className="w-6 h-6" />;
      case 'star':
        return <Star className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Achievements" subtitle="My awards and recognitions" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:bg-teal-200 dark:group-hover:bg-teal-900/50 transition-colors duration-300">
                    {getIcon(achievement.icon)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{achievement.title}</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-1">{achievement.organization}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{achievement.date}</p>
                  <p className="text-slate-700 dark:text-slate-300">{achievement.description}</p>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;