import { FileText, CheckCircle2, ArrowUpRight } from "lucide-react";

export function Resume() {
  const resumeHighlights = [
    {
      category: "Enterprise Operations & P&L",
      detail: "Managing Director at Metro Growth Inc, Former COO at SquareResults, and Head of Operations for Uber NA Driver Support (400+ staff)."
    },
    {
      category: "Fortune 100 GTM & DTC Scaling",
      detail: "Founding leadership building early-stage DTC programs, field ops, and 100+ experience stores across Amazon, Ring, Samsung, Microsoft, and Apple."
    },
    {
      category: "Servant Leadership & Culture",
      detail: "Cultivating empowered teams, continuous improvement, and employee career development, achieving a 99% retention rate during acquisitions."
    },
    {
      category: "Civic & Public Safety Advocacy",
      detail: "Directing Metro Growth Cares non-profit, CAPS 1832 beat facilitator, CPD Advisory Council, and MBE/WBE certified initiatives in Chicago."
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
                Comprehensive overview of Lisa Seigneur’s executive leadership, operations management, P&L scaling, and civic engagement.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-accent px-8 py-4 flex items-center gap-3 text-sm font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all"
              >
                Inquire & Contact
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
