const philosophyItems = [
  {
    id: "01",
    title: "Collaborative Leadership",
    text: "True leadership means creating a space where every voice is heard and every team member feels valued. By fostering psychological safety and shared ownership, I empower recruiting teams to move quickly without losing sight of the people behind every hire. Across my time at Twitch, Amazon, and Starbucks, I've found that a genuinely collaborative team dynamic is the strongest predictor of sustained recruiting success."
  },
  {
    id: "02",
    title: "Inclusive by Design",
    text: "I build hiring processes with inclusion built in from the start, not layered on afterward. Co-leading Twitch's Accessibility employee resource group has shown me how much stronger recruiting outcomes get when accessibility and diversity are treated as core design constraints rather than afterthoughts, opening the door to talent that traditional processes routinely overlook."
  },
  {
    id: "03",
    title: "Data-Driven Decisions",
    text: "Great recruiting instincts still need to be validated with data. I rely on talent acquisition analytics to steer hiring decisions, track team performance against clear KPIs, and continuously refine sourcing and interview strategy. This data-backed approach has been central to scaling recruiting operations at organizations like Twitch and Amazon Web Services."
  },
  {
    id: "04",
    title: "Global Perspective",
    text: "Recruiting for organizations that span the United States, EMEA, and APAC requires more than a single playbook applied everywhere. Drawing on international experience across Fortune 500 companies, I build recruiting strategies that respect regional nuance while staying aligned to a unified employer brand and a consistent, high bar for candidate experience."
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="pt-16 pb-12 bg-brand-bg relative overflow-hidden">
      <div className="container-gr">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label justify-center">LEADERSHIP PHILOSOPHY</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-brand-primary tracking-tighter leading-tight mb-12 animate-fade-in">
             Establishing <span className="italic font-bold text-brand-accent">Trust & Inclusion</span> in Global Teams.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 text-left">
            {philosophyItems.map((item, index) => (
              <div key={index} className="space-y-4 border-l-2 border-brand-primary hover:border-brand-accent pl-8 group transition-all duration-300">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm uppercase tracking-widest font-black text-white bg-brand-primary px-3 py-1 rounded-sm shadow-sm opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-brand-accent group-hover:shadow-md inline-block">
                    {item.id}
                  </span>
                  <h3 className="font-display font-extrabold text-3xl text-brand-primary group-hover:text-brand-accent transition-all duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-brand-muted leading-relaxed text-lg md:text-[20px] font-sans">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
