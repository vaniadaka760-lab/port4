import { ArrowUpRight } from "lucide-react";

export function Recognitions() {
  const awards = [
    { id: "01", year: "1999", name: "PMP — Project Management Professional", org: "PMI Certified | Cert #: 16436 (In Good Standing)" },
    { id: "02", year: "2019", name: "CSM — Certified ScrumMaster", org: "Scrum Alliance | Cert #: 00100639 (In Good Standing)" },
    { id: "03", year: "1993", name: "Bachelor of Arts (B.A.)", org: "University of Science and Arts of Oklahoma (Chickasha, OK)" },
    { id: "04", year: "Present", name: "Project Manager II ($1B-$2B Scale)", org: "Humana, Inc Enterprise Delivery" },
  ];

  return (
    <section id="distinctions" className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="container-gr relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end text-center lg:text-left mb-16 gap-8">
           <div>
              <div className="section-label justify-center lg:justify-start uppercase tracking-[0.4em]">DISTINCTIONS & CERTIFICATIONS</div>
              <h2 className="text-6xl md:text-8xl font-display font-light text-brand-primary tracking-tighter leading-none">
                 Honors & <br />
                 <span className="italic font-bold text-brand-accent">Credentials.</span>
              </h2>
           </div>
           <p className="text-xl text-brand-muted max-w-sm mx-auto lg:ml-0 font-display italic leading-relaxed mb-4">
              A record of certified excellence, executive trust, and continuous professional mastery.
           </p>
        </div>

        <div className="border-t border-brand-primary/10">
          {awards.map((award, idx) => (
            <div 
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 items-center py-10 md:py-14 border-b border-brand-primary/10 cursor-default px-6 lg:px-12 text-center md:text-left group"
            >
              <div className="md:col-span-1 font-mono text-[15px] text-brand-muted mb-4 md:mb-0 uppercase tracking-widest font-bold">
                 #{award.id}
              </div>
              <div className="md:col-span-3 text-3xl md:text-4xl font-display font-bold text-brand-primary/80 transition-premium mb-4 md:mb-0">
                {award.year}
              </div>
              <div className="md:col-span-7">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-accent transition-premium mb-2 tracking-tighter">
                  {award.name}
                </h3>
                <p className="font-mono text-[13px] uppercase tracking-widest text-brand-muted font-bold tracking-[0.2em]">
                  {award.org}
                </p>
              </div>
              <div className="md:col-span-1 flex justify-center md:justify-end mt-8 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight className="text-brand-accent" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
