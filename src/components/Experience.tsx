import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      category: "Enterprise QA Leadership",
      company: "CSAA",
      period: "2015 – 2024",
      title: "Senior QA Architect | Enterprise QA Leader",
      location: "Glendale, AZ",
      description: "Led a team of six architects and engineers driving strategic automation and quality initiatives across the enterprise. Partnered with senior leadership to align QA best practices with business objectives, championing test automation strategies for 30+ Agile teams.",
      details: [
        "Led a team of six architects and engineers driving enterprise quality initiatives.",
        "Championed enterprise-wide test automation strategies for 30+ Agile teams.",
        "Designed and implemented 20+ advanced QA frameworks to optimize automation.",
        "Led integration of CI/CD pipelines, accelerating deployment cycles."
      ],
      image: "/images/CSAA2.png",
    },
    {
      category: "QA Leadership & Strategy",
      company: "Choice Hotels International",
      period: "1999 – 2015",
      title: "Senior SDET | QA Leadership & Strategy",
      location: "Phoenix, AZ",
      description: "Played a pivotal role leading, mentoring, and developing automation strategies for 17 Agile teams across multiple applications. Directed seven architects, standardizing automation practices and tools across teams and winning Employee of the Year.",
      details: [
        "Led and mentored automation strategies for 17 Agile teams.",
        "Directed seven architects, standardizing automation tools and practices.",
        "Designed and managed multiple test automation projects.",
        "Awarded Employee of the Year for exceptional contributions to QA innovation."
      ],
      image: "/images/Choice.png",
    }
  ];

  return (
    <section id="experience" className="pt-0 pb-32 bg-brand-surface">
      <div className="container-gr">
        <div className="max-w-3xl mb-24 pt-20">
          <div className="section-label lg:justify-start">CAREER ROLES & IMPACT</div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-brand-primary tracking-tighter leading-tight">
             Selected <span className="italic font-bold text-brand-accent">Milestones</span> in Quality Leadership.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full bg-brand-bg border border-brand-primary/10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Card Header / Logo */}
              <div className="relative h-48 bg-white flex items-center justify-center p-8 border-b border-brand-primary/10">
                 <img 
                  src={exp.image} 
                  alt={exp.company} 
                  className="max-h-24 max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-brand-bg border border-brand-primary/10 text-[9px] font-mono font-bold tracking-[0.3em] uppercase">
                   {exp.period}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-10 flex flex-col flex-1">
                <div className="text-[10px] font-mono font-extrabold tracking-widest text-brand-accent uppercase mb-2">
                   {exp.category}
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-primary mb-1 leading-tight">
                   {exp.company}
                </h3>
                <h4 className="text-sm font-sans font-bold text-brand-primary/70 mb-6 italic">
                   {exp.title} • {exp.location}
                </h4>
                <p className="text-sm text-brand-muted font-sans leading-relaxed mb-8">
                   {exp.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-brand-primary/5">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-brand-primary uppercase mb-2">Key Accomplishments</div>
                  {exp.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-brand-muted">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-1 shrink-0"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
