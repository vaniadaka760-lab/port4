import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Arched Portrait Container */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[4/5] bg-brand-surface rounded-[240px_240px_40px_40px] overflow-hidden border border-brand-primary/10 shadow-premium">
              <img 
                src="/images/jean-lanctot.jpg" 
                alt="Jean Lanctot Portrait" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-multiply pointer-events-none"></div>
            </div>
            {/* Design Accents */}
            <div className="absolute -z-10 top-1/2 -left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="section-label justify-center lg:justify-start">THE TALENT LEADER</div>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-8 text-brand-primary leading-tight">
              Architecting <span className="italic font-bold text-brand-accent">Global Teams</span> <br /> 
              for Fortune 500 Scale.
            </h2>
            <div className="space-y-8 text-lg text-brand-muted leading-relaxed font-display">
              <p className="italic">
                "Great recruiting isn't about filling seats — it's about building the kind of collaborative, inclusive culture where the right people can do their best work."
              </p>
              <p className="not-italic text-base font-sans">
                Across roles at Twitch, Amazon, Starbucks, and Fluke, I've led global talent acquisition teams through periods of rapid growth, guiding recruitment for organizations spanning the U.S., EMEA, and APAC. Whether building out executive search pipelines or standing up hiring manager training programs from the ground up, I approach every engagement through the lens of strategic workforce planning. I thrive in environments where global scale meets the human side of hiring.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pt-6 border-t border-brand-primary/5">
                 {[
                   { title: "Strategic Workforce Planning", desc: "Building scalable recruiting engines for global teams." },
                   { title: "Inclusive Leadership", desc: "Cultivating collaborative, high-performance cultures." },
                   { title: "Talent Acquisition Analytics", desc: "Driving hiring decisions with data-backed insight." },
                   { title: "Employer Branding", desc: "Positioning organizations as destinations for top talent." }
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
              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-10 h-10 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all">
                    <ArrowDown size={14} className="group-hover:text-white transition-colors" />
                 </div>
                 <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-brand-primary/60 italic">Download Resume</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
