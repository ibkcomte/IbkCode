import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#00CED1] dark:bg-slate-900 pt-10 pb-6 px-4 md:px-10 lg:px-20 overflow-hidden border-t-4 border-lime-200">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 3 + i, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
        
        {/* Social Links */}
        <div className="flex gap-4">
          <SocialIcon href="https://github.com/ibkcomte" icon={<Github size={20} />} />
          <SocialIcon href="https://linkedin.com/in/ibkdada" icon={<Linkedin size={20} />} />
          {/* <SocialIcon href="https://twitter.com" icon={<Twitter size={20} />} /> */}
          <SocialIcon href="mailto:cathycomte30@gmail.com" icon={<Mail size={20} />} />
        </div>

        {/* Copyright Text */}
        <div className="text-center text-[#062427] dark:text-slate-300">
          <p className="text-lg font-black tracking-tighter">
            IBK<span className="text-white dark:text-[#00CED1] italic">CODES</span>
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-70">
            © {currentYear} • All Rights Reserved
          </p>
        </div>

        {/* Improved Back to Top */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center group"
        >
          <div className="bg-black/10 dark:bg-white/10 p-3 rounded-2xl mb-2 group-hover:bg-[#00CED1] transition-colors duration-300">
            <ArrowUp size={20} className="text-[#062427] dark:text-white group-hover:text-slate-900" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#062427] dark:text-slate-400">
            Top
          </span>
        </motion.button>
      </div>

      {/* Subtle Bottom Credit */}
      <div className="mt-12 text-center border-t border-black/5 dark:border-white/5 pt-6">
        <p className="text-[10px] text-[#062427]/40 dark:text-slate-500 font-medium">
          Designed with Purpose & Coded with React
        </p>
      </div>
    </footer>
  );
};

/* Helper Component for Social Icons */
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 text-[#062427] dark:text-white transition-colors"
  >
    {icon}
  </motion.a>
);

export default Footer;