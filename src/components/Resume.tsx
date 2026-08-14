import { FileText, Download, CheckCircle2, ArrowUpRight } from "lucide-react";

export function Resume() {
  const resumeHighlights = [
    {
      category: "Global Talent Leadership",
      detail: "Directed 20+ member recruiting orgs supporting 2,000+ employees across North America, EMEA, and APAC."
    },
    {
      category: "Executive & Technical Sourcing",
      detail: "Built executive hiring pipelines for VP, Director, and specialized Engineering & Product roles at Twitch, Amazon, Starbucks, and Fluke."
    },
    {
      category: "Diversity & Inclusion (DEI)",
      detail: "Co-led Twitch Accessibility Guild ERG, designing inclusive hiring programs and accessible interviewing standards."
    },
    {
      category: "Systems & Program Design",
      detail: "Designed Fluke's first global Hiring Manager Training program and implemented data-backed talent analytics."
    }
  ];

  return (
    <section id="resume" className="py-28 bg-brand-surface relative overflow-hidden border-t border-brand-primary/5">
      <div className="container-gr relative z-10">
        <div className="bg-brand-bg rounded-3xl p-8 md:p-16 border border-brand-primary/10 shadow-premium">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 pb-12 border-b border-brand-primary/10">
            <div>
              <div className="section-label justify-center lg:justify-start">OFFICIAL EXECUTIVE RESUME</div>
              <h2 className="text-4xl md:text-5xl font-display font-light text-brand-primary leading-tight">
                Curriculum Vitae & <span className="italic font-bold text-brand-accent">Executive Summary</span>
              </h2>
              <p className="text-base text-brand-muted font-sans mt-3 max-w-xl">
                Comprehensive overview of 20+ years of talent acquisition leadership, strategic workforce planning, and organizational scaling.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Jean_Lanctot_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-8 py-4 flex items-center gap-3 text-sm font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all"
              >
                <Download size={18} />
                Download PDF
              </a>
              <a
                href="/Jean_Lanctot_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 border border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white rounded-md text-sm font-bold tracking-widest uppercase transition-all flex items-center gap-2"
              >
                <FileText size={16} />
                Preview PDF
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resumeHighlights.map((item, idx) => (
              <div key={idx} className="p-6 bg-brand-surface rounded-2xl border border-brand-primary/5 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-accent">
                    <CheckCircle2 size={16} />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                  </div>
                  <p className="text-sm font-sans text-brand-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-primary/5 flex items-center justify-between text-xs text-brand-primary/60 font-mono">
                  <span>Section 0{idx + 1}</span>
                  <ArrowUpRight size={14} className="text-brand-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
