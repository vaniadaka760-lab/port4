import { ArrowUpRight, Cpu, HeartPulse, Radio, Shield, ShoppingBag, Landmark } from "lucide-react";

export function Initiatives() {
  const industries = [
    {
      id: "01",
      title: "Technology",
      desc: "Driving digital innovation and transformation initiatives to boost organizational growth and performance.",
      metric: "Digital Transformation & Innovation",
      icon: Cpu
    },
    {
      id: "02",
      title: "Healthcare",
      desc: "Implementing technology solutions to improve patient care and streamline operations for leaders like Humana.",
      metric: "Healthcare IT & Compliance",
      icon: HeartPulse
    },
    {
      id: "03",
      title: "Telecommunications",
      desc: "Managing complex network systems, ensuring seamless data transmission and high-quality communication services.",
      metric: "Verizon & Frontier Communications",
      icon: Radio
    },
    {
      id: "04",
      title: "Banking & Finance",
      desc: "End-to-end management of large-scale financial applications, tollgate reviews, and risk control for Bank of America.",
      metric: "Financial Systems & Risk Control",
      icon: Landmark
    },
    {
      id: "05",
      title: "Insurance & Security",
      desc: "EPMO leadership for policy, rating, billing, compliance, and cybersecurity integrations at Kemper & McAfee.",
      metric: "EPMO & Regulatory Compliance",
      icon: Shield
    },
    {
      id: "06",
      title: "Retail & Commerce",
      desc: "Web, digital technology, and concept rollouts delivering seamless customer experiences for Neiman Marcus & Blockbuster.",
      metric: "Digital Retail & Customer Experience",
      icon: ShoppingBag
    }
  ];

  return (
    <section id="initiatives" className="py-32 bg-brand-bg border-b border-brand-primary/5">
      <div className="container-gr">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end text-center lg:text-left mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="section-label justify-center lg:justify-start">SECTOR VERSATILITY</div>
            <h2 className="text-5xl md:text-7xl font-display font-light text-brand-primary tracking-tighter leading-none mb-6">
              Industry <br />
              <span className="italic font-bold text-brand-accent">Experience.</span>
            </h2>
          </div>
          <p className="text-xl text-brand-muted max-w-md mx-auto lg:ml-0 font-display italic leading-relaxed mb-4">
            Proven project management success across Technology, Healthcare, Telecommunications, Banking, Insurance, and Retail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-surface p-10 rounded-2xl border border-brand-primary/10 relative overflow-hidden flex flex-col justify-between h-[360px] hover:border-brand-accent/50 hover:shadow-lg transition-all duration-500 group"
            >
              <div className="flex justify-between items-start">
                <item.icon className="w-10 h-10 text-brand-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="font-mono text-xs font-bold tracking-widest text-brand-primary/40 uppercase">#{item.id}</span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-brand-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-primary/10 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                  {item.metric}
                </span>
                <ArrowUpRight size={16} className="text-brand-primary/40 group-hover:text-brand-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
