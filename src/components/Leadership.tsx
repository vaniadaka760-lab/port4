const philosophyItems = [
  {
    id: "01",
    title: "Lead with Expertise",
    text: "Leadership is earned through knowledge, action, and trust. I lead by example, using my technical expertise to empower teams, drive results, and influence enterprise direction."
  },
  {
    id: "02",
    title: "Empower People through Mentorship",
    text: "I take pride in developing talent. Creating a collaborative, supportive environment where engineers can grow is one of my greatest accomplishments. Mentorship is a multiplier of success."
  },
  {
    id: "03",
    title: "Quality is Strategic",
    text: "Quality assurance isn't just a technical function; it's a strategic pillar of business success. My goal is to deliver software that is reliable, scalable, and sustainable."
  },
  {
    id: "04",
    title: "Innovate with Purpose",
    text: "I embrace innovation when it solves real problems. Whether automating intelligently, refining frameworks, or integrating CI/CD, I focus on solutions with measurable impact."
  },
  {
    id: "05",
    title: "Think Enterprise-Wide",
    text: "I operate with a systems mindset. Supporting 30+ teams with shared frameworks creates solutions that scale, unify, and align with enterprise goals."
  },
  {
    id: "06",
    title: "Communicate & Collaborate Effectively",
    text: "Great quality is a team sport. I believe in strong cross-functional collaboration, transparent communication, and aligning with stakeholders at every level to ensure success."
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="pt-16 pb-12 bg-brand-bg relative overflow-hidden">
      <div className="container-gr">
        <div className="max-w-5xl mx-auto text-center">
          <span className="section-label justify-center">GUIDING PRINCIPLES</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-brand-primary tracking-tighter leading-tight mb-12 animate-fade-in">
             Leading with <span className="italic font-bold text-brand-accent">Expertise & Purpose</span>.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 text-left">
            {philosophyItems.map((item, index) => (
              <div key={index} className="space-y-4 border-l-2 border-brand-primary hover:border-brand-accent pl-8 group transition-all duration-300">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm uppercase tracking-widest font-black text-white bg-brand-primary px-3 py-1 rounded-sm shadow-sm opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-brand-accent group-hover:shadow-md inline-block">
                    {item.id}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-brand-primary group-hover:text-brand-accent transition-all duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-brand-muted leading-relaxed text-base font-sans">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
