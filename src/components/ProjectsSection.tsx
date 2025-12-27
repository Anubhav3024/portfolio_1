import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "FinWell – Personal Finance Dashboard",
    description: "A comprehensive personal finance dashboard for tracking expenses, managing budgets, and visualizing financial goals. Built with modern web technologies featuring intuitive data visualization.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts", "Supabase"],
    githubUrl: "https://github.com/Anubhav3024/financial-zen-dashboard",
    liveUrl: "https://fin-well-24veibc6d-anubhav2022ug3024-2719s-projects.vercel.app/",
  },
  {
    title: "Med-Bridge – Healthcare Management Platform",
    description: "A healthcare management platform connecting patients with medical professionals. Features appointment scheduling, medical records management, and seamless communication.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Zod", "Recharts"],
    githubUrl: "https://github.com/Anubhav3024/med-bridge",
    liveUrl: "https://med-bridge-one.vercel.app/",
  },
  {
    title: "Study Sync – E-Learning Landing Page",
    description: "An engaging e-learning landing page designed to showcase online courses and educational content. Features modern UI with smooth animations and responsive design.",
    technologies: ["HTML5", "CSS3", "CSS Variables", "Responsive Design"],
    githubUrl: "https://github.com/Anubhav3024/Study-sync-webpage",
    liveUrl: "https://anubhav3024.github.io/Study-sync-webpage/",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card-gradient rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group">
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
        <div className="flex gap-3">
          <Button variant="heroOutline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </a>
          </Button>
          {project.liveUrl && (
            <Button variant="hero" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
      className={`py-20 bg-secondary/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
