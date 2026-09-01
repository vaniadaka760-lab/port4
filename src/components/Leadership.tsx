const philosophyItems = [
  {
    id: "01",
    title: "Servant Leadership & Trust",
    text: "Leadership centers on servant leadership, stakeholder trust, and continuous improvement. Cultivating high-performing cultures and inspiring teams."
  },
  {
    id: "02",
    title: "Operational Excellence",
    text: "Defines execution requirements, builds standards of work, and aligns entire organizations to unified operations and credible financial performance."
  },
  {
    id: "03",
    title: "Excellence in Project Management",
    text: "Showcases proven capacity to manage complex initiatives from vision to delivery at Metro Growth Inc, SquareResults, and Fortune 100 leaders."
  },
  {
    id: "04",
    title: "Talent Empowerment & Morale",
    text: "Prioritizes culture, clarity, and employee career development, resulting in exceptional team morale and 99% retention during business transitions."
  },
  {
    id: "05",
    title: "Civic & Community Responsibility",
    text: "Advancing corporate citizenship, social impact programs via Metro Growth Cares, public safety campaigns, and MBE/WBE certified initiatives."
  },
  {
    id: "06",
    title: "Go-To-Market Execution",
    text: "Tying together product deployment, marketing, and field operations with exceptional capital efficiency and customer adoption."
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="pt-16 pb-12 bg-brand-bg relative overflow-hidden">
      <div className="container-gr">
        <div className="max-w-5xl mx-auto text-center">
          <span className="section-label justify-center">VALUES & GUIDING PRINCIPLES</span>
          <h2 className="text-5xl md:text-7xl font-display font-light text-brand-primary tracking-tighter leading-tight mb-12 animate-fade-in">
             Excellence in <span className="italic font-bold text-brand-accent">Leadership & Operations</span>.
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
