import React from "react";
import { motion } from "framer-motion";
// ... your existing ServiceCard component starts here
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  // Optional variants if you want to control them from a parent container

}

// Internal default animation if no variants are passed from parent
const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={defaultVariants}
      whileHover={{ 
        y: -8, 
        borderColor: "#00CED1",
        boxShadow: "0 20px 25px -5px rgb(0 206 209 / 0.1), 0 8px 10px -6px rgb(0 206 209 / 0.1)" 
      }}
      className="group relative p-8 rounded-3xl border-2 border-slate-50 dark:border-slate-900 bg-white dark:bg-slate-950/50 backdrop-blur-sm transition-all duration-300 overflow-hidden"
    >
      {/* Subtle Background Glow on Hover */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#00CED1]/5 rounded-full blur-2xl group-hover:bg-[#00CED1]/10 transition-colors" />

      <div className="flex flex-col items-start gap-5 relative z-10">
        {/* Icon Container */}
        <div className="w-14 h-14 shrink-0 bg-[#d5feff] dark:bg-[#00CED1]/10 rounded-2xl flex items-center justify-center text-[#00CED1] group-hover:bg-[#00CED1] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
          {React.cloneElement(icon as React.ReactElement, )}
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#00CED1] transition-colors">
            {title}
          </h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
        
        {/* Animated Bottom Line */}
        <div className="w-0 h-1 bg-[#00CED1] rounded-full group-hover:w-12 transition-all duration-500 ease-out" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;