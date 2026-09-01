const philosophyItems = [
  {
    id: "01",
    title: "Exceptional Outcomes",
    text: "Laura has a proven track record of achieving remarkable results even when working with aggressive timelines, challenging scope, and rapid business changes."
  },
  {
    id: "02",
    title: "Empathetic & Trusted Leadership",
    text: "Described as an empathetic leader, trusted by global teams and executive management. Building strong, cooperative relationships onshore and offshore."
  },
  {
    id: "03",
    title: "Consistent Project Delivery",
    text: "Consistently ensures enterprise software projects are completed on time, within scope, within budget, and in strict compliance with regulatory requirements."
  },
  {
    id: "04",
    title: "Expert Executive Communication",
    text: "Excels in communicating effectively with all organizational levels, seamlessly translating corporate directives into actionable plans for global technical teams."
  },
  {
    id: "05",
    title: "Agile & Scrum Mastery",
    text: "Facilitates and supports Agile environments using Scrum, including Backlog Grooming, Sprint Planning, Program Increment (PI) Planning, and Retrospectives."
  },
  {
    id: "06",
    title: "End-to-End Orchestration",
    text: "Orchestrates and tracks the complete project lifecycle across design, development, integration, testing, and deployment phases for seamless execution."
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="pt-16 pb-12 bg-brand-bg relative overflow-hidden">
      <div className="container-gr">
        <div className="max-w-5xl mx-auto text-center">
          <span className="section-label justify-center">PROJECT LEADERSHIP & EXPERTISE</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-brand-primary tracking-tighter leading-tight mb-12 animate-fade-in">
             Leading with <span className="italic font-bold text-brand-accent">Excellence & Trust</span>.
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
