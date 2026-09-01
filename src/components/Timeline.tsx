import { motion } from "motion/react";

const events = [
  {
    year: "2022",
    period: "2022 – Present",
    role: "Project Manager",
    company: "Humana Inc",
    location: "Enterprise PMO",
    desc: "Lead project business and IT teams managing resources, budgets ($1-2B) in ServiceNow, calculating ROI and monthly run rates across Agile & Waterfall environments.",
  },
  {
    year: "2021",
    period: "2021 – 2022",
    role: "Project Manager",
    company: "Brooksource for Humana",
    location: "Healthcare IT",
    desc: "Directed business and IT teams, actively managing stakeholder partnerships, PMO governance, and ServiceNow budget/resource plans.",
  },
  {
    year: "2020",
    period: "2020 – 2021",
    role: "Project Manager",
    company: "Tek Systems for Bank of America",
    location: "Banking Tech",
    desc: "End-to-end management of large-scale banking application development projects, financials, tollgates, and Agile sprint execution.",
  },
  {
    year: "2019",
    period: "2019 – 2020",
    role: "Project Manager",
    company: "Pinnacle Group for Frontier Communications",
    location: "Telecom Systems",
    desc: "Managed systems delivery for Billing, CRM, PEGA, Salesforce, and Enterprise Data Warehouse systems across aggressive timelines.",
  },
  {
    year: "2018",
    period: "2018 – 2019",
    role: "Application Project Manager",
    company: "Neiman Marcus Group",
    location: "Digital Commerce",
    desc: "Led web and digital technology projects, directing onshore/offshore teams and vendor partnerships.",
  },
  {
    year: "2017",
    period: "2017 – 2017",
    role: "Project Manager",
    company: "Maxsys Consulting for Verizon",
    location: "Network & Systems",
    desc: "Directed IT software upgrades, network implementations, system conversions, and platform consolidations.",
  },
  {
    year: "2011",
    period: "2011 – 2016",
    role: "Project Manager (EPMO)",
    company: "Kemper Corporation",
    location: "Insurance & Financials",
    desc: "EPMO Project Manager for strategic Web, Policy, Rating, Billing, and Compliance initiatives with budgets up to $5M.",
  },
  {
    year: "2005",
    period: "2005 – 2011",
    role: "Project Manager",
    company: "McAfee, Inc.",
    location: "Tech Support & CRM",
    desc: "Managed software applications, Siebel CRM implementations, vendor selections, and M&A integrations ($100K–$2M budgets).",
  },
  {
    year: "2002",
    period: "2002 – 2004",
    role: "Project Manager",
    company: "Blockbuster Corporate",
    location: "Strategic Concepts",
    desc: "Managed master project plans for nationwide store concept rollouts, cost estimation, and deliverable tracking.",
  },
  {
    year: "2000",
    period: "2000 – 2001",
    role: "Project Manager",
    company: "Computer Sciences Corporation (CSC)",
    location: "Global Systems",
    desc: "Outsourced from Nortel to CSC, delivering global full-lifecycle systems projects and CRM implementations.",
  },
  {
    year: "1997",
    period: "1997 – 2000",
    role: "Project Manager",
    company: "Nortel Networks",
    location: "Richardson, TX",
    desc: "Managed full-lifecycle web and client-server systems projects for global deployment across international sites.",
  },
  {
    year: "1993",
    period: "1993",
    role: "Bachelor of Arts (B.A.)",
    company: "University of Science and Arts of Oklahoma",
    location: "Chickasha, OK",
    desc: "Obtained Bachelor of Arts degree, establishing foundational leadership, communication, and organizational analytical skills.",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-brand-bg overflow-hidden">
      <div className="container-gr">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-label justify-center">CAREER ROADMAP</div>
          <h2 className="text-6xl md:text-9xl font-display italic font-light text-brand-primary tracking-tighter leading-none mb-10">
            A Journey <br />
            <span className="font-bold not-italic">of Excellence.</span>
          </h2>
          <p className="text-xl text-brand-muted font-display italic leading-relaxed max-w-2xl mx-auto">
            Tracing 25+ years of Project Management leadership across Healthcare, Telecom, Financial, and Digital Tech sectors.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
              {events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col md:flex-row gap-12 relative group/item px-8 py-8 -mx-8 hover:bg-brand-surface/50 transition-premium rounded-xl"
                >
                  <div className="absolute left-2 top-1/2 text-[140px] md:text-[180px] font-display font-black text-brand-primary opacity-10 group-hover/item:opacity-25 group-hover/item:text-brand-accent select-none pointer-events-none leading-none -translate-y-1/2 transition-all duration-700">
                    {event.year.slice(-2)}
                  </div>
                  
                  <div className="w-full md:w-48 pt-2">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-brand-accent font-bold mb-3">
                      {event.period}
                    </div>
                    <div className="flex gap-3 mb-4">
                       <div className="h-6 w-1 bg-brand-accent/40"></div>
                       <div className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-brand-muted leading-tight pt-0.5">
                          Verified <br/>Role
                       </div>
                    </div>
                    <div className="h-px w-full bg-brand-primary/10"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl md:text-4xl font-display font-bold text-brand-primary tracking-tight">
                          {event.role}
                        </h3>
                        <p className="text-lg font-display italic text-brand-accent">
                          {event.company}
                        </p>
                      </div>
                      <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-muted pt-1 shrink-0">
                        {event.location}
                      </div>
                    </div>
                    
                    <p className="text-base md:text-lg text-brand-muted font-display italic leading-relaxed max-w-3xl">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
