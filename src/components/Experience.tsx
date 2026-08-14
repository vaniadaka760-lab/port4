import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      category: "Talent Leadership",
      company: "Twitch",
      period: "2020 – Present",
      title: "Director, Talent Acquisition",
      description: "Leading a global recruiting organization for Twitch's 2,000+ employees across the U.S., EMEA, and APAC. Directs a team of managers delivering top external talent, drives the Global Expansion team's hiring priorities alongside Amazon, and oversees global employee referral and M&A activity. Also co-leads the Accessibility employee resource group, advancing awareness and inclusion for people with disabilities.",
      details: [
        "Leads a 20+ member recruiting team supporting more than ten Twitch executives.",
        "Co-leads the Accessibility Guild, a resource group for disability inclusion.",
        "Drives global employee referral and M&A recruiting activity."
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      category: "Global Recruiting",
      company: "Amazon",
      period: "2012 – 2019",
      title: "Talent Acquisition Manager",
      description: "Managed technical recruiting for Amazon Web Services and led the team supporting Twitch's expanding product organization. Ran large-scale international recruiting events to source software developers, managers, and systems engineers, while building out sourcing, coordination, and interview processes for rapidly scaling teams.",
      details: [
        "Managed a recruiting team of 18+, including sourcers and coordinators.",
        "Ran international recruiting events to source engineering talent.",
        "Supported hiring for AWS and Twitch product organizations."
      ],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      category: "Enterprise Recruiting",
      company: "Starbucks & Fluke",
      period: "2015 – 2020",
      title: "Talent Acquisition Manager / Director",
      description: "Led technical recruiting for Starbucks Technology and Finance, supporting a combined workforce of over 1,000 employees, before moving to Fluke to lead a global talent acquisition team spanning university hiring through VP-level searches. Built and delivered Fluke's first Hiring Manager interview training program.",
      details: [
        "Led recruiting for Starbucks Technology and Finance organizations.",
        "Built Fluke's first formal hiring manager interview training.",
        "Selected as a Team Lead at Linkage's Women in Leadership Institute, 2019."
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
    }
  ];

  return (
    <section id="experience" className="pt-0 pb-32 bg-brand-surface">
      <div className="container-gr">
        <div className="max-w-3xl mb-24">
          <div className="section-label lg:justify-start">PORTFOLIO OF IMPACT</div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-brand-primary tracking-tighter leading-tight">
             Selected <span className="italic font-bold text-brand-accent">Milestones</span> in Global Talent Leadership.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full bg-brand-bg border border-brand-primary/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                 <img 
                  src={exp.image} 
                  alt={exp.company} 
                  className="w-full h-full object-cover brightness-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm border border-brand-primary/5 text-[9px] font-mono font-bold tracking-[0.3em] uppercase">
                   {exp.period}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-10 flex flex-col flex-1">
                <div className="text-[10px] font-mono font-extrabold tracking-widest text-brand-accent uppercase mb-4">
                   {exp.category}
                </div>
                <h3 className="text-4xl font-display font-bold text-brand-primary mb-4 leading-tight">
                   {exp.company}
                </h3>
                <h4 className="text-sm font-sans font-bold text-brand-primary/60 mb-6 italic">
                   {exp.title}
                </h4>
                <p className="text-sm text-brand-muted font-sans leading-relaxed mb-10 flex-1">
                   {exp.description}
                </p>

                <div className="pt-8 border-t border-brand-primary/5 flex items-center justify-between group-hover:text-brand-accent transition-colors">
                   <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Executive Case Study</span>
                   <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
