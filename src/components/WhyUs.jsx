import { motion } from "framer-motion";
import { Leaf, Sparkles, Home, HeartHandshake, Timer, Users } from "lucide-react";
const ITEMS = [
  { icon: Leaf, title: "Fresh Ingredients", body: "Sourced daily, prepared in-house \u2014 nothing frozen, nothing forgotten." },
  { icon: Sparkles, title: "Quality Taste", body: "Recipes tested until every bite earns its place on the plate." },
  { icon: Home, title: "Best Ambience", body: "Warm lighting, easy music, and corners made for lingering." },
  { icon: HeartHandshake, title: "Friendly Service", body: "A team that knows regulars by name and welcomes strangers as friends." },
  { icon: Timer, title: "Fast Service", body: "Attentive without rushing \u2014 food arrives hot, always." },
  { icon: Users, title: "Family Friendly", body: "Space for kids, quiet booths for two, tables for the whole gang." }
];
function WhyUs() {
  return <section id="why" className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
      <div className="mx-auto max-w-[93rem] px-6 md:px-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="font-btn text-xs uppercase tracking-[0.42em] text-gold"
  >
            Why Us
          </motion.p>
          <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-7xl"
  >
            SIX REASONS TO <span className="text-gradient-gold">STAY.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => <motion.div
    key={it.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay: i % 3 * 0.1 }}
    className="group relative overflow-hidden rounded-sm border border-gold/15 bg-forest-deep p-8 backdrop-blur-xl transition-all duration-500 hover:border-gold/50 hover:-translate-y-1"
  >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 transition-opacity duration-500 group-hover:from-gold/5" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/30 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <it.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-cream tracking-wider">
                  {it.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{it.body}</p>
                <div className="mt-6 h-px w-10 origin-left scale-x-100 bg-gold/50 transition-transform duration-500 group-hover:scale-x-[3]" />
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export {
  WhyUs
};
