import { Menu, X, ArrowDown } from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Skillset", href: "#skills" },
    { name: "Qualifications", href: "#training" },
    { name: "Experience", href: "#experience" },
    { name: "Timeline", href: "#timeline" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Compensation for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 flex items-center nav-transition-effect ${scrolled
          ? "nav-scrolled-style"
          : "nav-default-style"
        }`}>
        <div className="container-gr flex justify-between items-center w-full relative z-[70]">
          <div className="flex items-center shrink-0">
            <a
              href="#"
              onClick={(e) => handleScrollToSection(e, "#")}
              className="font-display text-2xl font-light tracking-tighter group transition-colors duration-500 text-brand-primary"
            >
              LISA <span className="font-bold italic text-brand-accent group-hover:text-brand-primary transition-colors">SEIGNEUR.</span>
            </a>
          </div>

          <div className="hidden lg:flex gap-5 xl:gap-7 items-center flex-nowrap justify-end">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className={`font-sans text-[11px] xl:text-xs font-bold tracking-[0.15em] xl:tracking-[0.2em] uppercase transition-colors duration-300 relative group text-brand-primary/80 hover:text-brand-accent`}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#resume"
              onClick={(e) => handleScrollToSection(e, "#resume")}
              className="font-sans text-[11px] xl:text-xs font-bold tracking-[0.15em] xl:tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-1 text-brand-accent hover:text-brand-primary"
            >
              <ArrowDown size={13} className="text-brand-accent stroke-[2.5]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
              className="ml-2 font-display italic text-sm font-medium px-5 py-1.5 border border-brand-accent/60 text-brand-primary hover:bg-brand-accent hover:text-white transition-all duration-300 rounded-sm"
            >
              Inquire.
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-brand-primary relative z-[75]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Sibling to nav to prevent fixed containing block issues */}
      <div
        className={`lg:hidden fixed inset-0 bg-brand-bg z-[60] px-6 sm:px-10 py-6 flex flex-col transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Top Spacer representing header level */}
        <div className="flex justify-between items-center h-16 w-full mb-8">
          <a
            href="#"
            onClick={(e) => handleScrollToSection(e, "#")}
            className="font-display text-2xl font-light tracking-tighter text-brand-primary"
          >
            LISA <span className="font-bold italic text-brand-accent">SEIGNEUR.</span>
          </a>
          <button
            className="p-2 text-brand-primary cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Scrollable contents inside mobile menu */}
        <div className="flex-1 flex flex-col justify-center items-center py-4 overflow-y-auto">
          <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="text-3xl sm:text-5xl font-display italic font-light text-brand-primary hover:text-brand-accent transition-all duration-500"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span className="text-xs font-mono tracking-widest text-brand-accent mr-4 opacity-60">/0{idx + 1}</span>
                {item.name}
              </a>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 border-t border-brand-primary/10 pt-8 w-full max-w-xs flex flex-col items-center text-center gap-6">
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
              className="btn-accent w-full text-center"
            >
              Inquire.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
