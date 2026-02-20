import React from "react";

import { motion } from "framer-motion";
import { Code2, User, Briefcase, Download } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const AboutMe: React.FC = () => {
  const handleScroll = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="AboutMe"
      className="bg-white dark:bg-slate-950 py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div
          className="inline-block cursor-pointer group"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            ABOUT{" "}
            <span className="text-[#00CED1] font-serif italic group-hover:text-lemon-400 transition-colors">
              ME
            </span>
          </h2>
          <div className="w-16 h-1 bg-lemon-400 mx-auto mt-4 rounded-full group-hover:w-full transition-all duration-300" />
        </div>
      </motion.div>
      <motion.div className="space-y-8">
        <div className="space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-[#00CED1]/10 text-[#00CED1] text-sm font-bold tracking-widest uppercase">
            The Hybrid Developer
          </span>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800 dark:text-slate-100">
            Software Developer <br />
            <span className="text-slate-400 font-light">&</span> Business Logic
            (MBA)
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I don't just build features; I build solutions that align with
            market needs. My goal is to bridge the gap between complex technical
            architecture and strategic business growth.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.button
          onClick={handleScroll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00CED1] hover:bg-[#00b3b5] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-teal-200 dark:shadow-none"
          >
            Get in Touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-slate-800 dark:text-white hover:border-[#00CED1] px-8 py-4 rounded-xl font-bold transition-all"
          >
            <Download size={18} />
            Download CV
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 mt-11 items-center"
      >
        <ServiceCard
          icon={<Code2 className="w-6 h-6" />}
          title="Modern Engineering"
          description="I build responsive user interfaces with React and TypeScript. I focus on clean architecture and RESTful API integration."
        />
        <ServiceCard
          icon={<User className="w-6 h-6" />}
          title="UI/UX Structure"
          description="Engineering sites that work flawlessly across all devices while maintaining a keen interest in logical site structure."
        />
        <ServiceCard
          icon={<Briefcase className="w-6 h-6" />}
          title="Business Alignment"
          description="Leveraging my MBA to align technical decisions with long-term brand scalability and business growth goals."
        />
      </motion.div>
    </section>
  );
};

/* Sub-component for Service Cards to keep code DRY */
const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -5, borderColor: "#00CED1" }}
    className="group p-6 rounded-2xl border-2 border-slate-50 dark:border-slate-900 bg-white dark:bg-slate-900/50 shadow-sm transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 shrink-0 bg-[#d5feff] dark:bg-[#00CED1]/10 rounded-xl flex items-center justify-center text-[#00CED1] group-hover:bg-[#00CED1] group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default AboutMe;
