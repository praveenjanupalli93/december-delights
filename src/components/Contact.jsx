import { motion } from "framer-motion";
import { useState } from "react";
function Contact() {
  const [sent, setSent] = useState(false);
  return <section id="contact" className="relative overflow-hidden doodle-tile py-24 md:py-36">
      <div className="absolute inset-0 bg-forest/85" />
      <div className="relative mx-auto max-w-[93rem] px-6 md:px-10">
        <div className="mb-14 text-center">
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="font-btn text-xs uppercase tracking-[0.42em] text-gold"
  >
            Say Hello
          </motion.p>
          <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-7xl"
  >
            LET'S <span className="text-gradient-gold">TALK.</span>
          </motion.h2>
        </div>

        <motion.form
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    onSubmit={(e) => {
      e.preventDefault();
      setSent(true);
    }}
    className="relative rounded-md border border-gold/25 bg-white/[0.04] p-6 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-10"
  >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" />
            <div className="md:col-span-2">
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="md:col-span-2">
              <Field label="Message" name="message" textarea required />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-xs text-cream/60">
              We'll respond within one working day.
            </p>
            <button type="submit" className="btn-gold btn-gold-hover !px-10 !py-4 !text-sm">
              {sent ? "Message Sent \u2713" : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>;
}
function Field({ label, name, type = "text", textarea = false, required }) {
  const cls = "peer w-full border-0 border-b border-gold/30 bg-transparent px-1 py-3 font-body text-cream placeholder-transparent outline-none transition-all focus:border-gold";
  return <label className="relative block">
      {textarea ? <textarea name={name} rows={4} placeholder={label} required={required} className={cls} /> : <input name={name} type={type} placeholder={label} required={required} className={cls} />}
      <span className="pointer-events-none absolute left-1 top-3 font-sub text-sm uppercase tracking-[0.24em] text-cream/60 transition-all peer-focus:-translate-y-5 peer-focus:text-[0.65rem] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:text-gold">
        {label}
      </span>
    </label>;
}
export {
  Contact
};
