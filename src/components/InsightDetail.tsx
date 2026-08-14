import React from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const insightsData: Record<string, {
  pub: string;
  title: string;
  date: string;
  type: string;
  image: string;
  quote: string;
  readTime: string;
  author: string;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
}> = {
  "0": {
    pub: "SHRM Feature",
    title: "Why Inclusive Recruiting Is a Growth Strategy, Not a Checkbox.",
    date: "Spring 2025",
    type: "Executive Feature",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    quote: "Inclusive hiring isn't a compliance exercise — it's a direct input into how well a team can innovate.",
    readTime: "6 min read",
    author: "Jean Lanctot",
    summary: "As global companies compete for scarce technical and leadership talent, the organizations winning that competition are the ones treating inclusion as a core recruiting discipline rather than an afterthought.",
    sections: [
      {
        heading: "1. Diversity of Perspective Drives Better Hiring Decisions",
        paragraphs: [
          "For years, recruiting functions have treated diversity, equity, and inclusion as a downstream reporting metric — something to measure after the hiring is done. That framing gets the causality backwards.",
          "When hiring panels reflect a genuinely broad set of backgrounds and experiences, the quality of the questions asked in interviews improves, blind spots shrink, and the resulting slate of candidates is stronger across the board."
        ]
      },
      {
        heading: "2. Building Recruiting Teams That Reflect the Markets They Serve",
        paragraphs: [
          "Global organizations recruiting across the U.S., EMEA, and APAC face a structural challenge: a single, homogenous recruiting playbook rarely translates well across regions and cultures.",
          "The strongest global talent functions invest early in region-specific sourcing relationships and local hiring expertise, rather than exporting a headquarters-centric process and hoping it scales."
        ]
      },
      {
        heading: "3. Accessibility as a Recruiting Discipline",
        paragraphs: [
          "Accessibility is frequently treated as a workplace accommodation issue rather than a recruiting one, but the two are deeply connected. Job postings, interview formats, and assessment tools all carry implicit assumptions about who can participate easily.",
          "Employee resource groups focused on disability inclusion are one of the most effective ways to surface these gaps early, long before a candidate ever encounters them."
        ]
      }
    ]
  },
  "1": {
    pub: "TA Weekly",
    title: "Scaling a Global Recruiting Team Without Losing Its Culture.",
    date: "Winter 2025",
    type: "Industry Insights",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    quote: "The hardest part of scaling a recruiting org isn't the headcount — it's protecting the culture that made the small team effective in the first place.",
    readTime: "8 min read",
    author: "Jean Lanctot",
    summary: "A look at what it actually takes to grow a recruiting function from a tight-knit team into a 20-plus person global organization without sacrificing the collaborative culture that made it work.",
    sections: [
      {
        heading: "The Trap of Process for Process's Sake",
        paragraphs: [
          "As recruiting teams grow, there's a natural instinct to add process: more approval steps, more standardized templates, more sign-offs. Some of this is necessary. Much of it just adds friction without improving outcomes.",
          "The teams that scale well are disciplined about adding structure only where it solves a real, recurring problem — and just as disciplined about removing it once it stops earning its keep."
        ]
      },
      {
        heading: "Distributed Teams Need Distributed Trust",
        paragraphs: [
          "A recruiting function spanning multiple regions and time zones cannot run on constant real-time coordination. It has to run on shared context and trust in local judgment.",
          "That means investing heavily in documentation, training, and clear decision rights, so that a recruiter in EMEA and a recruiter in APAC are empowered to make good calls without waiting on headquarters."
        ]
      }
    ]
  },
  "2": {
    pub: "Recruiting Leaders",
    title: "What Twenty Years in Talent Acquisition Actually Teaches You.",
    date: "Dec 2024",
    type: "Opinion Editorial",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    quote: "The candidates you don't hire teach you almost as much as the ones you do.",
    readTime: "5 min read",
    author: "Jean Lanctot",
    summary: "Reflections from two decades spent recruiting across Microsoft, Amazon, Starbucks, Fluke, and Twitch, on what actually holds up as recruiting practice matures alongside the business.",
    sections: [
      {
        heading: "Recruiting Is a Business Function, Not a Support Function",
        paragraphs: [
          "Early in a recruiter's career, it's easy to think of the role as purely reactive — filling the requisitions the business hands down. That framing limits the impact a talent function can have.",
          "The best talent leaders sit close enough to the business to shape hiring plans before they're finalized, not just execute them after the fact."
        ]
      },
      {
        heading: "Mentorship Compounds Faster Than Headcount",
        paragraphs: [
          "Growing a team's capability matters more, over time, than simply growing its size. A well-mentored team of ten will consistently outperform an under-coached team of twenty.",
          "Investing in structured onboarding, shadowing, and regular feedback loops pays off well beyond any single hiring cycle."
        ]
      }
    ]
  }
};

