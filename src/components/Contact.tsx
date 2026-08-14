import { motion } from "motion/react";
import { Mail, Phone, ArrowRight } from "lucide-react";

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
                <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-brand-accent font-bold mb-10">LET'S TALK TALENT</div>
                <h2 className="text-6xl md:text-[80px] lg:text-[100px] font-display font-light leading-[0.88] tracking-tighter mb-12">
                   Let's build <br />
                   <span className="italic font-bold text-brand-accent">your team.</span>
                </h2>
                <p className="text-xl md:text-2xl font-display italic text-brand-bg/60 leading-relaxed max-w-sm mx-auto lg:ml-0 mb-16">
                   Available for talent acquisition leadership, recruiting strategy consulting, and team-building engagements.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6">
                   <div className="h-px w-20 bg-brand-accent"></div>
                   <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent">Inquire Directly</span>
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
               className="space-y-16 w-full"
             >
                <div className="space-y-12">
                   {/* TODO: replace with Jean's real contact email */}
                   <a href="mailto:hello@jeanlanctot.com" className="group flex flex-col items-center lg:items-start gap-2">
                      <div className="font-mono text-[11px] uppercase tracking-widest text-brand-muted mb-2">Electronic Mail</div>
                      <div className="text-3xl md:text-4xl font-display font-bold text-brand-primary group-hover:text-brand-accent transition-colors flex items-center justify-center lg:justify-start gap-4">
                         hello@jeanlanctot.com
                         <ArrowRight className="hidden md:block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={24} />
                      </div>
                   </a>
                   
                   {/* TODO: replace with Jean's real phone number, or remove this block */}
                   <a href="https://www.linkedin.com/in/jeanlanctot/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center lg:items-start gap-2">
                      <div className="font-mono text-[11px] uppercase tracking-widest text-brand-muted mb-2">LinkedIn</div>
                      <div className="text-3xl md:text-4xl font-display font-bold text-brand-primary group-hover:text-brand-accent transition-colors flex items-center justify-center lg:justify-start gap-4">
                         /in/jeanlanctot
                         <ArrowRight className="hidden md:block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={24} />
                      </div>
                   </a>
                </div>

                <div className="pt-12 border-t border-brand-primary/5 w-full">
                   <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-10">
                      <div className="flex flex-col items-center lg:items-start">
                         <div className="font-mono text-[11px] uppercase tracking-widest text-brand-muted mb-4">Location</div>
                         {/* TODO: confirm Jean's current city */}
                         <div className="text-sm font-bold font-sans tracking-widest">PACIFIC NORTHWEST</div>
                      </div>
                      <div className="flex flex-col items-center lg:items-start">
                         <div className="font-mono text-[11px] uppercase tracking-widest text-brand-muted mb-4">Timezone</div>
                         <div className="text-sm font-bold font-sans tracking-widest">PST / GMT-8</div>
                      </div>
                   </div>
                </div>
                
                <button className="btn-accent w-full py-8 text-xs tracking-[0.4em]">
                   Start Conversation
                </button>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
