import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Initiatives() {
  const items = [
    {
      id: "01",
      title: "Global Talent Acquisition at Twitch",
      desc: "Directs a global recruiting team of 20+ supporting 2,000+ Twitch employees across the U.S., EMEA, and APAC, aligning hiring priorities with Amazon's Global Expansion team.",
      metric: "2,000+ Employees Supported",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      title: "Accessibility & Inclusion Leadership",
      desc: "Co-leads the Accessibility employee resource group at Twitch, advancing awareness and inclusion for people living with disabilities across the organization.",
      metric: "ERG Co-Lead",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      title: "Enterprise Recruiting at Starbucks",
      desc: "Led talent acquisition for Starbucks Technology and Finance, supporting a combined workforce of over 1,000 employees and more than five VPs.",
      metric: "1,000+ Employee Org",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "04",
      title: "Hiring Manager Training at Fluke",
      desc: "Designed and delivered Fluke's first Hiring Manager interview training program, raising interview quality and consistency across a global team.",
      metric: "First-Ever Training Program",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="initiatives" className="py-40 bg-brand-bg border-b border-brand-primary/5">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end text-center lg:text-left mb-32 gap-10">
          <div className="max-w-3xl">
            <div className="section-label justify-center lg:justify-start">KEY INITIATIVES</div>
            <h2 className="text-6xl md:text-8xl font-display font-light text-brand-primary tracking-tighter leading-none mb-8">
              Driving <br />
              <span className="italic font-bold">Global Talent Growth.</span>
            </h2>
          </div>
          <p className="text-xl text-brand-muted max-w-sm mx-auto lg:ml-0 font-display italic leading-relaxed mb-6">
            A portfolio of recruiting leadership results across Fortune 500 organizations and global teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-primary/5 border border-brand-primary/5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-bg p-12 lg:p-20 relative overflow-hidden flex flex-col items-center lg:items-start text-center lg:text-left justify-between h-[600px]"
            >
              <div className="absolute top-10 right-10 text-9xl font-display font-black text-brand-primary/[0.12] leading-none">
                {item.id}
              </div>

              <div className="relative z-10">
                 <div className="font-mono text-sm font-bold tracking-[0.4em] uppercase text-brand-accent mb-6">Initiative.{item.id}</div>
                 <h3 className="text-4xl lg:text-5xl font-display font-bold text-brand-primary mb-8 leading-tight tracking-tight lg:pr-12">
                   {item.title}
                 </h3>
              </div>

              <div className="relative z-10 w-full">
                <p className="text-xl text-brand-muted mb-12 leading-relaxed font-display italic lg:pr-20">
                  {item.desc}
                </p>
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between border-t border-brand-primary/10 pt-8 mt-12 gap-6">
                  <div className="flex flex-col">
                 <div className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-accent mb-2">Key Performance Indicator</div>
                     <span className="text-lg font-bold text-brand-primary tracking-tight">
                       {item.metric}
                     </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-brand-primary/10 flex items-center justify-center shrink-0">
                    <ArrowUpRight size={18} className="text-brand-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
