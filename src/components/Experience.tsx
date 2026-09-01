export function Experience() {
  const experiences = [
    {
      category: "Healthcare IT & Enterprise Delivery",
      company: "Humana, Inc",
      period: "March 2022 – Current",
      title: "Project Manager",
      location: "Enterprise PMO",
      description: "Lead project business and IT teams to ensure timely completion of projects. Actively manage stakeholder partnerships and mitigate risks for projects and programs. Adhere to PMO and governance processes. Manage resources, budget, and cost plans in ServiceNow. Calculate Return on Investment (ROI), manage project budgets for projects $1-2B ensuring projects track to plan and reporting monthly run rate. Experience working in both Agile and Waterfall environments.",
      details: [
        "Manage project budgets up to $1B-$2B tracking to plan with monthly run rate reporting.",
        "Resource management, cost plans, and ROI calculation within ServiceNow.",
        "Lead business & IT teams across both Agile and Waterfall delivery frameworks."
      ]
    },
    {
      category: "Healthcare IT Consulting",
      company: "Brooksource for Humana",
      period: "May 2021 – March 2022",
      title: "Project Manager",
      location: "Enterprise Delivery",
      description: "Lead project business and IT teams to ensure timely completion of projects. Actively manage stakeholder partnerships and mitigate risks for projects and programs. Adhere to PMO governance processes. Manage resources, budget and cost plans in ServiceNow. Experience working in both Agile and Waterfall environments.",
      details: [
        "Partnered with IT and business stakeholders to mitigate risks and maintain governance.",
        "Managed ServiceNow resource allocation, budget tracking, and monthly reporting.",
        "Facilitated cross-functional collaboration across onshore and offshore teams."
      ]
    },
    {
      category: "Financial Systems & Application Development",
      company: "Tek Systems for Bank of America",
      period: "August 2020 – March 2021",
      title: "Project Manager",
      location: "Banking Technology",
      description: "End to end Project Management of large-scale application development projects, which includes project planning, financials, and tollgates. Ensure deliverables are met per timelines using Agile, JIRA, and Confluence methodologies. Work with stakeholders and development teams to ensure timely delivery with executive status reporting.",
      details: [
        "End-to-end management of large-scale banking application development projects.",
        "Maintained project financials, tollgate reviews, and executive status reporting.",
        "Utilized Agile, JIRA, and Confluence for sprint tracking and deliverable management."
      ]
    },
    {
      category: "Telecommunications & Enterprise Systems",
      company: "Pinnacle Group for Frontier Communications",
      period: "November 2019 – May 2020",
      title: "Project Manager",
      location: "Telecom Systems",
      description: "Responsible for delivery of systems projects including Billing, Finance/Accounting, Customer Experience, CRM, PEGA, Sterling, Data Products International (DPI), Salesforce, Sterling 7 & 9, Dot.com, Sigma, Mobile application, and Enterprise Data Warehouse systems. Proven ability to manage projects with aggressive timelines and changing requirements using Planview, Confluence, and JIRA.",
      details: [
        "Delivered complex systems across Billing, CRM, PEGA, Salesforce, and Enterprise Data Warehouse.",
        "Managed multiple simultaneous implementation projects with vendors and global resources.",
        "Maintained strict quality standards, scope tracking, and executive stakeholder communication."
      ]
    },
    {
      category: "Digital Technology & E-Commerce",
      company: "Neiman Marcus Group",
      period: "October 2018 – November 2019",
      title: "Application Project Manager",
      location: "Digital Technology",
      description: "Responsible for delivery of web and digital technology-based projects. Strong leadership capabilities in directing project teams and promoting a positive team effort. Strengths include ability to manage large projects with aggressive timelines, challenging scope, and changing business requirements using MS Project, Confluence, and JIRA.",
      details: [
        "Led web and digital technology project teams through rapid deployment cycles.",
        "Developed constructive working relationships with onsite, offshore, and vendor teams.",
        "Facilitated alignment between business leadership and technical implementation teams."
      ]
    },
    {
      category: "Digital Technology Consulting",
      company: "Randstad Technologies for Neiman Marcus Group",
      period: "April 2018 – October 2018",
      title: "Application Project Manager",
      location: "Digital Commerce",
      description: "Responsible for delivery of web and digital technology-based projects. Strong leadership capabilities in directing project teams and promoting a positive team effort. Proficiency with project management tools including Atlassian Confluence and JIRA. Develops and maintains constructive and cooperative working relationships.",
      details: [
        "Managed web and digital technology initiatives under tight release schedules.",
        "Ensured seamless business-IT alignment across cross-functional workstreams."
      ]
    },
    {
      category: "Telecom & Network Implementations",
      company: "Maxsys Consulting for Verizon",
      period: "January 2017 – December 2017",
      title: "Project Manager",
      location: "Network & Systems",
      description: "Leadership in Project Management utilizing SDLC, Waterfall, and Agile methodologies. Responsible for managing IT initiatives, software application upgrades, network implementations, system migrations/conversions, and platform consolidations. Collaborated with cross-functional teams using quantitative analysis and business analysis to drive results.",
      details: [
        "Managed software upgrades, network implementations, and platform consolidations.",
        "Applied quantitative and business analysis to optimize project workflows and success."
      ]
    },
    {
      category: "Insurance & Financial Systems EPMO",
      company: "Kemper Corporation",
      period: "November 2011 – December 2016",
      title: "Project Manager",
      location: "EPMO",
      description: "EPMO Project Manager responsible for key strategic IT projects related to Web, Policy, Rating, Billing, Product Management, Sales, Marketing, and Compliance. Planned and managed project teams (10-40 members across US) with budgets up to $5M and project durations of 1 to 24 months.",
      details: [
        "Managed strategic insurance IT projects with budgets up to $5M across national teams.",
        "Aligned execution with corporate strategy, compliance, ethics, and governance."
      ]
    },
    {
      category: "Cybersecurity & Technical Support Systems",
      company: "McAfee, Inc.",
      period: "May 2005 – February 2011",
      title: "Project Manager",
      location: "Worldwide Tech Support",
      description: "Successfully managed multiple projects for the Worldwide Technical Support Organization. Managed software applications, Siebel CRM Implementation, vendor selection, new company acquisition integrations, and infrastructure projects from inception to delivery ($100K–$2M budgets, 10-50 team members).",
      details: [
        "Managed Siebel CRM implementations and corporate acquisition integrations.",
        "Directed multi-site project teams across the US with budgets up to $2M."
      ]
    },
    {
      category: "Retail Strategic Concepts",
      company: "Blockbuster Corporate",
      period: "August 2002 – May 2004",
      title: "Project Manager",
      location: "Strategic Concepts Group",
      description: "Developed and maintained master project plans and calendars for concept testing (candy, popcorn, gaming in stores). Managed scheduling, estimating, costing, tracking, and reporting for projects ranging 2 to 18 months with budgets of $100K–$500K across US teams.",
      details: [
        "Orchestrated store concept rollouts and nationwide resource allocations.",
        "Utilized cost estimation, deliverable tracking, and milestone reporting."
      ]
    },
    {
      category: "Global IT Services",
      company: "Computer Sciences Corporation (CSC)",
      period: "November 2000 – July 2001",
      title: "Project Manager",
      location: "Global Systems",
      description: "Outsourced from Nortel to CSC. Provided Project Management expertise on full lifecycle systems projects (web-based & client-server) and process-related projects for global deployment ($10K–$500K budgets, global teams).",
      details: [
        "Managed CRM implementations and global process initiatives.",
        "Directed multi-site international project teams."
      ]
    },
    {
      category: "Global Telecom Systems",
      company: "Nortel Networks",
      period: "April 1997 – November 2000",
      title: "Project Manager",
      location: "Richardson, TX",
      description: "Provided Project Management expertise on full lifecycle systems projects (web-based & client-server) and process-related projects for global deployment to internal managers and employees. Managed CRM implementations and marketing materials across global sites.",
      details: [
        "Delivered full-lifecycle enterprise web and client-server systems globally.",
        "Collaborated across international project teams and executive stakeholders."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-brand-surface">
      <div className="container-gr">
        <div className="max-w-3xl mb-20 pt-10">
          <div className="section-label lg:justify-start">CAREER ROLES & IMPACT</div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-brand-primary tracking-tighter leading-tight">
             Proven Track Record in <span className="italic font-bold text-brand-accent">Executive Project Management</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full bg-brand-bg border border-brand-primary/10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Card Header */}
              <div className="relative p-8 bg-white border-b border-brand-primary/10 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-mono text-[9px] font-bold tracking-[0.25em] uppercase text-brand-accent block mb-1">
                      {exp.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-brand-primary">
                      {exp.company}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-brand-surface border border-brand-primary/10 text-[10px] font-mono font-bold text-brand-primary tracking-wider rounded-full shrink-0">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs font-sans font-bold text-brand-muted mt-2 italic">
                  {exp.title} • {exp.location}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                <p className="text-xs md:text-sm text-brand-muted font-sans leading-relaxed">
                   {exp.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-brand-primary/5">
                  <div className="font-mono text-[9px] font-bold tracking-widest text-brand-primary uppercase mb-2">Key Deliverables</div>
                  {exp.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-brand-muted">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-1.5 shrink-0"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
