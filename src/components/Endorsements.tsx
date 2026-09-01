import { motion } from "motion/react";

export function Endorsements() {
  const endorsements = [
    {
      quote: "Lisa brought strong skill sets in strategic planning, organizing, selling, managing and motivating her store staff. Her enthusiasm and willingness to jump in and support her team were amazing. Her involvement in corporate philanthropic programs and STEM events helped us exceed participation goals year over year.",
      author: "Mary Monroy-Spampinato",
      role: "Former Microsoft Project Manager & Community Engagement Leader",
    },
    {
      quote: "Lisa has an infectious passion for people and the customer experience. She’s a true go-to-market expert who ties together product deployment, marketing, and field teams with exceptional capital efficiency.",
      author: "Michael Forrest",
      role: "CEO & SVP, Retail & Brand Growth Expert",
    },
    {
      quote: "Lisa exemplified strong leadership with infectious positive energy. She motivated and inspired teams to innovate on behalf of customers, while developing reliable leaders from within.",
      author: "Lisa Wilson",
      role: "Senior Program Manager, Prime Video",
    },
    {
      quote: "Lisa unlocks potential in those around her. Her ability to infuse energy into even mundane tasks is truly special. I’d jump at the chance to work with her again.",
      author: "Josh Imhoff",
      role: "General Manager, Amazon & Spotify",
    }
  ];

  return (
    <section id="recommendations" className="bg-brand-surface py-32 overflow-hidden border-y border-brand-primary/5">
      <div className="container-gr">
        <div className="section-label justify-center mb-16">RECOMMENDATIONS & ENDORSEMENTS</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-brand-bg border border-brand-primary/10 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <blockquote className="text-lg md:text-xl font-display italic font-light text-brand-primary leading-relaxed mb-8">
                "{t.text}"
              </blockquote>
              <div className="flex flex-col gap-1 border-t border-brand-primary/10 pt-6">
                <div className="font-display font-bold text-lg text-brand-accent tracking-tight">
                   {t.author}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-brand-muted font-semibold">
                   {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
