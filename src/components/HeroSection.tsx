import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Computer Science Student",
  "Web Developer",
  "Problem Solver",
  "ML Enthusiast",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-monarch-purple/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] rounded-full bg-aura-violet/8 blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* Status orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-monarch-purple animate-breathe" />
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-monarch-purple animate-pulse-ring" />
          </div>
          <span className="font-mono text-sm tracking-[0.3em] text-aura-violet uppercase">
            Status: Awakened
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-glow-purple"
        >
          <span className="text-foreground">ROHAN</span>
          <br />
          <span className="bg-gradient-to-r from-monarch-purple via-aura-violet to-electric-blue bg-clip-text text-transparent">
            CHAWARE
          </span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-lg md:text-xl text-muted-foreground mb-10 h-8"
        >
          <span className="text-electric-blue">&gt;</span>{" "}
          <span>{displayed}</span>
          <span className="text-monarch-purple animate-typing-cursor">|</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-display text-sm tracking-widest uppercase bg-gradient-to-r from-monarch-purple to-aura-violet text-primary-foreground glow-purple hover:glow-purple-intense transition-all duration-300"
          >
            Initialize Contact
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg font-display text-sm tracking-widest uppercase border border-border text-foreground hover:border-monarch-purple hover:text-monarch-purple transition-all duration-300"
          >
            View Deployments
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
