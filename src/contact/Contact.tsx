import React, { useState } from "react";
import { motion , AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  User, 
  Mail, 
  Send,
  CheckCircle2
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }

};

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here is where you'd normally send the data to a backend or service like Formspree
    console.log("Form Submitted!");
    
    // 4. Trigger the success view
    setSubmitted(true);
  };
  return (
    <section id="contact" className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-16 lg:p-24 flex justify-center items-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden border border-white/20"
      >
        
        {/* Left Column: Contact Info */}
        <div className="lg:w-2/5 p-8 md:p-12 lg:p-16 bg-slate-900 text-white relative">
          {/* Decorative Lime Glow */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-lime-400/10 blur-3xl rounded-full" />
          
          <motion.div className="relative z-10 space-y-12">
            <header className="space-y-2">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-[#00CED1]">
                Contact Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold italic font-serif">
                Let's <span className="text-[#00CED1]">Talk</span>
              </h3>
            </header>

            <div className="space-y-8">
              <ContactDetail 
                icon={<MapPin size={20} />} 
                label="Address" 
                value="Lagos, Nigeria." 
              />
              <ContactDetail 
                icon={<User size={20} />} 
                label="Freelance" 
                value="Available Right Now" 
                isStatus 
              />
              <ContactDetail 
                icon={<Mail size={20} />} 
                label="Email" 
                value="cathycomte30@gmail.com" 
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 bg-white dark:bg-transparent">
          <motion.form  key="contact-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit} // 5. Attach the submit handler
                className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <CustomInput label="Your Full Name" id="name" type="text" placeholder="John Doe" />
              <CustomInput label="Your Email Address" id="email" type="email" placeholder="john@example.com" />
            </div>

            <CustomInput label="Your Subject" id="subject" type="text" placeholder="Project Inquiry" />

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Your Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-[#00CED1] rounded-2xl transition-all outline-none text-slate-800 dark:text-white resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                
              </label>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto bg-[#00CED1] hover:bg-[#00CED1] text-white hover:text-slate-900 font-black py-4 px-10 rounded-2xl transition-all shadow-xl shadow-teal-500/20 flex items-center justify-center gap-3"
              >
                SEND MESSAGE
                <Send size={18} />
              </motion.button>
            </div>
          </motion.form>
          <AnimatePresence mode="wait">
            {!submitted ? (
              // THE FORM
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit} // 5. Attach the submit handler
                className="space-y-8"
              >
          
              
              </motion.form>
            ) : (
              // THE SUCCESS MESSAGE
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-lime-400/20 text-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white">
                  Thank <span className="text-[#00CED1]">You!</span>
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  Your message has been received. <br /> 
                  I'll get back to you!
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-bold text-[#00CED1] hover:underline pt-4"
                >
                  Send another message?
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

/* Helper Components */
const ContactDetail = ({ icon, label, value, isStatus }: any) => (
  <div className="flex items-center gap-5">
    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#00CED1] border border-white/10 group-hover:bg-lime-400 group-hover:text-slate-900 transition-all">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</p>
      <p className={`font-bold ${isStatus ? "text-[#00CED1]" : "text-white"}`}>{value}</p>
    </div>
  </div>
);

const CustomInput = ({ label, id, type, placeholder }: any) => (
  <div className="space-y-2 group">
    <label htmlFor={id} className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 transition-colors group-focus-within:text-lime-100">
      {label} *
    </label>
    <input
      type={type}
      id={id}
      required
      placeholder={placeholder}
      className="w-full pb-3 bg-transparent border-b-2 border-slate-100 dark:border-slate-800 focus:border-[#00CED1] outline-none transition-all text-slate-800 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700"
    />
  </div>
);

export default Contact;