import React from "react";
import { motion } from "framer-motion";

interface SkillsItemProps {
  skill: string;
  percentage: number;
  description: string;
}

const SkillsItem: React.FC<SkillsItemProps> = ({ skill, percentage, description }) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${percentage}%`, 
      transition: { duration: 1.5, delay: 0.2, ease: "circOut" } 
    },
  };

  return (
    <motion.div 
      // variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full max-w-md group"
    >
      {/* Skill Info Header */}
      <div className="flex justify-between items-end mb-2 px-1">
        <div className="flex flex-col text-left">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#00CED1] transition-colors duration-300">
            {skill}
          </h3>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-black text-[#00CED1] tabular-nums">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Skill Description */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed text-left px-1">
        {description}
      </p>
      
      {/* Progress Bar Container */}
      <div className="relative h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-visible">
        {/* Animated Fill */}
        <motion.div
          // variants={barVariants}
          className="absolute top-0 left-0 h-full bg-[#00CED1] rounded-full shadow-[0_0_15px_rgba(0,206,209,0.4)]"
        />

        {/* Animated Marker/Thumb */}
        <motion.div
          initial={{ left: 0 }}
          whileInView={{ left: `${percentage}%` }}
          transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
          viewport={{ once: true }}
          className="absolute -top-1.5 -translate-x-1/2 w-6 h-6"
        >
          {/* Outer Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-[#00CED1] animate-ping opacity-20" />
          
          {/* Inner Solid Marker */}
          <div className="relative w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-[3px] border-[#00CED1] shadow-lg flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-[#00CED1]" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsItem;