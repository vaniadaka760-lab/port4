import { motion } from "motion/react";

const events = [
  {
    year: "2021",
    period: "2021 – Present",
    role: "Director, Talent Acquisition",
    company: "Twitch",
    location: "Global",
    desc: "Leads a global recruiting organization for Twitch's 2,000+ employees across the U.S., EMEA, and APAC. Directs the Global Expansion team's hiring priorities alongside Amazon, oversees global employee referral and M&A recruiting, and co-leads the Accessibility employee resource group.",
  },
  {
    year: "2020",
    period: "2020 – 2021",
    role: "Senior Manager, Talent Acquisition",
    company: "Twitch",
    location: "Global",
    desc: "Stepped into Twitch's talent acquisition leadership team, building out the recruiting function to support rapid headcount growth while co-leading the Accessibility Guild ERG.",
  },
  {
    year: "2019",
    period: "2019 – 2020",
    role: "Director of Talent Acquisition",
    company: "Fluke (a Fortive Company)",
    location: "Everett, WA",
    desc: "Led a global talent acquisition team delivering hires from university talent through VP-level searches. Built and delivered Fluke's first Hiring Manager interview training program and was selected as a Team Lead at Linkage's Women in Leadership Institute Conference.",
  },
  {
    year: "2015",
    period: "2015 – 2019",
    role: "Talent Acquisition Manager",
    company: "Amazon / Starbucks",
    location: "Seattle, WA",
    desc: "Managed technical recruiting teams supporting Amazon Web Services and Starbucks Technology and Finance, spanning a combined workforce of over 1,000 employees and more than five corporate vice presidents.",
  },
  {
    year: "2012",
    period: "2012 – 2015",
    role: "Recruiting Manager",
    company: "Amazon Web Services",
    location: "Seattle, WA",
    desc: "Managed a recruiting team of 18+, including sourcers and recruiting coordinators, and ran large-scale international recruiting events sourcing software developers, managers, and systems engineers.",
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
            <span className="font-bold not-italic">of Impact.</span>
          </h2>
          <p className="text-xl text-brand-muted font-display italic leading-relaxed max-w-2xl mx-auto">
            Tracing a 20+ year trajectory across Microsoft, Amazon, Starbucks, Fluke, and Twitch.
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
                        <h3 className="text-4xl md:text-6xl font-display font-bold text-brand-primary mb-3 tracking-tighter">
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
                    
                    <p className="text-2xl text-brand-muted font-display italic leading-relaxed max-w-3xl">
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
