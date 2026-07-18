import { motion } from "framer-motion";
import { GALLERY } from "@/lib/media";
function Story() {
  return <section id="story" className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="mx-auto grid max-w-[93rem] grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        {
    /* Left: image reveal */
  }
        <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="relative"
  >
          <div className="relative aspect-[4/5] overflow-hidden ">
            <motion.img
    initial={{ scale: 1.25 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
    src={GALLERY[0]}
    alt="December Delights interior"
    className="h-full w-full object-cover"
    loading="lazy"
  />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden aspect-square w-40 overflow-hidden  ring-4 ring-forest md:block">
            <img src={GALLERY[3] ?? GALLERY[1]} alt="Ambience" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -left-3 top-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-gold to-transparent md:block" />
        </motion.div>

        {
    /* Right: text */
  }
        <div>
          <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "3.5rem" }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="mb-6 h-px bg-gold"
  />
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="font-btn text-xs uppercase tracking-[0.42em] text-gold"
  >
            Our Story
          </motion.p>
          <motion.h2
    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.1 }}
    className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-6xl lg:text-7xl"
  >
            A CAFE, <span className="text-gradient-gold">CRAFTED</span><br />WITH LOVE.
          </motion.h2>
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.25 }}
    className="mt-7 max-w-lg text-[0.98rem] leading-relaxed text-cream/75"
  >
            Tucked away on Circuit House Road in Hanamkonda, December Delights
            is a warm escape from the everyday. What began as a small dream to
            build a space where friends and family could linger has grown into
            Warangal's most-loved cafe — where every cup is careful, every
            plate is honest, and every visit feels a little like coming home.
          </motion.p>
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.35 }}
    className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-cream/70"
  >
            We are not just a cafe. We are a chapter in your day.
          </motion.p>

          <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/15 pt-8"
  >
            {[
    { k: "40+", v: "Signature Dishes" },
    { k: "12h", v: "Open Daily" },
    { k: "1", v: "Home in Warangal" }
  ].map((s) => <div key={s.v}>
                <div className="font-display text-4xl text-gradient-gold">{s.k}</div>
                <div className="mt-1 font-sub text-[0.68rem] uppercase tracking-[0.22em] text-cream/60">{s.v}</div>
              </div>)}
          </motion.div>
        </div>
      </div>
    </section>;
}
export {
  Story
};
