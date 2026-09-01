import { Target, Users, Lightbulb, Briefcase, TrendingUp, Landmark } from "lucide-react";

export function Skills() {
  const strengths = [
    { title: "Strategic Planning & Growth", icon: Target },
    { title: "Operations & P&L Leadership", icon: TrendingUp },
    { title: "Project & Program Management (PMP)", icon: Briefcase },
    { title: "Organizational Culture & Retention", icon: Users },
    { title: "Government Relations & Civic Impact", icon: Landmark },
    { title: "Go-To-Market & Retail Expansion", icon: Lightbulb },
  ];

  const specialization = [
    { title: "Real Estate Development", desc: "Multi-family housing acquisition, infrastructure, and urban revitalization." },
    { title: "Infrastructure Planning", desc: "Urban development and community infrastructure strategies." },
    { title: "Economic Revitalization", desc: "Empowering small businesses, NFPs, and local employment growth." },
    { title: "Civic Engagement", desc: "Public safety policy, CAPS beat facilitation, and political campaign execution." },
    { title: "Talent Experience Platforms", desc: "SaaS recruitment platforms and multi-market talent acquisition." },
    { title: "GTM Strategy & Retail Ops", desc: "Omni-channel expansion across Amazon, Apple, Microsoft, and Samsung." },
    { title: "Community Impact Programs", desc: "Directing Metro Growth Cares non-profit and corporate citizenship." },
    { title: "Organizational Culture Building", desc: "Empowering teams, continuous improvement, and 99% retention models." },
  ];

  const qualifications = [
    "Strategic Planning", "Operations Management", "Project & Program Leadership",
    "Organizational Transformation", "Community Development", "Government Relations",
    "Talent Acquisition", "Change Management", "Cross-Functional Leadership",
    "Business Development", "Salesforce", "SaaS Platforms", "PMP® Certified",
    "MBE/WBE Certified", "Omni-Channel Retail", "P&L Management", "Public Safety Policy",
    "DTC Execution", "Customer Experience (CX)", "Servant Leadership", "Nonprofit Governance"
  ];

  return (
    <section id="skills" className="py-32 bg-brand-bg">
      <div className="container-gr space-y-24">
        {/* Core Specialization & Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Specialization */}
          <div className="space-y-12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div>
              <div className="section-label justify-center lg:justify-start">SPECIALIZATION & EXPERTISE</div>
              <h2 className="text-4xl font-black mb-8 text-brand-primary uppercase tracking-tighter leading-none">
                Multifaceted Executive <br /> Specialization
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left w-full">
                {specialization.map(item => (
                  <div key={item.title} className="p-6 bg-brand-surface border border-brand-primary/10 rounded-xl space-y-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <h3 className="font-display font-bold text-lg text-brand-primary">{item.title}</h3>
                    <p className="text-xs font-sans text-brand-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key Capabilities */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="section-label justify-center lg:justify-start">KEY CAPABILITIES</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-items-center lg:justify-items-start">
              {strengths.map((strength, idx) => (
                <div key={idx} className="group p-6 border border-brand-primary/5 rounded-2xl bg-brand-bg hover:bg-brand-secondary hover:text-white transition-all duration-500 w-full max-w-xs sm:max-w-none shadow-sm">
                  <strength.icon className="w-8 h-8 mb-4 mx-auto lg:ml-0 text-brand-accent group-hover:text-white transition-colors" />
                  <h3 className="font-accent text-[11px] font-black tracking-[0.2em] uppercase leading-relaxed">
                    {strength.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Qualifications Cloud Grid */}
        <div className="border-t border-brand-primary/10 pt-20">
          <div className="text-center mb-12">
            <div className="section-label justify-center">SKILLSET & DOMAIN COMPETENCIES</div>
            <h3 className="text-3xl md:text-4xl font-display font-light text-brand-primary">
              Core <span className="italic font-bold text-brand-accent">Executive Competencies</span>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {qualifications.map((q, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-brand-surface border border-brand-primary/10 rounded-full font-mono text-xs font-semibold text-brand-primary hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-300 shadow-xs cursor-default"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
