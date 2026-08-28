import { motion } from "motion/react";

export function Vision() {
  return (
    <section id="philosophy" className="overflow-hidden bg-brand-bg relative py-20 lg:py-32">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Narrative Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="section-label lg:justify-start">QUALITY TRANSFORMATION</div>
            <h2 className="text-5xl md:text-7xl font-display font-light text-brand-primary tracking-tighter leading-[0.9] mb-12">
              Transforming QA into an <span className="italic font-bold text-brand-accent">Enterprise Powerhouse.</span>
            </h2>
            
            <div className="space-y-10 text-xl text-brand-muted font-display italic leading-relaxed mb-16 max-w-xl">
              <p>
                "In both my last two employers, I played an instrumental part in transforming QA departments from fragmented states into enterprise powerhouses."
              </p>
              <p className="not-italic text-base font-sans text-brand-muted/80 leading-relaxed">
                At Choice Hotels, I started when test automation was a new technology and helped implement multiple lines of sustainable test automation assets. At CSAA, I joined when the company was divided into silos and QA was fractured. Over the years, as silos merged, I was a key leader enabling enterprise-wide QA transformation with shared frameworks, CI/CD integration, and flourishing technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 pt-12 border-t border-brand-primary/10">
              <div className="space-y-2">
                <div className="font-mono text-[9px] uppercase tracking-widest text-brand-accent font-bold">Education</div>
                <div className="text-xs font-bold text-brand-primary font-sans tracking-widest uppercase">B.S. BUSINESS INFORMATION SYSTEMS <br/>UNIVERSITY OF PHOENIX</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-[9px] uppercase tracking-widest text-brand-accent font-bold">Core Methodologies</div>
                <div className="text-xs font-bold text-brand-primary font-sans tracking-widest uppercase">Enterprise Automation Frameworks <br/>CI/CD & DevOps Integration</div>
              </div>
            </div>
          </div>

          {/* Image Side with Luxury Arched Mask */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[0_200px_0_200px] overflow-hidden shadow-lux group">
              <img 
                src="/images/KenHill.jpg" 
                alt="Ken Hill — QA Transformation & Strategy" 
                className="w-full h-full object-cover object-top brightness-105 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-soft-light group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
