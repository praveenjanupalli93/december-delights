import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BrandLogo } from "./BrandLogo";
const staffHero = { url: "/images/brand/staff-hero.png" };
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  return <section id="top" ref={ref} className="relative min-h-screen overflow-hidden doodle-bg">
      
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <motion.div
    style={{ y, opacity, scale }}
    className="relative z-10 mx-auto flex min-h-screen w-full max-w-[93rem] flex-col items-center justify-center px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-10"
  >
        {
    /* LEFT: text */
  }
        <div className="flex flex-col max-h-[90rem] items-center text-center ml-10 lg:items-start lg:text-left">
          <motion.div
    initial={{ opacity: 0, scale: 0.85, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 2.9, ease: [0.16, 1, 0.3, 1] }}
    className="animate-float"
  >
            <BrandLogo className="h-24 w-24 sm:h-28 lg:ml-20 sm:w-28 md:h-32 md:w-32" />
          </motion.div>

          <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 3 }}
    className="mt-6 inline-flex items-center rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 font-btn text-[0.65rem] uppercase tracking-[0.3em] text-gold"
  >
            Fresh • Delicious • Homemade
          </motion.div>

          <div className="mt-6 overflow-hidden">
            <motion.h1
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.1, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
    className="font-display font-bold text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5rem] text-cream tracking-[0.02em]"
  >
              Taste the Joy of{" "}
              <span className="text-gradient-gold font-bold">Every Bite</span>
            </motion.h1>
          </div>

          <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 1.4, delay: 3.6, ease: "easeOut" }}
    className="mt-6 h-px w-48 origin-left bg-gradient-to-r from-transparent via-gold to-transparent lg:mx-0"
  />

          <motion.p
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 3.75 }}
    className="mt-5 max-w-lg font-sub text-sm sm:text-base text-cream/80 leading-relaxed"
  >
            Experience freshly prepared meals, handcrafted desserts, and unforgettable flavors made with love at December Delights.
          </motion.p>

          <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 4 }}
    className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
  >
            <a href="#menu" className="btn-gold btn-gold-hover">Explore Menu</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3 font-btn text-[0.78rem] uppercase tracking-[0.24em] text-gold transition-all hover:bg-gold hover:text-forest">
              Contact Us
            </a>
          </motion.div>
        </div>

        {
    /* RIGHT: staff image (desktop only) */
  }
        <div className="hidden lg:flex relative h-full min-h-[80vh] items-end justify-end">
          <div className="pointer-events-none absolute inset-x-8 bottom-4 h-40 rounded-[3rem] bg-black/40 blur-3xl" />
          <motion.img
    src={staffHero.url}
    alt="December Delights staff"
    loading="eager"
    decoding="async"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
    className="relative z-10 max-h-[93vh] w-auto object-contain object-bottom animate-float drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
  />
        </div>
      </motion.div>

      {
    /* Scroll indicator */
  }
      <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 4.2 }}
    className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
  >
        <div className="font-btn text-[0.65rem] uppercase tracking-[0.4em] text-cream/60">Scroll</div>
        <div className="mx-auto mt-3 h-14 w-px overflow-hidden bg-cream/20">
          <motion.div
    animate={{ y: [-56, 56] }}
    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    className="h-8 w-full bg-gradient-to-b from-transparent via-gold to-transparent"
  />
        </div>
      </motion.div>
    </section>;
}
export {
  Hero
};
