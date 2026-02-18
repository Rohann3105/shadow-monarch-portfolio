import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stages = [
    { label: "INPUT", title: "Problem", desc: "Identify challenges and requirements", icon: "⟨" },
    { label: "PROCESS", title: "Logic", desc: "Analyze, design, and architect solutions", icon: "⟐" },
    { label: "OUTPUT", title: "Solution", desc: "Deploy efficient, scalable results", icon: "⟩" },
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-sm tracking-[0.4em] text-monarch-purple mb-2 uppercase">
            // Core Processing Unit
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-8">About Me</h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed mb-16 max-w-3xl"
        >
          Ambitious Computer Science Engineering student with strong foundational knowledge in programming, 
          web development, and software engineering principles. Proficient in C, C++, and modern web technologies. 
          Demonstrated ability to develop functional applications and solve complex problems through hands-on projects.
        </motion.p>

        {/* Processing flow */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-[33%] right-[33%] h-px">
            <div className="h-full bg-gradient-to-r from-monarch-purple/50 to-aura-violet/50 animate-energy-flow" />
          </div>

          {stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="glass-card rounded-xl p-8 text-center relative group transition-all duration-300"
            >
              <div className="font-mono text-xs tracking-[0.3em] text-monarch-purple mb-4">{stage.label}</div>
              <div className="text-4xl mb-4 text-aura-violet">{stage.icon}</div>
              <h4 className="font-display text-xl font-semibold mb-2">{stage.title}</h4>
              <p className="text-muted-foreground text-sm">{stage.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
