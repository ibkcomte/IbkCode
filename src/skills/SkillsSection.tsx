import React from "react";
import { motion} from "framer-motion";
import SkillsItem from "../skills/SkillsItem";

const skillsData = [
  {
    skill: "Languages: TypeScript & JS",
    percentage: 99,
    description: "Deep understanding of Strict Mode, Generics, and ES6+ for building maintainable apps."
  },
  {
    skill: "Frameworks: React",
    percentage: 99.9,
    description: "Clean architecture and strict typing. I write code that 'future me' actually likes reading."
  },
  {
    skill: "Tools: Git & Build Tools",
    percentage: 98,
    description: "Mastery of Vite, Webpack, and GitHub Actions for seamless deployment pipelines."
  },
  {
    skill: "Styling & UI",
    percentage: 98,
    description: "Tailwind CSS expert. Specialize in design systems that are scalable and rock-solid."
  },
  {
    skill: "Visuals & Usability",
    percentage: 99,
    description: "Flawless performance across 4K monitors, iPads, and budget Android devices."
  },
  {
    skill: "Reliability & Soft Skills",
    percentage: 99,
    description: "Frictionless professional relationships and a commitment to project deadlines."
  }
];

const SkillsSection: React.FC = () => {
  // Animation for the section header
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Stagger container for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Each SkillItem will pop in 0.15s after the previous one
      }
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-lemon-400/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={headerVariants}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-black tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500 mb-3">
            Expertise
          </h2>
          <div className="flex flex-col items-center gap-2">
             <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
              MY <span className="italic font-serif bg-gradient-to-r from-[#00CED1] to-[#008b8b] bg-clip-text text-transparent">SKILLS</span>
            </h3>
            <div className="w-24 h-1.5 bg-lemon-400 rounded-full" />
          </div>
        </motion.div>

        {/* Animated Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
        >
          {skillsData.map((item, index) => (
            <div key={index} className="flex justify-center">
              <SkillsItem
                skill={item.skill}
                percentage={item.percentage}
                description={item.description}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;