import { Target, Heart, Compass, CheckCircle2, Plane, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about-detail" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Arched Portrait Container */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-full max-w-md aspect-[4/5] bg-brand-surface rounded-[240px_240px_40px_40px] overflow-hidden border border-brand-primary/10 shadow-premium">
              <img 
                src="/images/Lisa_Seigneur.png" 
                alt="Lisa Seigneur Portrait" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Core Values & Goals Highlight Card */}
            <div className="w-full max-w-md bg-white/70 backdrop-blur-sm p-6 border border-brand-primary/10 rounded-2xl flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Lightbulb size={20} className="text-brand-accent" />
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-accent">Visionary Leadership</div>
              </div>
              <p className="text-xs md:text-sm font-display italic text-brand-primary">
                "Visionary executive and servant leader driving growth, innovation, and community impact across tech, real estate, and civic sectors."
              </p>
              <div className="border-t border-brand-primary/10 pt-3 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-muted uppercase font-bold">Personal Passion:</span>
                  <span className="font-bold text-brand-accent flex items-center gap-1"><Plane size={12} /> Traveling Internationally</span>
                </div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-muted mt-2">Executive Mission</div>
                <p className="text-xs font-sans text-brand-primary/80 leading-relaxed">
                  To scale inclusive, high-performing organizations that solve systemic challenges in housing, hiring, and community development.
                </p>
              </div>
            </div>
            
            {/* Design Accents */}
            <div className="absolute -z-10 top-1/2 -left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="section-label justify-center lg:justify-start">EXECUTIVE PROFILE</div>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-8 text-brand-primary leading-tight">
              Transforming <span className="italic font-bold text-brand-accent">Vision into Impact</span> <br /> 
              Across Fortune 100 & Startups.
            </h2>
            <div className="space-y-6 text-lg text-brand-muted leading-relaxed font-display">
              <p className="italic">
                "Lisa Seigneur is a dynamic executive leader with a proven track record of driving transformational growth across Fortune 100 companies and high-impact startups."
              </p>
              <p className="not-italic text-base font-sans">
                At SquareResults, Lisa served as COO, spearheading operational excellence and product development for a tech-forward recruitment platform. At Metro Growth Inc, she leads operations strategy, project management, real estate acquisition, and government relations, complemented by Metro Growth Cares focused on community upliftment.
              </p>
              <p className="not-italic text-base font-sans">
                She has held founding leadership roles in early-stage DTC and GTM programs at Amazon, Uber, Microsoft, Apple, and Samsung, scaling national teams (400+ staff at Uber), launching flagship retail environments, and growing regional sales from $183M to $400M.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pt-6 border-t border-brand-primary/5">
                 {[
                   { title: "Servant Leadership", desc: "Cultivating high-performing cultures and stakeholder trust." },
                   { title: "Multi-Sector Operations", desc: "Expertise across Real Estate, SaaS, Tech, Retail, and Civic sectors." },
                   { title: "Civic & Community Impact", desc: "Leading public safety campaigns and MBE/WBE certified initiatives." },
                   { title: "Enterprise Scaling", desc: "Expanding footprints at Apple, Microsoft, Samsung, Amazon, and Uber." }
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
              <a href="#resume" className="btn-outline px-10">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
