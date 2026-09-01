export function Vision() {
  return (
    <section id="philosophy" className="overflow-hidden bg-brand-bg relative py-20 lg:py-32">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Narrative Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="section-label lg:justify-start">EXECUTIVE LEADERSHIP & GOVERNANCE</div>
            <h2 className="text-5xl md:text-7xl font-display font-light text-brand-primary tracking-tighter leading-[0.9] mb-12">
              Translating Vision into <span className="italic font-bold text-brand-accent">Measurable Impact.</span>
            </h2>
            
            <div className="space-y-8 text-xl text-brand-muted font-display italic leading-relaxed mb-16 max-w-xl">
              <p>
                "Lisa exempliﬁes excellence in project management and operational leadership by defining execution requirements, building standards of work, and aligning entire organizations."
              </p>
              <p className="not-italic text-base font-sans text-brand-muted/80 leading-relaxed">
                Her comprehensive leadership approach guarantees enterprise initiatives stay strictly aligned with strategic goals while maximizing capital efficiency, stakeholder trust, and team morale across tech, real estate, and civic sectors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 pt-12 border-t border-brand-primary/10">
              <div className="space-y-2">
                <div className="font-mono text-[9px] uppercase tracking-widest text-brand-accent font-bold">Academic Foundation</div>
                <div className="text-xs font-bold text-brand-primary font-sans tracking-widest uppercase">BACHELOR OF ARTS (B.A.) <br/>AUGUSTANA COLLEGE (2010)</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-[9px] uppercase tracking-widest text-brand-accent font-bold">Professional Credentials</div>
                <div className="text-xs font-bold text-brand-primary font-sans tracking-widest uppercase">PROJECT MANAGEMENT PROFESSIONAL (PMP®) <br/>MBE/WBE CERTIFIED (CITY OF CHICAGO)</div>
              </div>
            </div>
          </div>

          {/* Image Side with Luxury Arched Mask */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[0_200px_0_200px] overflow-hidden shadow-lux group">
              <img 
                src="/images/Lisa_Seigneur.png" 
                alt="Lisa Seigneur — Executive Leadership" 
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
