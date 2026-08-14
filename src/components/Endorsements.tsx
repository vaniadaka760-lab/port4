import { motion } from "motion/react";

export function Endorsements() {
  // Paraphrased from colleague recommendations — replace with exact
  // wording only once you have confirmed reuse permission from each person.
  const testimonials = [
    {
      text: "Jean brings genuine passion and sharp business instincts to every recruiting engagement, with a real impact on company culture.",
      author: "Andy Cheren",
      role: "Colleague, Twitch",
    },
    {
      text: "Jean has a gift for understanding what makes each team member strong, and for guiding people through ambiguity with clarity.",
      author: "Christina Ferrante",
      role: "Direct Report, Twitch",
    }
  ];

  return (
    <section id="recommendations" className="bg-brand-surface py-40 overflow-hidden border-y border-brand-primary/5">
      <div className="container-gr">
        <div className="section-label justify-center">COLLEAGUE ENDORSEMENTS</div>
        
        <div className="space-y-40 mt-32">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto text-center"
            >
              <blockquote className="text-4xl md:text-6xl font-display italic font-light text-brand-primary leading-[1.1] mb-12 tracking-tight">
                "{t.text}"
              </blockquote>
              <div className="flex flex-col items-center gap-4">
                <div className="h-px w-20 bg-brand-accent/40 mb-2"></div>
                <div className="font-display font-bold text-2xl text-brand-primary tracking-tight">
                   {t.author}
                </div>
                <div className="font-mono text-[14px] uppercase tracking-[0.2em] text-brand-muted font-bold">
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
