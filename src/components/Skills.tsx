import { Target, Users, Lightbulb, Briefcase, TrendingUp, Cpu, DollarSign, Layers } from "lucide-react";

export function Skills() {
  const strengths = [
    { title: "Project & Program Management", icon: Target },
    { title: "Budgeting & ServiceNow ROI ($1-2B)", icon: DollarSign },
    { title: "Team Empowerment & Leadership", icon: Users },
    { title: "Agile, Scrum & PI Planning", icon: Layers },
    { title: "Global Onshore/Offshore Vendor Management", icon: Briefcase },
    { title: "Risk Assessment & Change Controls", icon: TrendingUp },
  ];

  const specialization = [
    { title: "Project Management", desc: "End-to-end delivery of complex enterprise systems across business & IT." },
    { title: "PMP Certified", desc: "PMBOK methodologies, governance, risk mitigation, and budget tracking." },
    { title: "Scrum Fundamentals", desc: "Sprint planning, backlog refinement, PI planning, retrospectives." },
    { title: "Team Empowerment", desc: "Fostering collaboration, empathetic leadership, and clear accountability." },
  ];

  const qualifications = [
    "Agile", "JIRA/Confluence", "ADO (Azure DevOps)", "Budgets & Cost Plans",
    "Team Building & Leadership", "Strategic Business Analysis", "Software Applications",
    "CRM & Salesforce", "SharePoint", "Initiative & Ethics", "Problem Solving",
    "Capacity Planning", "Waterfall", "MS Project / PWA", "Planview",
    "Risk Management & Assessment", "Change Controls", "Global Deployments", "SDLC",
    "Interpersonal Relations", "Even Temperament", "Excellent Communication", "Writing Skills",
    "Documentation & Training", "Project Management", "PMO", "Company Acquisitions & Integrations",
    "Vendor Management", "Client Management", "PMBOK Methodologies", "Process Management",
    "Thoroughness", "Empowers Others", "Time Management", "Marketing",
    "AIO & Spotfire Reporting", "ServiceNow"
  ];

  return (
    <section id="skills" className="py-32 bg-brand-bg">
      <div className="container-gr space-y-24">
        {/* Core Specialization & Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Specialization */}
          <div className="space-y-12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div>
              <div className="section-label justify-center lg:justify-start">CORE SPECIALIZATION</div>
              <h2 className="text-4xl font-black mb-8 text-brand-primary uppercase tracking-tighter leading-none">
                Specialization & <br /> Enterprise Focus
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

          {/* Right: Core Strengths */}
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
            <div className="section-label justify-center">QUALIFICATIONS & METHODOLOGIES</div>
            <h3 className="text-3xl md:text-4xl font-display font-light text-brand-primary">
              Comprehensive <span className="italic font-bold text-brand-accent">Management & Tooling Skillset</span>
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
