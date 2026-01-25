import { useEffect, useState, useRef } from "react";
import { Code2, Globe, Palette, Database, Wrench, Brain } from "lucide-react";

// Import toolbelt icons
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";
import icon4 from "@/assets/icons/icon4.png";
import icon5 from "@/assets/icons/icon5.png";
import icon6 from "@/assets/icons/icon6.png";
import icon7 from "@/assets/icons/icon7.png";
import icon8 from "@/assets/icons/icon8.png";
import icon9 from "@/assets/icons/icon9.png";
import icon10 from "@/assets/icons/icon10.png";
import icon11 from "@/assets/icons/icon11.png";
import icon12 from "@/assets/icons/icon12.png";
import icon13 from "@/assets/icons/icon13.png";
import icon14 from "@/assets/icons/icon14.png";
import icon15 from "@/assets/icons/icon15.png";
import icon16 from "@/assets/icons/icon16.png";

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
    skills: [
      "C++",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "HTML5",
      "CSS3",
    ],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "RESTful APIs",
      "Responsive Web Design",
      "Vite",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Frameworks & Libraries",
    icon: <Palette className="w-6 h-6" />,
    skills: [
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Radix UI",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Developer Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Cursor AI",
      "Vercel",
      "Render",
      "Netlify",
      "Replit",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Databases & Design",
    icon: <Database className="w-6 h-6" />,
    skills: [
      "MySQL",
      "Supabase",
      "MongoDB",
      "LocalStorage",
      "Figma",
      "Adobe XD",
      "Canva",
      "Power BI",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Core Competencies",
    icon: <Brain className="w-6 h-6" />,
    skills: ["DSA", "OOP", "Web Optimization", "State Management"],
    gradient: "from-indigo-500 to-blue-600",
  },
];

const toolAttributes = [
  { src: icon1, color: "97, 218, 251" }, // React Blue
  { src: icon2, color: "240, 219, 79" }, // JS Yellow
  { src: icon3, color: "227, 79, 38" }, // HTML Orange
  { src: icon4, color: "41, 101, 241" }, // CSS Blue
  { src: icon5, color: "104, 160, 99" }, // Node Green
  { src: icon6, color: "0, 117, 143" }, // MySQL Blue
  { src: icon7, color: "240, 80, 50" }, // Git Red
  { src: icon8, color: "255, 255, 255" }, // Next.js White/Black
  { src: icon9, color: "56, 189, 248" }, // Tailwind Blue
  { src: icon10, color: "142, 249, 252" }, // Mint
  { src: icon11, color: "252, 142, 239" }, // Pink
  { src: icon12, color: "142, 252, 157" }, // Green
  { src: icon13, color: "252, 208, 142" }, // Orange
  { src: icon14, color: "142, 202, 252" }, // Sky
  { src: icon15, color: "168, 85, 247" }, // Purple
  { src: icon16, color: "236, 72, 153" }, // Pink-Red
];

const SkillCard = ({
  category,
  index,
  isVisible,
}: {
  category: SkillCategory;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-[#112240] border border-[#233554] p-8 transition-all duration-500 hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Header: Icon & Title */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`relative p-3 rounded-xl bg-[#112240] border border-[#233554] group-hover:border-primary/50 transition-colors duration-300 shadow-lg`}
        >
          {/* Icon glow backdrop */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 blur-lg rounded-xl`}
          ></div>
          <div className="relative z-10 text-primary">{category.icon}</div>
        </div>
        <h3 className="font-serif text-xl font-bold text-[#E6F1FF] group-hover:text-primary transition-colors">
          {category.title}
        </h3>
      </div>

      {/* Skills as tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className={`inline-block px-3 py-1.5 text-xs font-mono font-medium rounded text-primary bg-[#112240]/50 border border-primary/20 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Decorative corner accent */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.gradient} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity pointer-events-none`}
      />
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#0a192f]">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to build
            modern web applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Start Carousel Section */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="carousel-wrapper">
            <div className="carousel-inner">
              {/* Duplicate the items to ensure seamless scrolling width coverage */}
              {[...toolAttributes, ...toolAttributes].map((item, index) => (
                <div
                  key={index}
                  className="carousel-card p-4"
                  style={{ "--color-card": item.color } as React.CSSProperties}
                >
                  <img
                    src={item.src}
                    alt="Tool Icon"
                    className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Carousel Section */}
      </div>
    </section>
  );
};
export default SkillsSection;
