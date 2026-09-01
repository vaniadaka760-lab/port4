import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-32 bg-brand-bg text-brand-primary border-t border-brand-primary/5">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left gap-24 mb-32">
          <div className="max-w-md flex flex-col items-center lg:items-start">
            <div className="font-display text-4xl font-light tracking-tighter text-brand-primary mb-10 text-center lg:text-left">
              LAURA <span className="font-bold italic text-brand-accent">SNIDER.</span>
            </div>
            <p className="text-xl text-brand-muted font-display italic leading-relaxed text-center lg:text-left">
              Project Manager & Program Manager driving enterprise software project delivery, ServiceNow budget control, and onshore/offshore team excellence.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-16 w-full text-center lg:text-left">
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <div className="section-label justify-center lg:justify-start mb-8">NAVIGATION</div>
              <ul className="space-y-4">
                {[
                  { name: "About", href: "#about" },
                  { name: "Leadership", href: "#leadership" },
                  { name: "Skills", href: "#skills" },
                  { name: "Education & Certs", href: "#training" },
                  { name: "Industry Experience", href: "#initiatives" },
                  { name: "Experience", href: "#experience" },
                  { name: "Timeline", href: "#timeline" },
                  { name: "Recommendations", href: "#recommendations" },
                  { name: "Contact", href: "#contact" },
                ].map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm font-bold font-sans tracking-widest uppercase hover:text-brand-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <div className="section-label justify-center lg:justify-start mb-8">CONNECT</div>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.linkedin.com/in/laura-snider/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold font-sans tracking-widest uppercase hover:text-brand-accent transition-colors flex items-center gap-2">
                    <Linkedin size={16} /> LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <div className="section-label justify-center lg:justify-start mb-8">CREDENTIALS</div>
              <div className="space-y-2">
                 <div className="text-[11px] font-mono font-bold uppercase text-brand-muted tracking-widest">PMP Certification</div>
                 <div className="text-sm font-bold font-sans tracking-wider leading-relaxed">
                   PMI Certified #16436 (In Good Standing)
                 </div>
              </div>
              <div className="space-y-2 pt-4">
                 <div className="text-[11px] font-mono font-bold uppercase text-brand-muted tracking-widest">Scrum Certification</div>
                 <div className="text-sm font-bold font-sans tracking-widest uppercase">Certified ScrumMaster #00100639</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-brand-muted">
            © 2026 LAURA SNIDER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
             <a href="https://www.linkedin.com/in/laura-snider/" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
