import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import thumbnail1 from "@/assets/thumbnail/thumbnail1.png";
import thumbnail2 from "@/assets/thumbnail/thumbnail2.png";
import thumbnail3 from "@/assets/thumbnail/thumbnail3.png";
import thumbnail4 from "@/assets/thumbnail/thumbnail4.png";
import thumbnail5 from "@/assets/thumbnail/thumbnail5.png";
import thumbnail6 from "@/assets/thumbnail/thumbnail6.png";
import thumbnail7 from "@/assets/thumbnail/thumbnail7.png";
import thumbnail8 from "@/assets/thumbnail/thumbnail8.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "VibeHub – Event Management Platform",
    description:
      "A modern event ticketing platform supporting event discovery, booking, and role-based event management with built-in analytics for tracking performance and sales.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Anubhav3024/Vib-Hub--event-managment-web",
    liveUrl: "https://vibe-hub-sable.vercel.app/",
    image: thumbnail1,
  },
  {
    title: "FinWell – Personal Finance Dashboard",
    description:
      "A comprehensive personal finance dashboard for tracking expenses, managing budgets, and visualizing financial goals. Built with modern web technologies featuring intuitive data visualization.",
    technologies: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Supabase",
    ],
    githubUrl: "https://github.com/Anubhav3024/financial-zen-dashboard",
    liveUrl:
      "https://fin-well-24veibc6d-anubhav2022ug3024-2719s-projects.vercel.app/",
    image: thumbnail6,
  },
  {
    title: "Med-Bridge – Healthcare Management Platform",
    description:
      "A healthcare management platform connecting patients with medical professionals. Features appointment scheduling, medical records management, and seamless communication.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Recharts",
    ],
    githubUrl: "https://github.com/Anubhav3024/med-bridge",
    liveUrl: "https://med-bridge-one.vercel.app/",
    image: thumbnail7,
  },
  {
    title: "Study Sync – E-Learning Landing Page",
    description:
      "An engaging e-learning landing page designed to showcase online courses and educational content. Features modern UI with smooth animations and responsive design.",
    technologies: ["HTML5", "CSS3", "CSS Variables", "Responsive Design"],
    githubUrl: "https://github.com/Anubhav3024/Study-sync-webpage",
    liveUrl: "https://anubhav3024.github.io/Study-sync-webpage/",
    image: thumbnail4,
  },
  {
    title: "Chef's Recipe Book – Vlog Website",
    description:
      "A dynamic recipe vlog website allowing users to explore and share culinary recipes with video content.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    githubUrl: "https://github.com/Anubhav3024/Chef-s-recipy-Book",
    liveUrl: "https://chefs-recipy-book.netlify.app/",
    image: thumbnail3,
  },
  {
    title: "OneStop Cart – Ecommerce Platform",
    description:
      "A full-featured ecommerce platform offering a seamless shopping experience with product browsing and cart functionality.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    githubUrl: "https://github.com/Anubhav3024/emart-shopping",
    liveUrl: "https://onestopcart.netlify.app/",
    image: thumbnail2,
  },
  {
    title: "Ryze-AI – Ads Management Webapp",
    description:
      "An intelligent ads management web application designed to optimize ad campaigns and track performance metrics.",
    technologies: ["React", "AI Integration", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Anubhav3024/ryze-Ai",
    liveUrl: "https://ryzen-ai.vercel.app/",
    image: thumbnail5,
  },
  {
    title: "GuessWin – Logic Game",
    description:
      "An interactive number guessing game that challenges users to guess the correct number within limited attempts.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    githubUrl: "https://github.com/Anubhav3024/guess-win",
    liveUrl: "https://anubhav3024.github.io/guess-win/",
    image: thumbnail8,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card-gradient rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group flex flex-col h-full">
      {/* Project Thumbnail Image */}
      <div className="w-full aspect-video overflow-hidden relative border-b border-border/50 bg-secondary/20">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-secondary/50 text-primary text-xs px-3 py-1 rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <Button variant="heroOutline" size="sm" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </a>
          </Button>
          {project.liveUrl && (
            <Button variant="hero" size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 bg-secondary/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
