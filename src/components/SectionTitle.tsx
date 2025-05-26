interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
      <p className="text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>
      <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-6"></div>
    </div>
  );
};

export default SectionTitle;