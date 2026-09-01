import { motion } from "motion/react";
import { Mail, Phone, ArrowRight, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-brand-bg relative pt-0 lg:pt-40 pb-0 lg:pb-16">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row items-stretch border border-brand-primary/10">
          {/* Headline Pane */}
          <div className="lg:w-1/2 p-10 md:p-16 lg:p-32 bg-brand-primary text-brand-bg flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
                <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-brand-accent font-bold mb-10">CONNECT & COLLABORATE</div>
                <h2 className="text-6xl md:text-[80px] lg:text-[100px] font-display font-light leading-[0.88] tracking-tighter mb-12">
                   Let's build <br />
                   <span className="italic font-bold text-brand-accent">success together.</span>
                </h2>
                <p className="text-xl md:text-2xl font-display italic text-brand-bg/60 leading-relaxed max-w-sm mx-auto lg:ml-0 mb-16">
                   Available for executive Project Management, Program Management, and IT Advisory consulting opportunities.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6">
                   <div className="h-px w-20 bg-brand-accent"></div>
                   <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent">Direct Contact</span>
                </div>
             </motion.div>
          </div>

          {/* Action Pane */}
          <div className="lg:w-1/2 p-10 md:p-16 lg:p-32 bg-brand-bg flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
               className="space-y-12 w-full"
             >
                <div className="space-y-8">
                   <a href="https://www.linkedin.com/in/laura-snider/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center lg:items-start gap-2">
                      <div className="font-mono text-[11px] uppercase tracking-widest text-brand-muted mb-2">LinkedIn Network</div>
                      <div className="text-2xl md:text-3xl font-display font-bold text-brand-primary group-hover:text-brand-accent transition-colors flex items-center justify-center lg:justify-start gap-4">
                         /in/laura-snider/
                         <ArrowRight className="hidden md:block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={24} />
                      </div>
                   </a>

                   {/* Interactive Contact Form */}
                   <form className="space-y-4 pt-4 text-left border-t border-brand-primary/10" onSubmit={(e) => e.preventDefault()}>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-brand-accent font-bold mb-2">Send Direct Message</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full px-4 py-3 bg-brand-surface border border-brand-primary/10 rounded-md text-sm focus:outline-hidden focus:border-brand-accent text-brand-primary" 
                         />
                         <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full px-4 py-3 bg-brand-surface border border-brand-primary/10 rounded-md text-sm focus:outline-hidden focus:border-brand-accent text-brand-primary" 
                         />
                      </div>
                      <textarea 
                         rows={4} 
                         placeholder="Project Details or Inquiry..." 
                         className="w-full px-4 py-3 bg-brand-surface border border-brand-primary/10 rounded-md text-sm focus:outline-hidden focus:border-brand-accent text-brand-primary"
                      ></textarea>
                      <button type="submit" className="btn-accent w-full py-4 text-xs tracking-[0.3em] font-mono uppercase font-bold">
                         Submit Inquiry
                      </button>
                      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a 
                          href="https://www.linkedin.com/in/lisaseigneur/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-accent px-8 py-4 text-sm tracking-widest font-bold uppercase flex items-center gap-3"
                        >
                          <Linkedin size={18} /> Connect on LinkedIn
                        </a>
                      </div>
                   </form>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
