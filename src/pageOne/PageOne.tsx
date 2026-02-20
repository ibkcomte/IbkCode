import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import PageOneCard from "../pageOne/PageOneCard";
import passport from "../assets/passport.jpg";

const PageOne: React.FC = () => {
  const handleScroll = () => {
    const contactSection = document.getElementById("projects"); 
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="pageOne"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-[80vh] flex flex-col md:flex-row gap-12 items-center justify-between p-8 md:p-16 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Text/Card Content */}
      <motion.div variants={itemVariants} className="flex-1 z-10">
        <PageOneCard name="Ibukun Dada" role="Developer" />
        
        {/* Mobile-only Image (Optional: shows a smaller version on mobile) */}
        <div className="mt-8 md:hidden">
           <img 
            src={passport} 
            className="w-32 h-32 rounded-full object-cover border-4 border-lemon-400" 
            alt="Ibukun Dada"
          />
        </div>
      </motion.div>

      {/* Desktop Image with Floating Animation */}
      <motion.div 
        variants={itemVariants}
        className="hidden md:block flex-1 max-w-md"
      >
        <motion.div
          
          
          className="relative"
        >
          <div className="absolute inset-0 bg-lemon-400/20 blur-3xl rounded-full" />
          <img
            src={passport}
            alt="Dada Ibukun, Professional Developer"
            className="relative w-full aspect-square rounded-2xl object-cover  hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </motion.div>

      {/* Animated Scroll Button */}
      <motion.button
        variants={itemVariants}
        onClick={handleScroll}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-slate-500 group-hover:text-lemon-500 transition-colors">
          View Projects
        </span>
        <div className="p-2 rounded-full border border-slate-200 dark:border-slate-800 group-hover:border-lemon-400 transition-colors">
          <ArrowDown size={20} className="animate-bounce text-slate-600 dark:text-slate-400 group-hover:text-lemon-500" />
        </div>
      </motion.button>
    </motion.section>
  );
};

export default PageOne;