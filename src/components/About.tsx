import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function About() {
  return (
    <section id="about-detail" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Arched Portrait Container */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-full max-w-md aspect-[4/5] bg-brand-surface rounded-[240px_240px_40px_40px] overflow-hidden border border-brand-primary/10 shadow-premium">
              <img 
                src="/images/KenHill.jpg" 
                alt="Ken Hill Portrait" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Cyclist / Hobbies Highlight Card */}
            <div className="w-full max-w-md bg-white/60 backdrop-blur-sm p-6 border border-brand-primary/10 rounded-2xl flex items-center gap-5 shadow-sm">
              <img 
                src="/images/Cyclist.jpg" 
                alt="Ken Hill Cyclist" 
                className="w-20 h-20 rounded-xl object-cover border border-brand-primary/10 shrink-0" 
              />
              <div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-1">Passions & Community</div>
                <div className="text-sm font-display font-semibold text-brand-primary">Avid Cyclist & Advocacy Leader</div>
                <p className="text-xs text-brand-muted mt-1 leading-snug">
                  Co-chair of the West Valley Trail Alliance (IMBA chapter), leading mountain biking advocacy, trail building, and youth mentorship.
                </p>
              </div>
            </div>
            
            {/* Design Accents */}
            <div className="absolute -z-10 top-1/2 -left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="section-label justify-center lg:justify-start">THE QA LEADER</div>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-8 text-brand-primary leading-tight">
              Architecting <span className="italic font-bold text-brand-accent">Enterprise Quality</span> <br /> 
              for Scalable Growth.
            </h2>
            <div className="space-y-8 text-lg text-brand-muted leading-relaxed font-display">
              <p className="italic">
                "Leadership is earned through knowledge, action, and trust. I lead by example, using technical expertise to empower teams and drive results."
              </p>
              <p className="not-italic text-base font-sans">
                Strategic and results-oriented Senior QA Architect and IT Leader with over 15 years of experience driving quality assurance initiatives, leading high-performing teams, and influencing enterprise-wide testing strategies. Recognized for building and mentoring technical teams, developing scalable test automation frameworks, and implementing innovative solutions that enhance software reliability and accelerate delivery cycles.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pt-6 border-t border-brand-primary/5">
                 {[
                   { title: "Strategic Leadership", desc: "Rooted in deep technical expertise and executive alignment." },
                   { title: "Talent Development", desc: "Empowering engineers and building high-performing QA organizations." },
                   { title: "Scalable QA Solutions", desc: "Designing 20+ reusable test automation frameworks." },
                   { title: "Enterprise Impact", desc: "Supporting 30+ Agile teams across complex digital platforms." }
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
                href="/images/Ken_Hill_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                 <div className="w-10 h-10 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all">
                    <ArrowDown size={14} className="group-hover:text-white transition-colors" />
                 </div>
                 <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-brand-primary/60 italic">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