export function InsightDetail({ id }: { id: string }) {
  // Graceful fallback for missing or corrupted ID
  const normalizedId = insightsData[id] ? id : "0";
  const data = insightsData[normalizedId];

  const goBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = "#media";
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen pt-36 pb-24 bg-brand-bg text-brand-primary"
    >
      <div className="container-gr">
        {/* Back Link */}
        <button 
          onClick={goBack} 
          className="group flex items-center gap-3 mb-12 text-xs font-mono font-bold tracking-[0.22em] uppercase text-brand-muted hover:text-brand-accent transition-all cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform duration-300" /> 
          Back to Insights
        </button>

        {/* Hero Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Article Header & Summary / Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-brand-primary text-white text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1.5">
                {data.pub}
              </span>
              <span className="text-brand-muted/40 font-mono text-[11.5px]">•</span>
              <span className="text-brand-accent font-sans text-xs font-bold uppercase tracking-[0.18em]">
                {data.type}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-light text-brand-primary tracking-tighter leading-[1.05] mb-8">
              {data.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-brand-primary/10 mb-10 text-xs font-mono text-brand-muted/80 tracking-wider">
              <div>
                Author: <span className="font-bold text-brand-primary">{data.author}</span>
              </div>
              <div className="hidden sm:block text-brand-primary/20">|</div>
              <div>
                Published: <span className="font-bold text-brand-primary">{data.date}</span>
              </div>
              <div className="hidden sm:block text-brand-primary/20">|</div>
              <div className="text-brand-accent font-bold">
                {data.readTime}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-brand-muted font-display italic leading-relaxed">
              {data.summary}
            </p>
          </div>

          {/* Featured Image / Right Column */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-brand-bg rounded-sm overflow-hidden border border-brand-primary/10 p-2">
            <div className="w-full h-full overflow-hidden relative">
              <img 
                src={data.image} 
                alt={data.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-105"
              />
              <div className="absolute inset-0 bg-brand-bg/5 mix-blend-multiply" />
            </div>
          </div>
        </div>

        {/* Divider hairline */}
        <div className="hairline w-full mb-16" />

        {/* Article Body Content */}
        <div className="max-w-4xl mx-auto">
          {/* Pull Quote */}
          <blockquote className="border-l-[3px] border-brand-accent pl-8 py-2 my-14">
            <p className="font-display italic text-2xl md:text-3.5xl text-brand-primary leading-snug tracking-tight">
              "{data.quote}"
            </p>
          </blockquote>

          {/* Structured Sections */}
          <div className="space-y-12">
            {data.sections.map((section, sidx) => (
              <div key={sidx} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-primary tracking-tight">
                  {section.heading}
                </h2>
                
                {section.paragraphs.map((para, pidx) => (
                  <p 
                    key={pidx} 
                    className="text-base md:text-lg text-brand-muted leading-relaxed font-sans text-justify"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Back Action at footer */}
          <div className="hairline w-full mt-20 pt-10 flex justify-center">
            <button 
              onClick={goBack}
              className="btn-accent border border-brand-accent select-none"
            >
              Back to Editorials
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
