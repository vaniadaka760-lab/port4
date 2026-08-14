export function Achievements() {
  const milestones = [
    {
      metric: "20+",
      category: "Global Team Leadership",
      description: "Leads a 20+ member recruiting team supporting Twitch's 2,000+ employees across the U.S., EMEA, and APAC.",
    },
    {
      metric: "10+",
      category: "Executive Support",
      description: "Recruiting team support extended to more than ten executives shaping Twitch's product organization.",
    },
    {
      metric: "1,000+",
      category: "Enterprise Scale",
      description: "Led talent acquisition for Starbucks Technology and Finance, supporting a combined workforce of 1,000+.",
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-brand-bg hairline">
      <div className="container-gr">
        <div className="max-w-2xl mb-16 mx-auto lg:ml-0 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="section-label justify-center lg:justify-start">KEY ACHIEVEMENTS</div>
          <h2 className="text-brand-primary text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
            Quantifiable <br /> <span className="italic font-light">Impact</span> & Results.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((item, index) => (
            <div key={index} className="p-10 bg-brand-surface rounded-2xl border border-brand-primary/5 shadow-premium hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-500 text-center md:text-left flex flex-col items-center md:items-start">
              <div className="text-5xl font-black text-brand-primary mb-4 tracking-tighter">{item.metric}</div>
              <div className="font-accent text-[11px] font-bold tracking-[0.2em] uppercase text-brand-primary mb-6">{item.category}</div>
              <p className="font-display italic text-lg text-brand-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
