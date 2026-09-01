export function Vision() {
  return (
    <section id="philosophy" className="overflow-hidden bg-brand-bg relative py-20 lg:py-32">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Narrative Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="section-label lg:justify-start">STRATEGIC PROJECT GOVERNANCE</div>
            <h2 className="text-5xl md:text-7xl font-display font-light text-brand-primary tracking-tighter leading-[0.9] mb-12">
              Translating Corporate Directives into <span className="italic font-bold text-brand-accent">Global Action.</span>
            </h2>
            
            <div className="space-y-8 text-xl text-brand-muted font-display italic leading-relaxed mb-16 max-w-xl">
              <p>
                "Laura skillfully communicates with C-level stakeholders, translating corporate directives into actionable plans for global teams."
              </p>
              <p className="not-italic text-base font-sans text-brand-muted/80 leading-relaxed">
                Her comprehensive approach guarantees enterprise projects stay strictly aligned with strategic corporate goals while maximizing ROI, resource efficiency, and cross-functional team productivity across both Agile and Waterfall delivery models.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 pt-12 border-t border-brand-primary/10">
              <div className="space-y-2">
                <div className="font-mono text-[9px] uppercase tracking-widest text-brand-accent font-bold">Academic Foundation</div>
                <div className="text-xs font-bold text-brand-primary font-sans tracking-widest uppercase">BACHELOR OF ARTS (B.A.) <br/>UNIVERSITY OF SCIENCE & ARTS OF OKLAHOMA</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-[9px] uppercase tracking-widest text-brand-accent font-bold">Professional Credentials</div>
                <div className="text-xs font-bold text-brand-primary font-sans tracking-widest uppercase">PMI Certified PMP (#16436) <br/>Certified ScrumMaster (#00100639)</div>
              </div>
            </div>
          </div>

          {/* Image Side with Luxury Arched Mask */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[0_200px_0_200px] overflow-hidden shadow-lux group">
              <img 
                src="/images/Laura_Snider.jpg" 
                alt="Laura Snider — Strategic Project Leadership" 
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
