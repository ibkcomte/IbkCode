import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react"; 
import ibkCodelogo from "./assets/ibkCodelogo.png"
type Theme = "light" | "dark";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    // Check local storage or system preference on initial load
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme;
      return (
        saved ||
        window.matchMedia("(prefers-color-scheme: dark)").matches ?  "light" : "dark" 
      );
    }
    return "light";
  });

  useEffect(() => {
  const root = window.document.documentElement;
  
  if (theme === "dark") { 
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}, [theme]);
  

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const navLinks = [
    { name: "Home", href: "#pageOne" },
    { name: "About", href: "#AboutMe" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#ProjectSection" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-slate-950 backdrop-blur-md dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
          <img src={ibkCodelogo} alt="Logo" className="font-bold h-12 w-12 hue-rotate-[60deg] saturate-150 dark:text-[#00b3b5]"
              
            />
            <div className="text-center text-[#062427] dark:text-slate-300">
          <p className="text-lg font-black tracking-tighter pl-3">
            IBK<span className=" dark:text-[#00CED1] italic">CODES</span>
          </p>
        </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black font-bold dark:text-slate-100 hover:text-lime-600 dark:hover:text-white px-3 py-2 text-sm  transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-[#00CED1] hover:ring-2 transition-all"
              aria-label="Toggle Theme"
            >
               {theme === "light" ? <Moon size={20} /> : <Sun size={20} />} 
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
