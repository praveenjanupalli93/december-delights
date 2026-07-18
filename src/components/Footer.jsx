import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
function Footer() {
  return <footer className="relative overflow-hidden bg-forest-darker">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="mx-auto max-w-[93rem] px-6 py-16 md:px-10"
  >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <BrandLogo className="h-14 w-14" />
              <div>
                <div className="font-display text-2xl text-gradient-gold tracking-[0.08em]">
                  DECEMBER DELIGHTS
                </div>
                <div className="font-btn text-[0.65rem] uppercase tracking-[0.36em] text-cream/70">
                  Not Just A Cafe
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/65">
              A premium cafe experience in the heart of Hanamkonda. Made with
              care, served with warmth, open every day of the year.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Social href="https://www.instagram.com/decemberdelights/" label="Instagram" brandClass="hover:!bg-[#E4405F] hover:!text-white hover:!border-[#E4405F]"><Instagram className="h-4 w-4" /></Social>
              <Social href="https://www.facebook.com/people/December-Delights/61575884525677/#" label="Facebook" brandClass="hover:!bg-[#1877F2] hover:!text-white hover:!border-[#1877F2]"><Facebook className="h-4 w-4" /></Social>
              <Social href="https://wa.me/919676946460" label="WhatsApp" brandClass="hover:!bg-[#25D366] hover:!text-white hover:!border-[#25D366]"><MessageCircle className="h-4 w-4" /></Social>
              <Social href="https://www.google.com/maps/search/?api=1&query=December+Delights+Hanamkonda" label="Maps"><MapPin className="h-4 w-4" /></Social>
            </div>
          </div>

          <div>
            <h4 className="font-sub text-xs uppercase tracking-[0.32em] text-gold">Visit</h4>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              1st Floor, Gokul Plaza,<br />
              Near Old Bus Depot,<br />
              Circuit House Road,<br />
              Hanamkonda, Warangal,<br />
              Telangana — 506001
            </p>
          </div>

          <div>
            <h4 className="font-sub text-xs uppercase tracking-[0.32em] text-gold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><a href="tel:+919676946460" className="hover:text-gold">096769 46460</a></li>
              <li><a href="mailto:info@decemberdelights.in" className="hover:text-gold">info@decemberdelights.in</a></li>
              <li><a href="https://www.decemberdelights.in" className="hover:text-gold">www.decemberdelights.in</a></li>
            </ul>
            <h4 className="mt-6 font-sub text-xs uppercase tracking-[0.32em] text-gold">Hours</h4>
            <p className="mt-3 text-sm text-cream/70">
              Every Day<br />
              <span className="font-display text-xl text-cream tracking-wider">11 AM — 11 PM</span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-gold/10 pt-6 md:flex-row">
          <p className="text-xs text-cream/50">
            © {(/* @__PURE__ */ new Date()).getFullYear()} December Delights. All rights reserved.
          </p>
          <p className="font-btn text-[0.65rem] uppercase tracking-[0.36em] text-cream/40">
            Crafted with care in Warangal
          </p>
        </div>
      </motion.div>
    </footer>;
}
function Social({ href, label, children, brandClass = "hover:bg-gold hover:text-forest" }) {
  return <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-300 hover:-translate-y-0.5 ${brandClass}`}
  >
      {children}
    </a>;
}
export {
  Footer
};
