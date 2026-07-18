import { motion } from "framer-motion";
import { FOODS } from "@/lib/media";
const SIGNATURE_NAMES = [
  "Farmhouse Veg Pizza",
  "BBQ Grilled Chicken",
  "Chicken Lasagna",
  "Paneer Makhani with Rice",
  "Honey Chilli Chicken Wings",
  "Berry Cheesecake"
];
const SIGNATURE_BLURBS = {
  "Farmhouse Veg Pizza": "Hand-stretched, wood-fired, garden-fresh.",
  "BBQ Grilled Chicken": "Slow-marinated, char-kissed, unforgettable.",
  "Chicken Lasagna": "Layered comfort, bubbling and golden.",
  "Paneer Makhani with Rice": "Silky tomato-butter, house paneer.",
  "Honey Chilli Chicken Wings": "Sticky, spicy, unapologetically bold.",
  "Berry Cheesecake": "Cloud-soft, tart-sweet, a happy ending."
};
function Signature() {
  const items = SIGNATURE_NAMES.map((n) => FOODS.find((f) => f.name === n)).filter(Boolean);
  return <section id="signature" className="relative overflow-hidden doodle-tile py-24 md:py-36">
      <div className="absolute inset-0 bg-forest/85" />
      <div className="relative mx-auto max-w-[93rem] px-6 md:px-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="font-btn text-xs uppercase tracking-[0.42em] text-gold"
  >
            The Menu
          </motion.p>
          <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-7xl"
  >
            SIGNATURE <span className="text-gradient-gold">DISHES</span>
          </motion.h2>
          <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.2 }}
    className="mt-6 h-px w-24 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
  />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => <motion.article
    key={it.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay: i % 3 * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative overflow-hidden  bg-forest-deep ring-1 ring-gold/10 transition-all duration-500 hover:ring-gold/40"
  >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
    src={it.url}
    alt={it.name}
    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
  />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="font-btn text-[0.65rem] uppercase tracking-[0.36em] text-gold">
                    {String(i + 1).padStart(2, "0")} · Signature
                  </div>
                  <h3 className="mt-2 font-display text-3xl leading-tight text-cream">
                    {it.name.toUpperCase()}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-cream/70">
                    {SIGNATURE_BLURBS[it.name]}
                  </p>
                  <div className="mt-4 flex items-center gap-2 font-btn text-[0.68rem] uppercase tracking-[0.32em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Discover
                    <span className="h-px w-8 bg-gold" />
                  </div>
                </div>
              </div>
            </motion.article>)}
        </div>
      </div>
    </section>;
}
export {
  Signature
};
