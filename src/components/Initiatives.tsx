import { Building2, Laptop, Heart, Car, Users, ArrowUpRight } from "lucide-react";

export function Initiatives() {
  const sectors = [
    {
      title: "Technology & Retail",
      desc: "Led GTM and operational strategies at Amazon, Microsoft, Apple, and Samsung, scaling customer touchpoints and market share.",
      icon: Laptop,
      metric: "Fortune 100 GTM"
    },
    {
      title: "Real Estate & Development",
      desc: "Managing Director at Metro Growth Inc, specializing in multi-family housing and infrastructure in underserved communities.",
      icon: Building2,
      metric: "Urban Revitalization"
    },
    {
      title: "Civic & Nonprofit",
      desc: "Executive Director of Metro Growth Cares, advancing corporate citizenship, public safety policy, and social impact.",
      icon: Heart,
      metric: "Social Impact & CAPS"
    },
    {
      title: "Transportation & Mobility",
      desc: "Head of Operations at Uber, overseeing 400+ driver support staff across North America physical Greenlight sites.",
      icon: Car,
      metric: "NA Operations Leadership"
    },
    {
      title: "Recruiting & Talent Platforms",
      desc: "COO at SquareResults, driving product and business development for a tech-enabled hiring solution.",
      icon: Users,
      metric: "Talent Platforms"
    }
  ];

  return (
    <section id="initiatives" className="py-32 bg-brand-surface border-y border-brand-primary/5">
      <div className="container-gr">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-label justify-center">VERSATILITY & DOMAINS</div>
          <h2 className="text-4xl md:text-6xl font-display font-light text-brand-primary leading-tight">
            Industry <span className="italic font-bold text-brand-accent">Experience</span>
          </h2>
          <p className="font-sans text-brand-muted text-base mt-4">
            Proven executive impact across high-growth technology, real estate, transportation, retail, and civic sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sec, idx) => (
            <div 
              key={idx}
              className="p-8 bg-brand-bg rounded-2xl border border-brand-primary/10 hover:border-brand-accent/40 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <sec.icon className="w-10 h-10 text-brand-accent mb-6" />
                <h3 className="text-2xl font-display font-bold text-brand-primary mb-3">{sec.title}</h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">{sec.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-primary/10 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                  {sec.metric}
                </span>
                <ArrowUpRight size={16} className="text-brand-primary/40 group-hover:text-brand-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
