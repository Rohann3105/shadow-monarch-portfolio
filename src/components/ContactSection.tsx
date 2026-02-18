import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-sm tracking-[0.4em] text-monarch-purple mb-2 uppercase">
            // API Gateway
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Contact</h3>
          <p className="text-muted-foreground mb-10">Transmit a request through the gateway.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {[
            { name: "name", label: "IDENTIFIER", type: "text", placeholder: "Your name" },
            { name: "email", label: "EMAIL_ADDR", type: "email", placeholder: "your@email.com" },
          ].map((field) => (
            <div key={field.name}>
              <label className="font-mono text-xs tracking-[0.2em] text-muted-foreground mb-2 block">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body text-lg outline-none focus:border-monarch-purple transition-colors duration-300 placeholder:text-muted-foreground/40"
              />
            </div>
          ))}

          <div>
            <label className="font-mono text-xs tracking-[0.2em] text-muted-foreground mb-2 block">
              MESSAGE_BODY
            </label>
            <textarea
              rows={4}
              placeholder="Your message..."
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground font-body text-lg outline-none focus:border-monarch-purple transition-colors duration-300 placeholder:text-muted-foreground/40 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="relative w-full py-4 rounded-lg font-display text-sm tracking-[0.3em] uppercase overflow-hidden transition-all duration-300 border border-monarch-purple/50 hover:border-monarch-purple text-foreground group"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-4 h-4 border-2 border-monarch-purple border-t-transparent rounded-full animate-spin" />
                <span>TRANSMITTING...</span>
              </div>
            ) : submitted ? (
              <span className="text-monarch-purple">REQUEST TRANSMITTED</span>
            ) : (
              <span>SEND REQUEST</span>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-monarch-purple/10 to-aura-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.form>

        {/* Direct contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-6 justify-center"
        >
          {[
            { label: "Email", value: "rohanchaware73@gmail.com", href: "mailto:rohanchaware73@gmail.com" },
            { label: "LinkedIn", value: "rohan-chaware", href: "https://linkedin.com/in/rohan-chaware-56853b309" },
            { label: "Phone", value: "+91 8600620481", href: "tel:+918600620481" },
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-monarch-purple transition-colors duration-300"
            >
              <span className="text-electric-blue">{contact.label}:</span> {contact.value}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
