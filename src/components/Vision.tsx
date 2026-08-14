import { motion } from "motion/react";

export function Vision() {
  return (
    <section id="philosophy" className="overflow-hidden bg-brand-bg relative py-20 lg:py-32">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Narrative Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="section-label lg:justify-start">PRINCIPLES & PHILOSOPHY</div>
            <h2 className="text-5xl md:text-7xl font-display font-light text-brand-primary tracking-tighter leading-[0.9] mb-12">
              Growth is a result of <span className="italic font-bold text-brand-accent">genuine inclusion.</span>
            </h2>
            
            <div className="space-y-10 text-xl text-brand-muted font-display italic leading-relaxed mb-16 max-w-xl">
              <p>
                "A collaborative team dynamic isn't a nice-to-have — it's essential for success, and inspiring that dynamic is the core of good leadership."
              </p>
              <p className="not-italic text-base font-sans text-brand-muted/80 leading-relaxed">
                Building a recruiting function that lasts requires more than filling requisitions; it requires an architecture built on trust, inclusion, and continuous learning. I specialize in aligning global recruiting teams around shared goals, fostering mutual respect across cultures and regions, and mentoring recruiters to grow into leaders themselves — ensuring the talent function scales alongside the business it supports.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 pt-12 border-t border-brand-primary/10">
              <div className="space-y-2">
                <div className="font-mono text-[9px] uppercase tracking-widest text-brand-accent font-bold">Academic Achievement</div>
                <div className="text-xs font-bold text-brand-primary font-sans tracking-widest uppercase">M.S. HUMAN RESOURCE MGMT <br/>GOLDEN GATE UNIVERSITY</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-[9px] uppercase tracking-widest text-brand-accent font-bold">Core Methodologies</div>
                <div className="text-xs font-bold text-brand-primary font-sans tracking-widest uppercase">Situational Leadership <br/>Talent Acquisition Analytics</div>
              </div>
            </div>
          </div>

          {/* Image Side with Luxury Arched Mask */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[0_200px_0_200px] overflow-hidden shadow-lux group">
              <img 
                src="/images/jean-lanctot.jpg" 
                alt="Jean Lanctot — Leadership & Philosophy" 
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
