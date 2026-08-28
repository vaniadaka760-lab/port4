import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-32 bg-brand-bg text-brand-primary border-t border-brand-primary/5">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left gap-24 mb-32">
          <div className="max-w-md flex flex-col items-center lg:items-start">
            <div className="font-display text-4xl font-light tracking-tighter text-brand-primary mb-10 text-center lg:text-left">
              KEN <span className="font-bold italic text-brand-accent">HILL.</span>
            </div>
            <p className="text-xl text-brand-muted font-display italic leading-relaxed text-center lg:text-left">
              IT Quality Assurance Leader and Senior QA Architect driving quality transformation, enterprise strategy, and scalable test automation teams.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-16 w-full text-center lg:text-left">
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <div className="section-label justify-center lg:justify-start mb-8">NAVIGATION</div>
              <ul className="space-y-4">
                {[
                  { name: "About", href: "#about" },
                  { name: "Education", href: "#training" },
                  { name: "Initiatives", href: "#initiatives" },
                  { name: "Principles", href: "#leadership" },
                  { name: "Distinctions", href: "#distinctions" },
                  { name: "Experience", href: "#experience" },
                  { name: "Timeline", href: "#timeline" },
                  { name: "Recommendations", href: "#recommendations" },
                  { name: "Resume", href: "#resume" },
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
                  <a href="https://www.linkedin.com/in/ken-hill-4-qa-architecture" target="_blank" rel="noopener noreferrer" className="text-sm font-bold font-sans tracking-widest uppercase hover:text-brand-accent transition-colors">
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a href="/images/Ken_Hill_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-bold font-sans tracking-widest uppercase hover:text-brand-accent transition-colors">
                    Download Resume PDF
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <div className="section-label justify-center lg:justify-start mb-8">CONTACT & LOCATION</div>
              <div className="space-y-2">
                 <div className="text-[11px] font-mono font-bold uppercase text-brand-muted tracking-widest">Location</div>
                 <div className="text-sm font-bold font-sans tracking-wider leading-relaxed">
                   Phoenix / Glendale, Arizona, United States
                 </div>
              </div>
              <div className="space-y-2 pt-4">
                 <div className="text-[11px] font-mono font-bold uppercase text-brand-muted tracking-widest">Availability</div>
                 <div className="text-sm font-bold font-sans tracking-widest uppercase">Executive QA Leadership</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-brand-muted">
            © 2026 KEN HILL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
             <a href="https://www.linkedin.com/in/ken-hill-4-qa-architecture" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
