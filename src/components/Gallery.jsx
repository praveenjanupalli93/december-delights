import { motion } from "framer-motion";
import { GALLERY } from "@/lib/media";
function Gallery() {
  return <section id="gallery" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[93rem] px-6 md:px-10">
        <div className="mb-14 flex flex-col items-center text-center">
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="font-btn text-xs uppercase tracking-[0.42em] text-gold"
  >
            Inside The Cafe
          </motion.p>
          <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-7xl"
  >
            THE <span className="text-gradient-gold">AMBIENCE</span>
          </motion.h2>
        </div>

        <div className="columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
          {GALLERY.map((src, i) => <motion.figure
    key={src}
    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.9, delay: i % 4 * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="group mb-4 md:mb-6 break-inside-avoid overflow-hidden  ring-1 ring-gold/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:ring-gold/50"
  >
              <div className="relative">
                <img
    src={src}
    alt={`December Delights ambience ${i + 1}`}
    loading="lazy"
    className="w-full transition-transform duration-[1.4s] ease-out group-hover:scale-110"
  />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-center">
                  <div className="font-btn text-[0.6rem] uppercase tracking-[0.36em] text-gold">
                    Warangal · {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 font-display text-lg text-white">
                    A December Moment
                  </div>
                </figcaption>
              </div>
            </motion.figure>)}
        </div>
      </div>
    </section>;
}
export {
  Gallery
};
