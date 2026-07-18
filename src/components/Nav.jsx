import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "./BrandLogo";
const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#signature", label: "Signature" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <motion.header
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
    className={`fixed  inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-forest/85 backdrop-blur-xl border-b border-gold/10 py-3" : "bg-transparent py-5"}`}
  >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3 group">
          <BrandLogo className="h-11 w-11 transition-transform duration-500 group-hover:rotate-6" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold text-lg text-gold tracking-[0.14em]">
              DECEMBER DELIGHTS
            </span>
            <span className="font-btn text-[0.6rem] text-cream/70 tracking-[0.36em]">
              NOT JUST A CAFE
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => <a
    key={l.href}
    href={l.href}
    className="relative font-sub text-[0.78rem] uppercase tracking-[0.24em] text-cream/85 transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100"
  >
              {l.label}
            </a>)}
        </nav>

        <a href="#visit" className="hidden md:inline-flex btn-gold btn-gold-hover !py-2.5 !text-[0.72rem]">
          Visit Us
        </a>

        <button
    onClick={() => setOpen((v) => !v)}
    aria-label="Menu"
    className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-gold/40 text-gold"
  >
          <span className="relative flex h-3 w-5 flex-col justify-between">
            <span className={`block h-px w-full bg-gold transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-full bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-full bg-gold transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.35 }}
    className="md:hidden overflow-hidden border-t border-gold/10 bg-forest-deep/95 backdrop-blur-xl"
  >
            <div className="flex flex-col px-6 py-5">
              {LINKS.map((l) => <a
    key={l.href}
    href={l.href}
    onClick={() => setOpen(false)}
    className="py-3 font-sub text-sm uppercase tracking-[0.24em] text-cream/85 hover:text-gold"
  >
                  {l.label}
                </a>)}
              <a href="#visit" onClick={() => setOpen(false)} className="btn-gold btn-gold-hover mt-4 w-full">
                Visit Us
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
}
export {
  Nav
};
