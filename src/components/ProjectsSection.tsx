import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Study Material Provider Bot",
    tech: ["Python", "Telegram API"],
    status: "RUNNING",
    desc: "Telegram Bot providing dedicated notes and previous year papers. Achieved 100% adoption across the CSE department.",
  },
  {
    title: "Live Object Detection",
    tech: ["Python", "OpenCV", "ML"],
    status: "RUNNING",
    desc: "Real-time object detection model using OpenCV and pre-trained deep learning. Live webcam feed with bounding boxes and labels.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-sm tracking-[0.4em] text-monarch-purple mb-2 uppercase">
            // Active Deployments
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-12">Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="glass-card rounded-xl p-8 group transition-all duration-400 hover:translate-y-[-4px]"
            >
              {/* Status */}
              <div className="flex items-center gap-2 mb-6">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-monarch-purple animate-breathe" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-monarch-purple animate-pulse-ring" />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-aura-violet">{project.status}</span>
              </div>

              <h4 className="font-display text-xl font-semibold mb-3 group-hover:text-glow-purple transition-all">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.desc}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
