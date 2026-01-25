import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col">
      {/* Background Split - Shifted blue line downwards (65% white, 35% dark) */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="h-[65%] w-full bg-[#f8fafc]"></div>
        <div className="h-[35%] w-full bg-[#0a192f]"></div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 h-full flex-grow flex flex-col justify-center py-10">
        {/* Top Content (Title) */}
        <div className="text-center mb-8 pt-[75px] md:pt-[91px]">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] mb-2 tracking-tight">
            Hi, I am <span className="text-[#0a192f]">Anubhav</span>{" "}
            <br className="hidden md:block" />
            <span className="text-emerald-500">Singh</span>
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-emerald-500 mt-2">
            Frontend Developer
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto w-full relative">
          {/* Left Column: Image (Overlapping) */}
          <div className="relative flex flex-col items-center justify-center md:items-end md:pr-12 md:-mt-10">
            <div className="relative z-20">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full p-2 bg-white shadow-2xl shadow-black/20">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-emerald-500/30">
                  <img
                    src={profilePhoto}
                    alt="Anubhav Singh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Social Icons (In Dark Section) - Horizontal Row */}
            <div className="flex gap-6 mt-8 md:mr-10 items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="bg-[#112240] text-primary hover:bg-[#112240]/80 border border-[#233554] rounded-lg w-12 h-12"
                asChild
              >
                <a
                  href="https://github.com/Anubhav3024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-[#112240] text-primary hover:bg-[#112240]/80 border border-[#233554] rounded-lg w-12 h-12"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/anubhav-singh-351967381/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-[#112240] text-primary hover:bg-[#112240]/80 border border-[#233554] rounded-lg w-12 h-12"
                asChild
              >
                <a
                  href="mailto:anubhavsiingh3024@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Description & Buttons */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-0 md:-mt-16">
            {/* Description (In Light Section - Reduced margin to pull buttons up) */}
            <div className="mb-20 md:mb-24 px-4 md:px-0 mt-4 md:mt-0">
              <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                Passionate Frontend Developer skilled in crafting responsive,
                user-friendly interfaces with modern tools like HTML, CSS,
                JavaScript, and React. I focus on delivering seamless user
                experiences by blending clean code with improved design.
              </p>
            </div>

            {/* Buttons (In Dark Section) */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Button
                className="bg-[#112240] hover:bg-[#1e3a6f] text-white border border-slate-700 px-8 py-6 text-lg"
                asChild
              >
                <a href="mailto:anubhav270803@gmail.com">Hire Me</a>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-slate-500 text-white hover:bg-white/10 px-8 py-6 text-lg"
                asChild
              >
                <a
                  href="/fullstack_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  View Resume
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
