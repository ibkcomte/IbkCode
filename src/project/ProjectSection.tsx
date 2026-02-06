import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "./Project"; // Ensure this matches your data export

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each card appearing
    },
  },
};

export const ProjectsSection: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Featured <span className="text-[#00CED1] font-serif italic">WORK</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#00CED1] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Staggered Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;