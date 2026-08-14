import { Target, Users, Lightbulb, Briefcase, TrendingUp, HeartHandshake } from "lucide-react";

export function Skills() {
  const strengths = [
    { title: "Strategic Workforce Planning", icon: Target },
    { title: "Global Team Leadership", icon: Users },
    { title: "Employer Branding", icon: Lightbulb },
    { title: "Executive Recruiting", icon: Briefcase },
    { title: "Talent Acquisition Analytics", icon: TrendingUp },
    { title: "Diversity & Inclusion", icon: HeartHandshake },
  ];

  const skillsets = [
    "Recruiting", "Sourcing", "Negotiating", "Networking",
    "Branding", "Strategizing", "Analyzing", "Leading",
    "Planning", "Coaching", "Innovating", "Forecasting",
    "Engaging", "Evaluating", "Motivating", "Collaborating",
    "Advising", "Decision-Making", "Communicating", "Onboarding"
  ];

  return (
    <section className="py-32 bg-brand-bg">
      <div className="container-gr">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: What I Do Best & Skillset */}
          <div className="space-y-16 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div>
              <div className="section-label justify-center lg:justify-start">WHAT I DO BEST</div>
              <h2 className="text-4xl font-black mb-8 text-brand-primary uppercase tracking-tighter leading-none">
                Mastering Global <br /> Talent Acquisition
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center lg:justify-items-start">
                {[
                  "Strategic Workforce Planning",
                  "Global Recruiting Strategy",
                  "Team Leadership & Development",
                  "Diversity & Inclusion Programs"
                ].map(item => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                    <span className="font-display italic text-lg text-brand-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full">
              <div className="section-label justify-center lg:justify-start">SKILLSET</div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {skillsets.map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-brand-bg border border-brand-primary/5 rounded-full font-accent text-[10px] font-bold tracking-widest uppercase text-brand-muted hover:text-brand-primary hover:border-brand-primary transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Strengths with Icons */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="section-label justify-center lg:justify-start">CORE STRENGTHS</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-items-center lg:justify-items-start">
              {strengths.map((strength, idx) => (
                <div key={idx} className="group p-8 border border-brand-primary/5 rounded-2xl bg-brand-bg hover:bg-brand-secondary hover:text-white transition-all duration-500 w-full max-w-xs sm:max-w-none">
                  <strength.icon className="w-8 h-8 mb-6 mx-auto lg:ml-0 text-brand-accent group-hover:text-white transition-colors" />
                  <h3 className="font-accent text-[11px] font-black tracking-[0.2em] uppercase leading-relaxed">
                    {strength.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
