import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
const MAP_QUERY = "December+Delights+Hanamkonda+Warangal";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent("December Delights, 1st Floor, Gokul Plaza, Near Old Bus Depot, Circuit House Road, Hanamkonda, Warangal, Telangana 506001")}&output=embed`;
function Visit() {
  return <section id="visit" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[93rem] px-6 md:px-10">
        <div className="mb-14 text-center">
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="font-btn text-xs uppercase tracking-[0.42em] text-gold"
  >
            Find Us
          </motion.p>
          <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-7xl"
  >
            VISIT <span className="text-gradient-gold">DECEMBER.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="relative overflow-hidden rounded-sm ring-1 ring-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
  >
            <iframe
    title="December Delights location"
    src={MAP_EMBED}
    className="h-[360px] w-full md:h-[520px]"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
              <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="rounded-full bg-gold p-3 shadow-[0_8px_24px_rgba(229,180,87,0.5)]"
  >
                <MapPin className="h-5 w-5 text-forest" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="flex flex-col justify-center gap-6"
  >
            <Info icon={MapPin} label="Address">
              1st Floor, Gokul Plaza,<br />
              Near Old Bus Depot, Circuit House Road,<br />
              Hanamkonda, Warangal,<br />
              Telangana — 506001
            </Info>
            <Info icon={Phone} label="Phone" href="tel:+919676946460">
              096769 46460
            </Info>
            <Info icon={Mail} label="Email" href="mailto:info@decemberdelights.in">
              info@decemberdelights.in
            </Info>
            <Info icon={Clock} label="Open Daily">
              11:00 AM — 11:00 PM
            </Info>

            <a
    href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
    target="_blank"
    rel="noreferrer"
    className="btn-gold btn-gold-hover mt-2 w-fit"
  >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
}
function Info({ icon: Icon, label, children, href }) {
  const inner = <div className="flex items-start gap-5 rounded-sm border border-gold/15 bg-forest/50 p-5 backdrop-blur-xl transition-all duration-500 hover:border-gold/50">
      <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/30 text-gold">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <div className="min-w-0">
        <div className="font-btn text-[0.65rem] uppercase tracking-[0.36em] text-gold/90">{label}</div>
        <div className="mt-1 font-sub text-base leading-relaxed text-cream">{children}</div>
      </div>
    </div>;
  return href ? <a href={href}>{inner}</a> : inner;
}
export {
  Visit
};
