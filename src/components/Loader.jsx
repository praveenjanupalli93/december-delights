import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
function Loader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2600);
    return () => clearTimeout(t);
  }, []);
  return <AnimatePresence>
      {!gone && <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, filter: "blur(12px)" }}
    transition={{ duration: 0.9, ease: [0.6, 0.05, 0.2, 1] }}
    className="fixed inset-0 z-[100] flex items-center justify-center doodle-bg"
  >
          <div className="flex flex-col items-center gap-6 text-center">
            <motion.div
    initial={{ scale: 0.7, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
  >
              <BrandLogo className="h-28 w-28 sm:h-36 sm:w-36" />
            </motion.div>
            <motion.h1
    initial={{ y: 24, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.9, delay: 0.35 }}
    className="font-display text-4xl sm:text-6xl text-gradient-gold tracking-[0.06em]"
  >
              DECEMBER DELIGHTS
            </motion.h1>
            <motion.p
    initial={{ y: 12, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.9, delay: 0.6 }}
    className="font-btn text-xs sm:text-sm text-gold tracking-[0.42em]"
  >
              NOT JUST A CAFE
            </motion.p>
            <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1.6, delay: 0.7, ease: "easeOut" }}
    className="h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
  />
          </div>
        </motion.div>}
    </AnimatePresence>;
}
export {
  Loader
};
