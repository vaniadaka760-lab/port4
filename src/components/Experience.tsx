import { MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  const positions = [
    {
      role: "Managing Director - Operations & Strategy",
      company: "Metro Growth Inc",
      dates: "2022 - PRESENT",
      location: "Chicago, IL",
      highlights: [
        "Launched organization to enhance community & economic development by professionally upskilling citizens and extending operational support to small businesses and NFPs.",
        "Led public safety political campaigns and aligned with policing initiatives to reduce neighborhood crime in Chicago.",
        "Awarded Minority and Women’s Business Enterprise (MBE/WBE) certifications by the City of Chicago.",
        "Ran full-cycle political campaign for Police District Council candidacy in the 2023 Chicago Municipal Election, receiving high-profile endorsements.",
        "Analyzed Chicago crime statistics and incident reports to develop local mitigation tactics."
      ]
    },
    {
      role: "Executive Director - Community Development",
      company: "Metro Growth Cares",
      dates: "2022 - PRESENT",
      location: "Chicago, IL",
      highlights: [
        "Provided strategic oversight and management of community development and social impact initiatives.",
        "Advanced corporate citizenship, public safety policy, and non-profit partner relations.",
        "Directed operational programs and team members in delivering civic support and upskilling opportunities."
      ]
    },
    {
      role: "Relationship Coach & Published Author",
      company: "The Wife Advice",
      dates: "2025 - PRESENT",
      location: "Publishing & Digital Platforms",
      highlights: [
        "Published 'Dating for Marriage' guidebook.",
        "Delivered 1:1 relationship coaching sessions for executive clients.",
        "Built social media presence across platforms, sharing strategic relationship advice."
      ]
    },
    {
      role: "Chief Operating Officer",
      company: "SquareResults",
      dates: "2023 - 2025",
      location: "Tempe, AZ",
      highlights: [
        "Oversaw business and product development for a tech-enabled recruitment platform.",
        "Drove operational excellence, strategic growth, and talent experience platform innovation.",
        "Reported directly to CEO for milestone execution and product launches."
      ]
    },
    {
      role: "Head of Operations – North America Driver Support",
      company: "Uber",
      dates: "2021 - 2022",
      location: "Chicago, IL",
      highlights: [
        "Accountable for physical Driver/Partner support sites across North America (Greenlights).",
        "Led a large organization of 400+ driver-facing employees to empower drivers and optimize partner network.",
        "Managed operational budget of 8 figures and core KPIs, establishing actionable data insights."
      ]
    },
    {
      role: "Head of Operations – Smart Home Services",
      company: "Amazon",
      dates: "2018 - 2021",
      location: "Chicago, IL",
      highlights: [
        "Solely led Alexa Smart Home Services transition to Ring subsidiary, overseeing P&L, strategic growth, and 200+ field technicians.",
        "Maintained 4.95/5 average star rating across 40,000 newly constructed home installations annually.",
        "Achieved a 99% staff retention rate during business unit acquisition and reorganization."
      ]
    },
    {
      role: "District Sales Manager",
      company: "Samsung Electronics",
      dates: "2014 - 2018",
      location: "Chicago, IL",
      highlights: [
        "Oversaw field operations and brand presence across largest US territory (1,500+ stores across North Central), growing regional revenue from $183M to $400M.",
        "Awarded 'Top Sales District' for FY2015 and H12017.",
        "Created national Monthly Operations Execution Guide adopted across Samsung divisions."
      ]
    },
    {
      role: "General Manager",
      company: "Microsoft",
      dates: "2009 - 2014",
      location: "Schaumburg / Chicago, IL",
      highlights: [
        "Founding leadership member launching Microsoft Store #1 (Scottsdale, AZ) and expanding 100+ global experience stores.",
        "Managed 50-mile radius omni-channel performance, B2C/B2B sales, technical support, and community development.",
        "Grew post-launch local omni-channel revenue by 30% through targeted community engagement and sponsorships."
      ]
    },
    {
      role: "Founder",
      company: "Instant Imaging Photography",
      dates: "2003 - 2009",
      location: "Chicago, IL",
      highlights: [
        "Founded 15-person event photography firm servicing 30 recurring weekly entertainment events in Chicago.",
        "Built subscription-based marketplace with 30k+ active subscribers and digital marketing channels."
      ]
    },
    {
      role: "Director of Marketing",
      company: "STILOSO",
      dates: "2008",
      location: "Chicago, IL",
      highlights: [
        "Expanded US market share for Italian cabinet manufacturer SCIC Cucine d’Italia in multi-unit residential construction sectors.",
        "Built accounts with top volume general contractors, real estate developers, and architects."
      ]
    },
    {
      role: "Senior Manager",
      company: "Apple Computer",
      dates: "2001 - 2007",
      location: "Chicago, IL",
      highlights: [
        "Founding leadership member of Apple Retail Stores prior to Store #1 opening.",
        "Launched flagship location on Michigan Avenue in Chicago, participating in national press announcements with Oprah Winfrey & Bono."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-brand-surface relative overflow-hidden">
      <div className="container-gr">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="section-label justify-center">PROFESSIONAL EXPERIENCE & LEADERSHIP</div>
          <h2 className="text-4xl md:text-6xl font-display font-light text-brand-primary leading-tight">
            Career <span className="italic font-bold text-brand-accent">Executive Journey</span>
          </h2>
          <p className="font-sans text-brand-muted text-base mt-4">
            Proven track record of driving operational excellence, P&L growth, and team transformation across Fortune 100 leaders and startups.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {positions.map((pos, idx) => (
            <div 
              key={idx} 
              className="p-8 md:p-12 bg-brand-bg rounded-2xl border border-brand-primary/10 hover:border-brand-accent/40 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-primary/10 pb-6 mb-8">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-accent mb-1 block">
                    {pos.company}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-primary group-hover:text-brand-accent transition-colors">
                    {pos.role}
                  </h3>
                </div>
                <div className="flex flex-col md:items-end gap-1 font-mono text-xs text-brand-muted">
                  <span className="flex items-center gap-1 font-bold text-brand-primary"><Calendar size={14} className="text-brand-accent" /> {pos.dates}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {pos.location}</span>
                </div>
              </div>

              <div className="space-y-3">
                {pos.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-1" />
                    <p className="text-sm md:text-base font-sans text-brand-primary/80 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
