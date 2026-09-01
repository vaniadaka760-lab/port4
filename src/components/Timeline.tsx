import { motion } from "motion/react";
import { Building2, GraduationCap, Award, Briefcase, ChevronRight } from "lucide-react";

export function Timeline() {
  const timelineEvents = [
    {
      year: "2025 - PRESENT",
      title: "Relationship Coach & Published Author",
      company: "The Wife Advice",
      description: "Published 'Dating for Marriage', 1:1 executive coaching, and social media media presence.",
      type: "career"
    },
    {
      year: "2024",
      title: "PMP® Certification",
      company: "Project Management Institute",
      description: "Project Management Professional certification (Credly Verified).",
      type: "education"
    },
    {
      year: "2023 - 2025",
      title: "Chief Operating Officer",
      company: "SquareResults (Tempe, AZ)",
      description: "Led business and product development for tech-enabled recruitment platform.",
      type: "career"
    },
    {
      year: "2022 - PRESENT",
      title: "Managing Director - Operations & Strategy",
      company: "Metro Growth Inc (Chicago, IL)",
      description: "Real estate development, MBE/WBE certification, public safety campaigns, and government relations.",
      type: "career"
    },
    {
      year: "2022 - PRESENT",
      title: "Executive Director - Community Development",
      company: "Metro Growth Cares (Chicago, IL)",
      description: "Corporate citizenship, community upskilling, and non-profit partner relations.",
      type: "career"
    },
    {
      year: "2021 - 2022",
      title: "Head of Operations – NA Driver Support",
      company: "Uber (Chicago, IL)",
      description: "Managed 400+ driver-facing employees across NA physical Greenlight support sites.",
      type: "career"
    },
    {
      year: "2018 - 2021",
      title: "Head of Operations – Smart Home Services",
      company: "Amazon (Chicago, IL)",
      description: "Solely led Alexa Smart Home Services transition to Ring subsidiary (200+ field technicians, 99% retention).",
      type: "career"
    },
    {
      year: "2014 - 2018",
      title: "District Sales Manager",
      company: "Samsung Electronics (Chicago, IL)",
      description: "Scaled regional sales from $183M to $400M across 1,500+ North Central retail doors.",
      type: "career"
    },
    {
      year: "2010",
      title: "B.A. Business Administration & Management",
      company: "Augustana College (Rock Island, IL)",
      description: "Graduated with Bachelor of Arts degree in Business Administration & Management.",
      type: "education"
    },
    {
      year: "2009 - 2014",
      title: "General Manager",
      company: "Microsoft (Schaumburg / Chicago, IL)",
      description: "Founding leadership launching Microsoft Store #1 (Scottsdale) and expanding 100+ stores nationally.",
      type: "career"
    },
    {
      year: "2008",
      title: "Director of Marketing",
      company: "STILOSO (Chicago, IL)",
      description: "Grew US market share for Italian cabinet manufacturer SCIC Cucine d’Italia in multi-unit construction.",
      type: "career"
    },
    {
      year: "2003 - 2009",
      title: "Founder",
      company: "Instant Imaging Photography (Chicago, IL)",
      description: "Created 15-person firm servicing 30 recurring weekly entertainment events with 30k+ subscriber platform.",
      type: "career"
    },
    {
      year: "2001 - 2007",
      title: "Senior Manager",
      company: "Apple Computer (Chicago, IL)",
      description: "Founding leadership launching Apple Retail Stores and Michigan Avenue flagship location.",
      type: "career"
    }
  ];

  return (
    <section id="timeline" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="container-gr">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-label justify-center">CAREER ROADMAP</div>
          <h2 className="text-4xl md:text-6xl font-display font-light text-brand-primary leading-tight">
            Executive <span className="italic font-bold text-brand-accent">Timeline & Roadmap</span>
          </h2>
          <p className="font-sans text-brand-muted text-base mt-4">
            A chronological timeline of leadership roles, business achievements, academic milestones, and credentials.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
              {events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col md:flex-row gap-12 relative group/item px-8 py-8 -mx-8 hover:bg-brand-surface/50 transition-premium rounded-xl"
                >
                  <div className="absolute left-2 top-1/2 text-[140px] md:text-[180px] font-display font-black text-brand-primary opacity-10 group-hover/item:opacity-25 group-hover/item:text-brand-accent select-none pointer-events-none leading-none -translate-y-1/2 transition-all duration-700">
                    {event.year.slice(-2)}
                  </div>
                  
                  <div className="w-full md:w-48 pt-2">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-brand-accent font-bold mb-3">
                      {event.period}
                    </div>
                    <div className="flex gap-3 mb-4">
                       <div className="h-6 w-1 bg-brand-accent/40"></div>
                       <div className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-brand-muted leading-tight pt-0.5">
                          Verified <br/>Role
                       </div>
                    </div>
                    <div className="h-px w-full bg-brand-primary/10"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl md:text-4xl font-display font-bold text-brand-primary tracking-tight">
                          {event.role}
                        </h3>
                        <p className="text-lg font-display italic text-brand-accent">
                          {event.company}
                        </p>
                      </div>
                      <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-muted pt-1 shrink-0">
                        {event.location}
                      </div>
                    </div>
                    
                    <p className="text-base md:text-lg text-brand-muted font-display italic leading-relaxed max-w-3xl">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
