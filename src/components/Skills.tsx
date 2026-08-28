import { Target, Users, Lightbulb, Briefcase, TrendingUp, Cpu } from "lucide-react";

export function Skills() {
  const strengths = [
    { title: "Enterprise QA Strategy", icon: Target },
    { title: "Test Automation Architecture", icon: Cpu },
    { title: "Talent Mentorship & Growth", icon: Users },
    { title: "CI/CD & DevOps Integration", icon: Lightbulb },
    { title: "Cross-Functional Leadership", icon: Briefcase },
    { title: "Process Optimization", icon: TrendingUp },
  ];

  const skillset = [
    "Technology & Strategy Alignment",
    "Enterprise-Wide QA Leadership",
    "Cross-Functional Team Management",
    "Process Improvement & Optimization",
    "Mentorship & Talent Development",
    "Stakeholder & Executive Collaboration",
    "CI/CD & Test Automation Frameworks",
    "API, GUI, Mobile & Regression Testing",
    "Agile & DevOps Transformation"
  ];

  const tools = [
    { name: "Selenium", logo: "/images/Selenium.png" },
    { name: "Appium", logo: "/images/Appium2.png" },
    { name: "TestNG", logo: "/images/testng2.png" },
    { name: "Rest Assured", logo: "/images/Rest-Assured2.png" },
    { name: "Sauce Labs", logo: "/images/Saucelabs.png" },
    { name: "Maven", logo: "/images/Maven.png" },
    { name: "Jenkins", logo: "/images/Jenkins2.png" },
    { name: "Java", logo: "/images/Java.png" },
    { name: "JavaScript", logo: "/images/javascript.png" },
    { name: "TypeScript", logo: "/images/Typescript.png" },
    { name: "SQL", logo: "/images/sql.png" },
    { name: "Git", logo: "/images/git.png" },
    { name: "SVN", logo: "/images/SVN.png" },
    { name: "AWS Pipeline", logo: "/images/AWS.png" },
    { name: "Jira", logo: "/images/Jira2.png" },
    { name: "Xray", logo: "/images/Xray.jpg" }
  ];

  return (
    <section id="skills" className="py-32 bg-brand-bg">
      <div className="container-gr space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Skillset & Specialization */}
          <div className="space-y-16 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div>
              <div className="section-label justify-center lg:justify-start">CORE CAPABILITIES</div>
              <h2 className="text-4xl font-black mb-8 text-brand-primary uppercase tracking-tighter leading-none">
                Mastering Enterprise <br /> QA & Automation
              </h2>
              <div className="space-y-4 text-left">
                {skillset.map(item => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-brand-accent rounded-full shrink-0"></div>
                    <span className="font-display italic text-lg text-brand-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Core Strengths */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="section-label justify-center lg:justify-start">CORE STRENGTHS</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-items-center lg:justify-items-start">
              {strengths.map((strength, idx) => (
                <div key={idx} className="group p-8 border border-brand-primary/5 rounded-2xl bg-brand-bg hover:bg-brand-secondary hover:text-white transition-all duration-500 w-full max-w-xs sm:max-w-none shadow-sm">
                  <strength.icon className="w-8 h-8 mb-6 mx-auto lg:ml-0 text-brand-accent group-hover:text-white transition-colors" />
                  <h3 className="font-accent text-[11px] font-black tracking-[0.2em] uppercase leading-relaxed">
                    {strength.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Test Automation Tools Grid */}
        <div className="border-t border-brand-primary/10 pt-20">
          <div className="text-center mb-12">
            <div className="section-label justify-center">TEST AUTOMATION TOOLS & TECH STACK</div>
            <h3 className="text-3xl font-display font-light text-brand-primary">
              Proven Expertise Across <span className="italic font-bold text-brand-accent">Enterprise Tooling</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
            {tools.map((tool, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-4 bg-white/70 backdrop-blur-xs border border-brand-primary/10 rounded-xl hover:border-brand-accent/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <img src={tool.logo} alt={tool.name} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="font-mono text-[10px] font-bold text-brand-primary uppercase tracking-wider text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
