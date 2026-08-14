import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Media() {
  const highlights = [
    {
      pub: "SHRM",
      title: "Why Inclusive Recruiting Is a Growth Strategy, Not a Checkbox.",
      date: "Spring 2025",
      type: "Executive Feature",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
    },
    {
      pub: "TA Weekly",
      title: "Scaling a Global Recruiting Team Without Losing Its Culture.",
      date: "Winter 2025",
      type: "Industry Insights",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      pub: "Recruiting Leaders",
      title: "What Twenty Years in Talent Acquisition Actually Teaches You.",
      date: "Dec 2024",
      type: "Opinion Editorial",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="media" className="pt-16 pb-40 bg-brand-bg relative border-t border-brand-primary/5">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end text-center lg:text-left mb-24 gap-10">
          <div className="max-w-3xl">
            <div className="section-label justify-center lg:justify-start tracking-[0.4em]">EDITORIALS</div>
            <h2 className="text-6xl md:text-8xl font-display font-light text-brand-primary tracking-tighter leading-none">
              Featured <br />
              <span className="italic font-bold text-brand-accent">Insights.</span>
            </h2>
          </div>
          <p className="text-xl text-brand-muted max-w-sm mx-auto lg:ml-0 font-display italic leading-relaxed mb-6">
            Published perspectives on inclusive, global talent acquisition leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-brand-primary/10">
          {highlights.map((item, idx) => (
            <a
              key={idx}
              href={`#insight/${idx}`}
              className="p-12 lg:p-14 block relative overflow-hidden h-full min-h-[450px] flex flex-col group border-r last:border-r-0 border-brand-primary/10"
            >
              {/* Background with zoom effect */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-[1.03] group-hover:opacity-90 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-b from-brand-bg/10 via-brand-bg/70 to-brand-bg" />
              </div>

              <div className="relative z-10 flex flex-col h-full w-full">
                <div className="flex justify-between items-start mb-16">
                  <span className="bg-brand-primary text-white text-[8px] font-mono px-3 py-1 font-bold tracking-widest">{item.pub}</span>
                  <ArrowUpRight size={20} className="text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                
                <div className="mt-auto space-y-4">
                   <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent font-bold flex flex-wrap items-center gap-2">
                      <span>{item.date}</span>
                      <span className="text-brand-muted/40">•</span>
                      <span className="text-brand-muted">{item.type}</span>
                   </div>
                   <h3 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-display font-medium text-brand-primary leading-snug group-hover:italic transition-all">
                     {item.title}
                   </h3>
                   <div className="pt-4 opacity-80 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-primary group-hover:text-brand-accent border-b border-brand-accent/40 group-hover:border-brand-accent pb-1 transition-all">
                         View Source
                      </span>
                   </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
