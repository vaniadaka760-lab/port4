import { GraduationCap, Award, CheckCircle2, ShieldCheck } from "lucide-react";

export function Training() {
  return (
    <section id="training" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-gr relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center">ACADEMIC FOUNDATION & CREDENTIALS</div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-primary leading-tight">
            Education & <span className="italic font-bold text-brand-accent">Certifications</span>
          </h2>
          <p className="font-sans text-brand-muted text-base mt-4">
            Combining a Business Administration degree from Augustana College with PMP® credentials from the Project Management Institute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Photo & Spotlight Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-brand-surface rounded-2xl overflow-hidden border border-brand-primary/10 shadow-premium group">
              <img 
                src="/images/Lisa_Seigneur.png" 
                alt="Lisa Seigneur - Education" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/90 backdrop-blur-md rounded-full text-white text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
                  <GraduationCap size={14} /> B.A. Business Administration
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-primary">Lisa Seigneur</h3>
                <p className="text-sm font-sans text-brand-muted">Augustana College • PMP® Certified</p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certifications Cards */}
          <div className="lg:col-span-7 space-y-8">
            {/* Augustana College */}
            <div className="p-8 bg-brand-surface rounded-2xl border border-brand-primary/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-brand-accent"></div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 p-3 bg-brand-primary text-brand-bg rounded-xl shrink-0 flex items-center justify-center font-display font-black text-xl">
                  AUG
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase">B.A. Business Administration & Management • 2010</div>
                  <h3 className="text-2xl font-bold text-brand-primary">Augustana College</h3>
                  <p className="font-display italic text-brand-muted text-lg">Business Administration & Management</p>
                  <p className="font-mono text-xs text-brand-muted/70 pt-1">Rock Island, IL</p>
                </div>
              </div>
            </div>

            {/* PMP Certification Card */}
            <div className="p-8 bg-white rounded-2xl text-brand-primary shadow-sm border border-brand-primary/10 flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-4">
                <Award size={32} className="text-brand-accent shrink-0" />
                <div>
                  <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase">Project Management Institute</span>
                  <h4 className="font-display font-bold text-2xl leading-tight">Project Management Professional (PMP)®</h4>
                </div>
              </div>
              <div className="border-t border-brand-primary/10 pt-4 font-mono text-xs text-brand-muted flex flex-wrap justify-between gap-4">
                <div>Issued: <span className="font-bold text-brand-primary">Jun 2024</span></div>
                <div>Expires: <span className="font-bold text-brand-primary">Jun 2027</span></div>
                <div>Verification: <span className="font-bold text-emerald-600">Credly Verified</span></div>
              </div>
            </div>

            {/* Civic & MBE/WBE Certifications Box */}
            <div className="p-6 bg-brand-surface rounded-2xl text-brand-primary border border-brand-primary/10">
              <h4 className="font-mono text-[11px] font-bold tracking-widest uppercase text-brand-accent mb-4">
                Civic Recognition & Distinctions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-brand-primary/80">
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> Minority & Women’s Business Enterprise (MBE/WBE) - City of Chicago</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> 2023 Chicago Municipal Election Police District Council Candidate</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> CAPS Program 1832 Beat Facilitator & CPD Advisory Council</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> Published Author ("Dating for Marriage") & Executive Relationship Coach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

