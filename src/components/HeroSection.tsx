import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Image - Centered in left half */}
          <div className="flex-1 flex justify-center animate-slide-in-left order-1 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
              {/* White circular border with spacing */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-2 border-4 border-white/80 shadow-lg shadow-white/20">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/30 glow-effect">
                  <img
                    src={profilePhoto}
                    alt="Anubhav Singh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-right order-2 lg:order-2">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Hi, I am <span className="text-gradient">Anubhav Singh</span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-serif text-stroke mb-6 animate-slide-up animate-delay-200">
              Frontend Developer
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed animate-slide-up animate-delay-300">
              Passionate Frontend Developer skilled in crafting responsive, user-friendly interfaces with modern tools like HTML, CSS, JavaScript, and React. I focus on delivering seamless user experiences by blending clean code with innovative design. Adept at transforming ideas into functional web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-slide-up animate-delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:anubhav270803@gmail.com">Hire Me</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://mail.google.com/mail/?view=cm&to=anubhavsiingh3024@gmail.com" target="_blank" rel="noopener noreferrer">Let's Talk</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-slide-up animate-delay-500">
              <Button variant="social" size="iconLg" asChild>
                <a href="https://github.com/Anubhav3024" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="social" size="iconLg" asChild>
                <a href="https://www.linkedin.com/in/anubhav-singh-351967381/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="social" size="iconLg" asChild>
                <a href="https://mail.google.com/mail/?view=cm&to=anubhavsiingh3024@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
