import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export function Training() {
  return (
    <section id="training" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-gr relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center">ACADEMIC FOUNDATION</div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-primary leading-tight">
            Education & <span className="italic font-bold text-brand-accent">Qualifications</span>
          </h2>
          <p className="font-sans text-brand-muted text-base mt-4">
            Combining business information systems degree with executive test automation strategy and technical leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo & Spotlight Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-brand-surface rounded-2xl overflow-hidden border border-brand-primary/10 shadow-premium group">
              <img 
                src="/images/KenHill.jpg" 
                alt="Ken Hill - Education" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/90 backdrop-blur-md rounded-full text-white text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
                  <GraduationCap size={14} /> Bachelor of Science
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-primary">Ken Hill</h3>
                <p className="text-sm font-sans text-brand-muted">Business Information Systems</p>
              </div>
            </div>
          </div>

          {/* Right Column: Education Card */}
          <div className="lg:col-span-7 space-y-8">
            {/* University of Phoenix */}
            <div className="p-8 bg-brand-surface rounded-2xl border border-brand-primary/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-brand-accent"></div>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 p-2 bg-white rounded-xl border border-brand-primary/10 shrink-0 flex items-center justify-center">
                  <img src="/images/UOP.png" alt="University of Phoenix" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase">Bachelor of Science (B.S.)</div>
                  <h3 className="text-2xl font-bold text-brand-primary">University of Phoenix</h3>
                  <p className="font-display italic text-brand-muted text-lg">Business Information Systems</p>
                  <p className="font-mono text-xs text-brand-muted/70 pt-1">Phoenix, AZ</p>
                </div>
              </div>
            </div>

            {/* Certifications & Leadership */}
            <div className="p-8 bg-white rounded-2xl text-brand-primary shadow-sm border border-brand-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Award size={20} className="text-brand-accent" />
                <h4 className="font-accent text-[11px] font-bold tracking-[0.2em] uppercase opacity-80">
                  Leadership & Technical Highlights
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Enterprise QA Architecture</div>
                    <div className="text-xs text-brand-muted">Scalable Framework Design</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">CI/CD & DevOps Strategy</div>
                    <div className="text-xs text-brand-muted">Automated Pipeline Integration</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Employee of the Year Award</div>
                    <div className="text-xs text-brand-muted">Choice Hotels International</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Technical Mentorship</div>
                    <div className="text-xs text-brand-muted">Architect & Engineer Talent Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

