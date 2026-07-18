import { motion } from "framer-motion";
import { useState } from "react";
import { FOODS } from "@/lib/media";
const CATEGORIES = [
  { key: "all", label: "All", match: () => true },
  { key: "starters", label: "Starters", match: (n) => /crispy|popcorn|wings|prawns|corn|dumpling|fingers|strips|skewers|puff|chaat/i.test(n) },
  { key: "mains", label: "Mains", match: (n) => /pizza|lasagna|pasta|rice|noodle|paneer|dal|parmesan|wrap|taco|roll|chicken with|grilled chicken(?! wrap)/i.test(n) },
  { key: "soups", label: "Soups & Salads", match: (n) => /soup|salad/i.test(n) },
  { key: "desserts", label: "Desserts & Coffee", match: (n) => /cheesecake|brownie|donut|cookies|cappuccino/i.test(n) }
];
function FoodMenu() {
  const [cat, setCat] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const filter = CATEGORIES.find((c) => c.key === cat);
  const allList = FOODS.filter((f) => filter.match(f.name));
  const list = cat === "all" && !showAll ? allList.slice(0, 8) : allList;
  return <section id="menu" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[93rem] px-6 md:px-10">
        <div className="mb-14 flex flex-col items-center text-center">
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="font-btn text-xs uppercase tracking-[0.42em] text-gold"
  >
            The Kitchen
          </motion.p>
          <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-7xl"
  >
            OUR <span className="text-gradient-gold">FLAVOURS</span>
          </motion.h2>
          <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay: 0.2 }}
    className="mt-5 max-w-xl text-sm text-cream/70"
  >
            {FOODS.length} dishes across appetisers, mains, soups, salads, and
            desserts — every plate crafted in-house at our Hanamkonda kitchen.
          </motion.p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => <button
    key={c.key}
    onClick={() => {
      setCat(c.key);
      setShowAll(false);
    }}
    className={`font-btn text-[0.7rem] uppercase tracking-[0.28em] rounded-full px-5 py-2.5 transition-all duration-300 ${cat === c.key ? "bg-gold text-forest shadow-[0_6px_24px_rgba(229,180,87,0.35)]" : "border border-gold/25 text-cream/80 hover:border-gold/60 hover:text-gold"}`}
  >
              {c.label}
            </button>)}
        </div>

        <motion.div
    layout
    className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4"
  >
          {list.map((f, i) => <motion.figure
    layout
    key={f.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, delay: i % 8 * 0.04 }}
    className="group relative overflow-hidden  bg-black/40 ring-1 ring-gold/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:ring-gold/40"
  >
              <div className="relative aspect-square overflow-hidden">
                <img
    src={f.url}
    alt={f.name}
    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
  />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-center">
                <div className="font-sub text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                  Chef's plate
                </div>
                <div className="mt-1 font-display text-lg leading-tight text-white md:text-xl">
                  {f.name.toUpperCase()}
                </div>
              </figcaption>
            </motion.figure>)}
        </motion.div>

        {cat === "all" && !showAll && allList.length > 8 && <div className="mt-12 flex justify-center">
            <button
    onClick={() => setShowAll(true)}
    className="font-btn text-[0.7rem] uppercase tracking-[0.28em] rounded-full px-8 py-3 bg-gold text-forest shadow-[0_6px_24px_rgba(229,180,87,0.35)] transition-all duration-300 hover:scale-105"
  >
              Show all {allList.length} items
            </button>
          </div>}
      </div>
    </section>;
}
export {
  FoodMenu
};
