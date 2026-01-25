import { ArrowUp, Github, Linkedin, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-[#020C1B] border-t border-[#112240]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-[#A8B2D1] text-sm text-center md:text-left">
            Copyright © 2024 by{" "}
            <span className="text-primary">Anubhav Singh</span> | All Rights
            Reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              {
                icon: Facebook,
                href: "https://www.facebook.com/profile.php?id=100087891424650",
              },
              { icon: Github, href: "https://github.com/Anubhav3024" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/anubhav-singh-351967381/",
              },
              {
                icon: Mail,
                href: "https://mail.google.com/mail/?view=cm&to=anubhavsiingh3024@gmail.com",
              },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary hover:bg-card"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Back to Top */}
          <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full bg-card text-primary hover:bg-border border border-border"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
