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
            Combining a Bachelor of Arts degree with executive PMP and CSM credentials in project management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Photo & Spotlight Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-brand-surface rounded-2xl overflow-hidden border border-brand-primary/10 shadow-premium group">
              <img 
                src="/images/Laura_Snider.jpg" 
                alt="Laura Snider - Qualifications" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/90 backdrop-blur-md rounded-full text-white text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
                  <GraduationCap size={14} /> Bachelor of Arts
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-primary">Laura Snider</h3>
                <p className="text-sm font-sans text-brand-muted">University of Science and Arts of Oklahoma</p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certifications Cards */}
          <div className="lg:col-span-7 space-y-8">
            {/* University of Science and Arts of Oklahoma */}
            <div className="p-8 bg-brand-surface rounded-2xl border border-brand-primary/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-brand-accent"></div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 p-3 bg-brand-primary text-brand-bg rounded-xl shrink-0 flex items-center justify-center font-display font-black text-xl">
                  USAO
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase">Bachelor of Arts (B.A.) • Obtained 1993</div>
                  <h3 className="text-2xl font-bold text-brand-primary">University of Science and Arts of Oklahoma</h3>
                  <p className="font-display italic text-brand-muted text-lg">Bachelor of Arts Degree</p>
                  <p className="font-mono text-xs text-brand-muted/70 pt-1">Chickasha, OK</p>
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* PMP */}
              <div className="p-6 bg-white rounded-2xl text-brand-primary shadow-sm border border-brand-primary/10 flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3">
                  <Award size={24} className="text-brand-accent shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] font-bold tracking-widest text-brand-accent uppercase">PMI Certified</span>
                    <h4 className="font-display font-bold text-lg leading-tight">Project Management Professional (PMP)</h4>
                  </div>
                </div>
                <div className="border-t border-brand-primary/10 pt-3 font-mono text-xs text-brand-muted space-y-1">
                  <div className="flex justify-between"><span>Cert #:</span><span className="font-bold text-brand-primary">16436</span></div>
                  <div className="flex justify-between"><span>Status:</span><span className="font-bold text-emerald-600">In Good Standing</span></div>
                  <div className="flex justify-between"><span>Obtained:</span><span className="font-bold text-brand-primary">1999</span></div>
                </div>
              </div>

              {/* CSM */}
              <div className="p-6 bg-white rounded-2xl text-brand-primary shadow-sm border border-brand-primary/10 flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={24} className="text-brand-accent shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] font-bold tracking-widest text-brand-accent uppercase">Scrum Alliance</span>
                    <h4 className="font-display font-bold text-lg leading-tight">Certified ScrumMaster (CSM)</h4>
                  </div>
                </div>
                <div className="border-t border-brand-primary/10 pt-3 font-mono text-xs text-brand-muted space-y-1">
                  <div className="flex justify-between"><span>Cert #:</span><span className="font-bold text-brand-primary">00100639</span></div>
                  <div className="flex justify-between"><span>Status:</span><span className="font-bold text-emerald-600">In Good Standing</span></div>
                  <div className="flex justify-between"><span>Obtained:</span><span className="font-bold text-brand-primary">2019</span></div>
                </div>
              </div>
            </div>

            {/* Highlights Box */}
            <div className="p-6 bg-brand-surface rounded-2xl text-brand-primary border border-brand-primary/10">
              <h4 className="font-mono text-[11px] font-bold tracking-widest uppercase text-brand-accent mb-4">
                Key Professional Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-brand-primary/80">
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> Onshore & Offshore Team Leadership</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> ServiceNow Budget & ROI Management</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> Agile Scrum, ADO & JIRA Workflows</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> Healthcare IT & Telecom Enterprise Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

