import { motion } from "motion/react";

export function Snapshot() {
  const stats = [
    { value: "400+", label: "Support Staff Led", context: "Uber North America Driver Operations", color: "text-brand-accent" },
    { value: "$400M", label: "Regional Revenue", context: "Samsung Electronics Field Operations Growth", color: "text-brand-azure" },
    { value: "100+", label: "Stores Launched", context: "Microsoft & Apple National DTC Expansion", color: "text-brand-vermillion" },
    { value: "PMP®", label: "PMI Certified", context: "Project Management Professional Credentials", color: "text-brand-orchid" },
  ];

  return (
    <section className="bg-brand-surface border-y border-brand-primary/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-y md:divide-y-0 divide-brand-primary/5">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-12 lg:p-16 hover:bg-brand-primary group transition-premium cursor-default"
          >
            <div className="flex flex-col items-center justify-center text-center h-full transition-transform duration-700 group-hover:scale-105">
              <div className={`text-6xl xl:text-8xl font-display font-black ${stat.color} group-hover:text-brand-bg transition-premium mb-6 tracking-tighter`}>
                {stat.value}
              </div>
              <div className="space-y-2">
                <h4 className="text-base md:text-lg font-black text-brand-primary group-hover:text-brand-bg transition-colors uppercase tracking-widest font-sans">
                  {stat.label}
                </h4>
                <p className="text-sm md:text-base text-brand-muted group-hover:text-brand-bg/60 transition-colors font-display italic">
                  {stat.context}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
