export function Expertise() {
  const pillars = [
    {
      title: "Inclusion",
      description: "Cultivating collaborative, high-performing cultures where every voice is heard and valued."
    },
    {
      title: "Impact",
      description: "Building recruiting engines that translate directly into stronger, more diverse teams."
    },
    {
      title: "Legacy",
      description: "Mentoring globally distributed recruiting teams that keep growing long after the initial build."
    }
  ];

  return (
    <section className="py-32 bg-brand-bg hairline">
      <div className="container-gr text-center">
        <div className="max-w-5xl mx-auto">
          <div className="section-label justify-center mb-16">THE CORE PILLARS</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center">
                <div className="font-display italic text-5xl lg:text-6xl text-brand-primary mb-6 tracking-tight">
                  {pillar.title}
                </div>
                <p className="text-sm text-brand-muted font-sans leading-relaxed max-w-xs">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-brand-primary/20"></div>
            <cite className="font-accent text-[11px] font-bold tracking-[0.3em] uppercase text-brand-secondary not-italic">
              Jean Lanctot
            </cite>
            <div className="h-px w-12 bg-brand-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
