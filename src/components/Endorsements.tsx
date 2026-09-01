import { motion } from "motion/react";

export function Endorsements() {
  const testimonials = [
    {
      text: "Laura Snider excels as a Project Manager, effectively leading both business and IT teams onshore and offshore. She possesses the acumen to manage complex projects and ensure their timely completion.",
      author: "Executive Leadership",
      role: "Enterprise PMO Partner",
    },
    {
      text: "Her ability to navigate diverse team dynamics and maintain seamless collaboration across various locations speaks to her exceptional leadership and organizational skills.",
      author: "Global IT Director",
      role: "Cross-Functional Collaboration",
    },
    {
      text: "Laura is described as an empathetic leader, trusted by her teams and executive level management. She holds herself to a higher standard and empowers everyone around her.",
      author: "Senior Business Stakeholder",
      role: "Executive Alignment",
    },
    {
      text: "She skillfully communicates with C-level stakeholders, translating corporate directives into actionable plans for global teams while managing $1B+ budgets with precision.",
      author: "Program Sponsor",
      role: "Strategic Delivery",
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
