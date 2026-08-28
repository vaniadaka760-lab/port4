import { Users, Award, Globe2, GraduationCap } from "lucide-react";

export function Hero() {
  const trustMetrics = [
    {
      icon: <Users size={16} className="text-brand-accent" />,
      value: "15+",
      label: "YEARS QA LEADERSHIP",
    },
    {
      icon: <Award size={16} className="text-brand-accent" />,
      value: "20+",
      label: "FRAMEWORKS DESIGNED",
    },
    {
      icon: <Globe2 size={16} className="text-brand-accent" />,
      value: "30+",
      label: "AGILE TEAMS SUPPORTED",
    },
    {
      icon: <GraduationCap size={16} className="text-brand-accent" />,
      value: "B.S.",
      label: "BUSINESS INFO SYSTEMS",
    }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center bg-brand-bg overflow-hidden pt-28 pb-16">
      <div className="container-gr w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Narrative Column */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="w-full">
              <div className="section-label justify-center lg:justify-start">IT QUALITY ASSURANCE LEADER</div>
              
              <h1 className="text-6xl md:text-[80px] xl:text-[90px] font-display font-light leading-[0.9] tracking-tighter text-brand-primary mb-10">
                Ken <br />
                <span className="italic font-bold text-brand-accent">Hill.</span>
              </h1>

              <div className="max-w-xl mx-auto lg:ml-0">
                <p className="text-xl md:text-2xl text-brand-muted font-display italic leading-tight mb-8">
                  Senior QA Architect & IT Leader · Driving Quality Transformation & Enterprise Test Automation
                </p>
                <p className="text-base text-brand-muted font-sans mb-12 leading-relaxed">
                  Strategic and results-oriented Senior QA Architect and IT Leader with over 15 years of experience driving quality assurance initiatives, leading high-performing teams, and influencing enterprise-wide testing strategies. Proven ability to bridge the gap between technology and business by aligning QA practices with organizational goals.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16">
                  <a href="#experience" className="btn-accent border border-brand-accent">
                     Career Highlights
                  </a>
                  <a href="#contact" className="btn-outline">
                     Direct Inquiry
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-brand-primary/10 max-w-xl mx-auto lg:ml-0">
                {trustMetrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span 
                      className="font-display italic text-4xl md:text-5xl text-brand-primary tracking-tighter lining-nums"
                      style={{ fontVariantNumeric: "lining-nums" }}
                    >
                      {metric.value}
                    </span>
                    <span className="font-mono text-[10px] text-brand-muted uppercase tracking-[0.15em] font-bold leading-tight">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-12 xl:col-span-5 relative min-h-[450px] lg:min-h-[550px] aspect-[4/5] lg:aspect-auto w-full bg-brand-bg overflow-hidden border border-brand-primary/10 rounded-2xl shadow-premium">
            <div className="absolute inset-0">
              <img 
                src="/images/KenHill.jpg" 
                alt="Ken Hill" 
                className="w-full h-full object-cover object-top brightness-105"
              />
              {/* Subtle Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-transparent to-transparent md:bg-linear-to-r md:from-brand-bg/60 md:via-transparent md:to-transparent"></div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex justify-center lg:justify-start pointer-events-none">
              <div className="bg-white/80 backdrop-blur-md p-5 sm:p-6 max-w-[280px] sm:max-w-xs border border-brand-primary/5 shadow-premium">
                <div className="font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-brand-accent mb-1 md:mb-2">Philosophy</div>
                <div className="text-sm sm:text-base font-display italic text-brand-primary leading-snug">
                   "Quality assurance isn't just a technical function — it's a strategic pillar of business success."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
