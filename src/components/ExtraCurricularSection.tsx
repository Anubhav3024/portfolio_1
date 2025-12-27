import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram } from "lucide-react";
import kritiLogo from "@/assets/kriti-logo.png";
import piccellLogo from "@/assets/piccell-logo.png";

interface Activity {
  position: string;
  club: string;
  year: string;
  description: string;
  instagram: string;
  logo: string;
}

const activities: Activity[] = [
  {
    position: "Head",
    club: "Kriti Art and Craft Club",
    year: "2023 - 2024",
    description:
      "Led artistic initiatives, managed workshop logistics for college festivals, and coordinated a team of 15+ members to organize creative events and exhibitions.",
    instagram: "https://www.instagram.com/kriti_iiitranchi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    logo: kritiLogo,
  },
  {
    position: "Content Head",
    club: "Piccell - Photography Club",
    year: "2023 - 2024",
    description:
      "Directed content strategy, curated visual media for official college social media handles with 800+ followers, and managed the club's digital presence.",
    instagram: "https://www.instagram.com/piccell_iiitr/?utm_source=ig_web_button_share_sheet",
    logo: piccellLogo,
  },
];

const ExtraCurricularSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="extracurricular" className="py-20">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
            Leadership & <span className="text-gradient">Extracurricular</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Beyond coding, I actively contribute to my college community through leadership roles
          </p>

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group relative w-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={activity.logo}
                      alt={`${activity.club} logo`}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary/20"
                    />
                  </div>

                  {/* Left - Position & Club */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {activity.position}
                    </h3>
                    <div className="flex items-center gap-3">
                      <p className="text-primary font-medium text-lg">
                        {activity.club}
                      </p>
                      <a
                        href={activity.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white hover:scale-110 transition-transform"
                        aria-label={`${activity.club} Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Center - Year Badge */}
                  <div className="md:mx-8">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                      {activity.year}
                    </span>
                  </div>

                  {/* Right - Description */}
                  <div className="flex-1 md:text-right">
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricularSection;
