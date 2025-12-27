import { ArrowUp, Github, Linkedin, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-left">
            Copyright © 2024 by <span className="text-primary">Anubhav Singh</span> | All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.facebook.com/profile.php?id=100087891424650" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Anubhav3024" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/anubhav-singh-351967381/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://mail.google.com/mail/?view=cm&to=anubhavsiingh3024@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Back to Top */}
          <Button
            variant="social"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
