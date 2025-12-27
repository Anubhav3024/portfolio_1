import { useEffect, useState, useRef } from "react";
import { Code2, Globe, Palette, Database, Wrench, Brain } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["C++", "JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: ["React.js", "Next.js", "Node.js", "RESTful APIs", "Responsive Web Design"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Frameworks & Libraries",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Tailwind CSS", "Shadcn UI", "React Hook Form", "Zod", "Recharts", "Radix UI"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Developer Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "GitHub", "VS Code", "Cursor AI", "Vercel", "Render"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Databases & Design",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "LocalStorage", "Figma", "Adobe XD", "Canva", "Power BI"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Core Competencies",
    icon: <Brain className="w-6 h-6" />,
    skills: ["DSA", "OOP", "SDLC", "Web Optimization", "State Management"],
    gradient: "from-indigo-500 to-blue-600",
  },
];

const SkillCard = ({ category, index, isVisible }: { category: SkillCategory; index: number; isVisible: boolean }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Icon with gradient background */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {category.icon}
      </div>
      
      {/* Title */}
      <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
        {category.title}
      </h3>
      
      {/* Skills as tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className={`inline-block px-3 py-1.5 text-sm font-medium rounded-full bg-background/50 border border-border/50 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/5`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to build modern web applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;