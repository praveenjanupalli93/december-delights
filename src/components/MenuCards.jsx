import { motion } from "framer-motion";
import { MENU_CARDS } from "@/lib/media";
function MenuCards() {
  return <section id="menu-cards" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[93rem] px-6 md:px-10">
        <div className="mb-14 flex flex-col items-center text-center">
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="font-btn text-xs uppercase tracking-[0.42em] text-gold"
  >
            The Full Menu
          </motion.p>
          <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-7xl"
  >
            SEE WHAT'S <span className="text-gradient-gold">COOKING</span>
          </motion.h2>
          <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay: 0.2 }}
    className="mt-5 max-w-xl text-sm text-cream/70"
  >
            Every page of our menu, from small plates to sweet endings.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {MENU_CARDS.map((src, i) => <motion.div
    key={src}
    initial={{ opacity: 0, y: 40, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay: i % 4 * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="group relative overflow-hidden  ring-1 ring-gold/15 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:ring-gold/50 hover:-translate-y-1"
  >
              <img
    src={src}
    alt={`December Delights menu ${i + 1}`}
    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
  />
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export {
  MenuCards
};
