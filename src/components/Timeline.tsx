import { motion } from "motion/react";

const events = [
  {
    year: "2024",
    period: "2015 – 2024",
    role: "Senior QA Architect | Enterprise QA Leader",
    company: "CSAA Insurance Group",
    location: "Glendale, AZ",
    desc: "Led a team of six architects and engineers driving strategic automation and quality initiatives across the enterprise, establishing scalable testing solutions for 30+ Agile teams.",
  },
  {
    year: "2015",
    period: "1999 – 2015",
    role: "Senior SDET | QA Leadership & Strategy",
    company: "Choice Hotels International",
    location: "Phoenix, AZ",
    desc: "Led, mentored, and developed automation strategies for 17 Agile teams across multiple applications, directing 7 architects and earning the Employee of the Year award.",
  },
  {
    year: "Degree",
    period: "Degree",
    role: "Bachelor of Science in Business Information Systems",
    company: "University of Phoenix",
    location: "Phoenix, AZ",
    desc: "Earned B.S. degree in Business Information Systems, laying the technical foundation for a 15+ year executive career in IT Quality Assurance.",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-brand-bg overflow-hidden">
      <div className="container-gr">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-label justify-center">CAREER ROADMAP</div>
          <h2 className="text-6xl md:text-9xl font-display italic font-light text-brand-primary tracking-tighter leading-none mb-10">
            A Journey <br />
            <span className="font-bold not-italic">of Quality.</span>
          </h2>
          <p className="text-xl text-brand-muted font-display italic leading-relaxed max-w-2xl mx-auto">
            Tracing 15+ years of quality assurance leadership across Choice Hotels International and CSAA.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
              {events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col md:flex-row gap-16 relative group/item px-8 py-10 -mx-8 hover:bg-brand-surface/50 transition-premium rounded-xl"
                >
                  <div className="absolute left-2 top-1/2 text-[180px] md:text-[220px] font-display font-black text-brand-primary opacity-10 group-hover/item:opacity-30 group-hover/item:text-brand-accent select-none pointer-events-none leading-none -translate-y-1/2 transition-all duration-700">
                    {event.year.slice(-2)}
                  </div>
                  
                  <div className="w-full md:w-48 pt-4">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-brand-accent font-bold mb-4">
                      {event.period}
                    </div>
                    <div className="flex gap-3 mb-6">
                       <div className="h-8 w-1 bg-brand-accent/30"></div>
                       <div className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-brand-muted leading-tight pt-1">
                          Verified <br/>Leadership
                       </div>
                    </div>
                    <div className="h-px w-full bg-brand-primary/10"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                      <div>
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-3 tracking-tighter">
                          {event.role}
                        </h3>
                        <p className="text-xl font-display italic text-brand-accent">
                          {event.company}
                        </p>
                      </div>
                      <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-muted pt-3 shrink-0">
                        {event.location}
                      </div>
                    </div>
                    
                    <p className="text-xl text-brand-muted font-display italic leading-relaxed max-w-3xl">
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
