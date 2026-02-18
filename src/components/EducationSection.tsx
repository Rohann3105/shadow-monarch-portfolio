import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    level: "B.Tech in Computer Science",
    institution: "Rajiv Gandhi College of Engineering Research and Technology",
    location: "Chandrapur, Maharashtra",
    year: "2022 – 2026",
    details: "Relevant Coursework: Front-end Development, Data Structures and Algorithms",
  },
  {
    level: "Higher Secondary (Class XII)",
    institution: "Janata Mahavidhyalaya",
    location: "Chandrapur, Maharashtra",
    year: "2020 – 2022",
    details: "Scored 76% • MHTCET: 82 percentile",
  },
  {
    level: "Secondary (Class X)",
    institution: "St. Michael's English School",
    location: "Chandrapur, Maharashtra",
    year: "2020",
    details: "Scored 87% • Top 5% of class",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-sm tracking-[0.4em] text-monarch-purple mb-2 uppercase">
            // System Hierarchy
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-12">Education</h3>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-monarch-purple/60 via-aura-violet/30 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.level}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Node */}
                <div className="absolute left-[18px] md:left-[26px] top-2 w-4 h-4 rounded-full border-2 border-monarch-purple bg-background" style={{ boxShadow: i === 0 ? "0 0 15px rgba(91, 46, 255, 0.6)" : undefined }}>
                  <div className="absolute inset-1 rounded-full bg-monarch-purple" />
                </div>

                <div className="glass-card rounded-xl p-6">
                  <span className="font-mono text-xs text-electric-blue">{edu.year}</span>
                  <h4 className="font-display text-lg font-semibold mt-1">{edu.level}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{edu.institution}, {edu.location}</p>
                  <p className="text-muted-foreground text-xs mt-2 font-mono">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
