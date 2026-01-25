import {
  Calendar,
  MapPin,
  GraduationCap,
  Instagram,
  Info,
  Award,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import kritiLogo from "@/assets/kriti-logo.png";
import piccellLogo from "@/assets/piccell-logo.png";
import pythonCert from "@/assets/certificates/python-cert.png";
import reactCert from "@/assets/certificates/react-cert.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const educationData = [
  {
    year: "2021 - 2025",
    title: "Bachelor of Technology",
    institution: "IIIT Ranchi",
    grade: "7.73 CGPA",
    location: "Ranchi, Jharkhand",
    description: "CSE (AI & Data Science)",
    fullDescription:
      "Pursuing B.Tech in Computer Science & Engineering with specialization in AI and Data Science from IIIT Ranchi. Developing core skills in programming, data structures, machine learning, and full-stack web development. Active participant in technical societies and hackathons.",
  },
  {
    year: "2020 - 2021",
    title: "Senior Secondary (12th)",
    institution: "RBSE Board",
    grade: "98.4%",
    location: "Khairthal, Rajasthan",
    description: "Science (PCM)",
    fullDescription:
      "Completed senior secondary education with an outstanding 98.4% in the Science stream (Physics, Chemistry, Mathematics). Developed a strong analytical foundation which paved the way for engineering studies.",
  },
  {
    year: "2018 - 2019",
    title: "Secondary (10th)",
    institution: "RBSE Board",
    grade: "95.64%",
    location: "Khairthal, Rajasthan",
    description: "General Education",
    fullDescription:
      "Achieved a milestone 95.64% in secondary education under the RBSE board, demonstrating consistent academic excellence and dedication to learning from an early stage.",
  },
];

const activityData = [
  {
    position: "Head",
    club: "Kriti Art Club",
    year: "2023-24",
    logo: kritiLogo,
    link: "https://www.instagram.com/kriti_iiitranchi",
    description:
      "Led artistic initiatives, managed workshop logistics for college festivals, and coordinated a team of 15+ members to organize creative events and exhibitions.",
  },
  {
    position: "Content Head",
    club: "Piccell Photography",
    year: "2023-24",
    logo: piccellLogo,
    link: "https://www.instagram.com/piccell_iiitr",
    description:
      "Directed content strategy, curated visual media for official college social media handles with 800+ followers, and managed the club's digital presence and event coverage.",
  },
];

const certificationsData = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Nov 2025",
    skills: ["React.js", "JavaScript", "CSS", "Hooks"],
    link: "https://www.hackerrank.com/certificates/6922bbc41f46",
    image: reactCert,
    description:
      "Validated proficiency in React.js, including component lifecycle, hooks, and state management, through a rigorous assessment by HackerRank.",
  },
  {
    title: "Intro onto Programming using Python",
    issuer: "AI for Techies",
    date: "Nov 2025",
    skills: ["Python", "NumPy", "Matplotlib", "AI Basics"],
    link: "https://drive.google.com/file/d/14W2Cg7eJdBg3uARpC6rXFXgooE8fkNR1/view?usp=drive_link",
    image: pythonCert,
    description:
      "Completed a comprehensive workshop on Python programming and AI fundamentals, focusing on data visualization and AI-assisted coding.",
  },
];

const JourneySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="journey"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 bg-secondary/10"
    >
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-10">
          My <span className="text-gradient">Journey</span>
        </h2>

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Row: Education & Certifications adjacent */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" /> Education
              </h3>
              <div className="space-y-6">
                {educationData.map((item, i) => (
                  <Dialog key={i}>
                    <DialogTrigger asChild>
                      <div className="card-gradient p-5 rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group relative overflow-hidden h-full">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-primary text-sm">
                                {item.institution}
                              </p>
                            </div>
                            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                              {item.grade}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                            {item.fullDescription}
                          </p>
                          <div className="flex justify-between items-center text-xs text-muted-foreground mt-auto">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {item.year}
                            </span>
                            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                              <Info className="w-3 h-3" /> Click for details
                            </span>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="card-gradient border-primary/20 sm:max-w-md bg-secondary/95 backdrop-blur-xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif font-bold text-primary flex items-center gap-2">
                          <GraduationCap className="w-6 h-6" /> {item.title}
                        </DialogTitle>
                        <DialogDescription className="text-lg font-medium text-foreground mt-2">
                          {item.institution}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground border-b border-border/50 pb-2">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />{" "}
                            {item.year}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />{" "}
                            {item.location}
                          </span>
                        </div>
                        <div className="bg-secondary/30 p-3 rounded-lg border border-border/50">
                          <span className="text-sm font-semibold text-primary">
                            Performance:
                          </span>
                          <span className="ml-2 text-foreground font-bold">
                            {item.grade}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.fullDescription}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <Award className="text-primary" /> Certifications
              </h3>
              <div className="space-y-6">
                {certificationsData.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block card-gradient p-5 rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group relative overflow-hidden h-full"
                  >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex flex-col gap-3">
                      <div className="w-full h-40 rounded-lg overflow-hidden border border-border/30">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-md group-hover:text-primary transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-primary text-xs mt-1">
                          {item.issuer}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.skills.slice(0, 3).map((skill, k) => (
                          <span
                            key={k}
                            className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-xs text-muted-foreground mt-auto">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          View Cert &rarr;
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row: Leadership (Full Width) */}
          <div className="w-full">
            <h3 className="text-2xl font-serif font-bold mb-8 flex items-center justify-center gap-2">
              <Instagram className="text-primary" /> Leadership &
              Extracurriculars
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {activityData.map((item, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div className="card-gradient p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg flex items-center gap-6 cursor-pointer group relative overflow-hidden h-full">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 flex items-center gap-6 w-full">
                        <img
                          src={item.logo}
                          alt={item.club}
                          className="w-20 h-20 rounded-full border-2 border-primary/20 object-cover shadow-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground text-xl group-hover:text-primary transition-colors mb-1">
                            {item.position}
                          </h4>
                          <p className="text-primary font-medium">
                            {item.club}
                          </p>
                          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-xs self-start bg-secondary text-muted-foreground px-3 py-1 rounded-md border border-border">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="card-gradient border-primary/20 sm:max-w-md bg-secondary/95 backdrop-blur-xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif font-bold text-primary flex items-center gap-2">
                        <Instagram className="w-6 h-6" /> {item.position}
                      </DialogTitle>
                      <DialogDescription className="text-lg font-medium text-foreground mt-2">
                        {item.club}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="flex justify-center my-4">
                      <div className="relative w-24 h-24 rounded-full p-1 border-2 border-primary/30 shadow-lg shadow-primary/10">
                        <img
                          src={item.logo}
                          alt={item.club}
                          className="w-full h-full rounded-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 bg-background rounded-full p-1 border border-border">
                          <Instagram className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-center">
                        {item.description}
                      </p>

                      <div className="pt-4 flex justify-center">
                        <a
                          href={item.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-lg hover:scale-105"
                        >
                          <Instagram className="w-4 h-4" /> Visit Page
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}

              {/* Quote Card (Full Width in Grid) */}
              <div className="md:col-span-2 p-6 rounded-xl border border-dashed border-border/50 flex flex-col justify-center items-center text-center text-muted-foreground h-full min-h-[140px] bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <p className="text-lg font-serif italic text-primary/80">
                  "Leadership is not about being in charge. It is about taking
                  care of those in your charge."
                </p>
                <p className="text-xs mt-2 opacity-60">- Simon Sinek</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
