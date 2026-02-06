import React from "react";
import { motion } from "framer-motion";

interface PageOneCardProps {
  name: string;
  role: string;
}

const PageOneCard: React.FC<PageOneCardProps> = ({ name, role }) => {
  // Animation variants for internal elements
  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full max-w-2xl bg-transparent">
      <div className="flex flex-col items-start text-left">
        {/* Intro Tag */}
        <motion.span 
          variants={childVariants}
          className="px-4 py-1 rounded-full bg-lemon-400/10 text-lemon-600 dark:text-lemon-400 text-sm font-bold uppercase tracking-widest mb-4"
        >
          {role}
        </motion.span>

        {/* Main Heading */}
        <motion.h3 
          variants={childVariants}
          className="font-bold text-5xl md:text-7xl text-slate-900 dark:text-white leading-tight"
        >
          Hi, I'm
        </motion.h3>

        {/* Name with Gradient */}
        <motion.h2 
          variants={childVariants}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-gradient-to-r from-[#00CED1] to-[#008b8b] bg-clip-text text-transparent pb-4"
        >
          {name}
        </motion.h2>

        {/* Divider line */}
        <motion.div 
          variants={childVariants}
          className="w-20 h-1.5 bg-lemon-400 rounded-full mb-6"
        />

        {/* Bio Description */}
        <motion.p 
          variants={childVariants}
          className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg md:text-xl max-w-lg"
        >
          A <span className="text-slate-900 dark:text-white font-semibold">Frontend Developer</span> who 
          believes that code should be as predictable as it is powerful. I build dynamic interfaces 
          using <span className="text-[#00CED1] font-medium">React & TypeScript</span>, ensuring 
          applications are rock-solid and scalable.
        </motion.p>
      </div>
    </div>
  );
};

export default PageOneCard;