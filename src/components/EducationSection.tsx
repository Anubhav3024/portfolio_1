import { Calendar, MapPin, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  location: string;
  grade: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    year: "2018 - 2019",
    title: "Secondary Education (10th)",
    institution: "RBSE Board",
    location: "Engineer's Point Sr Sec School, Khairthal Rajasthan",
    grade: "95.64%",
    description: "Achieved an impressive milestone by completing secondary education under the RBSE board, reflecting strong dedication and commitment to excellence in foundational education.",
  },
  {
    year: "2020 - 2021",
    title: "Senior Secondary Education (12th)",
    institution: "RBSE Board - Science (PCM)",
    location: "Engineer's Point Sr Sec School, Khairthal Rajasthan",
    grade: "98.4%",
    description: "Completed senior secondary education with outstanding 98.4% in Mathematics stream. This academic success paved the path towards Computer Science Engineering.",
  },
  {
    year: "2021 - 2025",
    title: "Bachelor of Technology (B.Tech)",
    institution: "Computer Science & Engineering (Specialization in AI and Data Science)",
    location: "Indian Institute of Information Technology Ranchi, Jharkhand",
    grade: "7.73 CGPA",
    description: "Pursuing B.Tech in Computer Science & Engineering with specialization in AI and Data Science from IIIT Ranchi, developing skills in programming, data structures, machine learning, and web development.",
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="education" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-secondary/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-gradient">Journey</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30" />

            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-effect z-10" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="card-gradient p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{item.year}</span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    
                    <div className={`flex items-center gap-2 text-muted-foreground mb-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <GraduationCap className="h-4 w-4" />
                      <span className="text-sm">{item.institution}</span>
                    </div>
                    
                    <div className={`flex items-center gap-2 text-muted-foreground mb-3 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>

                    <div className={`inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3 ${index % 2 === 0 ? "" : "md:ml-auto"}`}>
                      {item.grade}
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
