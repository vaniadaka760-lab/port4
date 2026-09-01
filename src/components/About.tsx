import { Target, Heart, Compass, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about-detail" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Arched Portrait Container */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-full max-w-md aspect-[4/5] bg-brand-surface rounded-[240px_240px_40px_40px] overflow-hidden border border-brand-primary/10 shadow-premium">
              <img 
                src="/images/Laura_Snider.jpg" 
                alt="Laura Snider Portrait" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Core Values & Goals Highlight Card */}
            <div className="w-full max-w-md bg-white/70 backdrop-blur-sm p-6 border border-brand-primary/10 rounded-2xl flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Heart size={20} className="text-brand-accent" />
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-accent">Empathetic Leadership</div>
              </div>
              <p className="text-sm font-display italic text-brand-primary">
                "I am described as an empathetic leader, trusted by my teams and executive level management."
              </p>
              <div className="border-t border-brand-primary/10 pt-3">
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-2">My Core Goals</div>
                <ul className="space-y-1 text-xs font-sans text-brand-primary/80">
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-brand-accent" /> Hold myself to a higher standard</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-brand-accent" /> Support My Team</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-brand-accent" /> Never Stop Learning</li>
                </ul>
              </div>
            </div>
            
            {/* Design Accents */}
            <div className="absolute -z-10 top-1/2 -left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="section-label justify-center lg:justify-start">PROJECT MANAGER II</div>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-8 text-brand-primary leading-tight">
              Leading <span className="italic font-bold text-brand-accent">Agile & Waterfall</span> <br /> 
              Enterprise Software Delivery.
            </h2>
            <div className="space-y-6 text-lg text-brand-muted leading-relaxed font-display">
              <p className="italic">
                "Laura Snider excels as a Project Manager, effectively leading both business and IT teams onshore and offshore."
              </p>
              <p className="not-italic text-base font-sans">
                She possesses the acumen to manage complex projects and ensure their timely completion. Her ability to navigate diverse team dynamics and maintain seamless collaboration across various locations speaks to her exceptional leadership and organizational skills.
              </p>
              <p className="not-italic text-base font-sans">
                Laura skillfully communicates with C-level stakeholders, translating corporate directives into actionable plans for global teams. She adeptly manages resources, budgets, and cost plans using ServiceNow, ensuring efficient allocation and optimal utilization. Laura also calculates Return on Investment (ROI) with precision and oversees project budgets up to $1B-$2B.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pt-6 border-t border-brand-primary/5">
                 {[
                   { title: "Empathetic Leadership", desc: "Trusted by onshore/offshore teams and executive leadership." },
                   { title: "ServiceNow & ROI", desc: "Managing resources, cost plans, and project budgets up to $1B-$2B." },
                   { title: "Agile & Waterfall", desc: "Expertise across Scrum frameworks, PI Planning, and Waterfall SDLC." },
                   { title: "Global Alignment", desc: "Translating C-level strategy into actionable execution for global teams." }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col gap-1 pr-4">
                      <span className="text-sm font-bold text-brand-primary uppercase tracking-widest">{item.title}</span>
                      <span className="text-xs text-brand-muted/80">{item.desc}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 items-center">
              <a href="#contact" className="btn-accent px-10">
                Let's Connect
              </a>
              <a 
                href="https://www.linkedin.com/in/laura-snider/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                 <div className="w-10 h-10 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all">
                    <Compass size={14} className="group-hover:text-white transition-colors" />
                 </div>
                 <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-brand-primary/60 italic">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
