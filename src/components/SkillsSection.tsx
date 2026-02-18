import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "C / C++", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "HTML / CSS", level: 90 },
  { name: "Python", level: 75 },
  { name: "Git", level: 70 },
  { name: "Data Structures", level: 80 },
  { name: "Web Development", level: 85 },
  { name: "Machine Learning", level: 65 },
];

const softSkills = [
  "Problem Solving", "Team Collaboration", "Communication", 
  "Leadership", "Quick Learning", "Critical Thinking"
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-sm tracking-[0.4em] text-monarch-purple mb-2 uppercase">
            // System Capabilities
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-12">Skills & Arsenal</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical */}
          <div className="space-y-5">
            <h4 className="font-mono text-xs tracking-[0.3em] text-electric-blue mb-6 uppercase">Technical Skills</h4>
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-body text-sm font-medium">{skill.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-monarch-purple to-aura-violet"
                    style={{ boxShadow: "0 0 10px rgba(91, 46, 255, 0.5)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft skills */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.3em] text-electric-blue mb-6 uppercase">Soft Skills</h4>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-xl p-5 text-center group transition-all duration-300"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full border border-border flex items-center justify-center group-hover:border-monarch-purple group-hover:glow-purple transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-monarch-purple" />
                  </div>
                  <span className="font-body text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
