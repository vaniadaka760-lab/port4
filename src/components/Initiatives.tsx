import { ArrowUpRight } from "lucide-react";

export function Initiatives() {
  const items = [
    {
      id: "01",
      title: "Co-Chair, West Valley Trail Alliance (WVTA)",
      desc: "Lead mountain biking and trail advocacy organization (a chapter of IMBA). Work with landowners and municipalities to build/maintain trails, organize volunteer events, and secure organizational donations.",
      metric: "Non-Profit Leadership",
      image: "/images/Cyclist.jpg"
    },
    {
      id: "02",
      title: "Jenkins User Conference Speaker",
      desc: "Presented enterprise CI/CD pipeline integration and automated testing strategies to industry leaders and DevOps practitioners.",
      metric: "Keynote & Speaker",
      image: "/images/Jenkins2.png"
    },
    {
      id: "03",
      title: "Star West & Star East Alum (7x)",
      desc: "Seven-time conference alum and speaker sharing best practices on test automation frameworks, team scaling, and enterprise QA transformation.",
      metric: "7x Conference Alum",
      image: "/images/Starwest2.jpg"
    },
    {
      id: "04",
      title: "Gartner Tech Growth & Selenium Conf",
      desc: "Engaged as technical speaker and thought leader across Gartner Tech Growth & Innovation and Selenium Conferences.",
      metric: "Industry Thought Leadership",
      image: "/images/Selenium.png"
    }
  ];

  return (
    <section id="initiatives" className="py-40 bg-brand-bg border-b border-brand-primary/5">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end text-center lg:text-left mb-32 gap-10">
          <div className="max-w-3xl">
            <div className="section-label justify-center lg:justify-start">COMMUNITY & CONFERENCES</div>
            <h2 className="text-6xl md:text-8xl font-display font-light text-brand-primary tracking-tighter leading-none mb-8">
              Community & <br />
              <span className="italic font-bold text-brand-accent">Thought Leadership.</span>
            </h2>
          </div>
          <p className="text-xl text-brand-muted max-w-sm mx-auto lg:ml-0 font-display italic leading-relaxed mb-6">
            Active community contribution, trail advocacy, and frequent speaking engagements across national software quality conferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-primary/5 border border-brand-primary/5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-bg p-12 lg:p-20 relative overflow-hidden flex flex-col items-center lg:items-start text-center lg:text-left justify-between h-[620px]"
            >
              <div className="absolute top-10 right-10 text-9xl font-display font-black text-brand-primary/[0.12] leading-none">
                {item.id}
              </div>

              <div className="relative z-10">
                 <div className="font-mono text-sm font-bold tracking-[0.4em] uppercase text-brand-accent mb-6">Initiative.{item.id}</div>
                 <h3 className="text-3xl lg:text-4xl font-display font-bold text-brand-primary mb-6 leading-tight tracking-tight lg:pr-12">
                   {item.title}
                 </h3>
              </div>

              <div className="relative z-10 w-full">
                <p className="text-base text-brand-muted mb-8 leading-relaxed font-sans lg:pr-10">
                  {item.desc}
                </p>
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between border-t border-brand-primary/10 pt-6 mt-8 gap-6">
                  <div className="flex flex-col">
                     <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-accent mb-1">Focus & Role</div>
                     <span className="text-base font-bold text-brand-primary tracking-tight">
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
