import { motion } from "motion/react";

export function Endorsements() {
  const testimonials = [
    {
      text: "I had the privilege of working with Ken during his time as Senior IT Architect Lead, where he demonstrated an ideal balance between technical expertise and leadership. Leading a team of four architects, Ken played a pivotal role in delivering the test strategy we had in place. His 'can do' attitude and ability to inspire trust made him a key contributor to our team's success.",
      author: "Prior Leader",
      role: "CSAA Leadership",
    },
    {
      text: "I had the pleasure to work alongside Ken for two years as he led our team of architects in QA. His technical skill sets are top notch along with his ability to translate them into documentable processes. We accomplished so much together and enabled automation marketplace assets for our QA engineers across value stream teams.",
      author: "QA Peer",
      role: "Enterprise QA Architecture Team",
    },
    {
      text: "Ken is not only deeply knowledgeable in his field but also a genuinely trusting and supportive leader. Ken has a remarkable ability to foster an environment where creativity can flourish. He encourages his team to explore various approaches, leading to innovative solutions and a dynamic work culture.",
      author: "Senior IT Peer",
      role: "Collaborative Leadership",
    },
    {
      text: "It was an absolute pleasure to work with Ken on the CSAA project. As a Lead Test Automation Architect, he brought exceptional technical expertise and leadership to the table. Ken consistently delivered innovative solutions to complex challenges, streamlining test automation processes.",
      author: "Team Member",
      role: "CSAA Project Team",
    },
    {
      text: "It was a pleasure to work with Ken for 4+ years. He is an amazing architect and a dedicated worker who is always available to help and mentor the team. His guidance in building the test framework has been invaluable.",
      author: "Team Member",
      role: "CSAA QA Automation Team",
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
