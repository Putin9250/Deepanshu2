import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/react.svg"; // Adjust this path as needed

const navLinks = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "About", href: "#about" },
  { id: 3, title: "Projects", href: "#projects" },
  { id: 4, title: "Skills", href: "#skills" },
  { id: 5, title: "Certifications", href: "#certifications" }, // ✅ Fixed lowercase
  { id: 6, title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef();
  const navRef = useRef();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("section"));
      const navHeight = navRef.current?.offsetHeight || 0;
      const scrollY = window.scrollY + navHeight + 5;

      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section) continue;
        const top = section.offsetTop;
        if (scrollY >= top) {
          current = section.getAttribute("id") || current;
          break;
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = navRef.current?.offsetHeight || 0;
      const sectionTop = section.offsetTop - navHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
      closeMenu();
    }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={Logo} alt="logo" className="w-8 h-8 dark:invert" />
            <span className="text-gray-900 dark:text-white font-semibold text-lg tracking-wide">
              MyPortfolio
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
              {navLinks.map(({ id, title, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => scrollToSection(e, href)}
                    className={`relative pb-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 ${
                      activeSection === href.substring(1)
                        ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                        : ""
                    }`}
                  >
                    {title}
                    {activeSection === href.substring(1) && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white dark:bg-gray-900 z-[100] text-gray-900 dark:text-gray-100 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={(e) => scrollToSection(e, "#home")}
                >
                  <img src={Logo} alt="logo" className="w-7 h-7 dark:invert" />
                  <span className="font-semibold truncate">MyPortfolio</span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                  aria-label="Close menu"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <ul className="flex-1 p-6 flex flex-col gap-6 text-lg font-medium overflow-y-auto">
                {navLinks.map(({ id, title, href }) => (
                  <li key={id}>
                    <a
                      href={href}
                      onClick={(e) => scrollToSection(e, href)}
                      className={`block py-2 px-4 rounded-lg transition cursor-pointer ${
                        activeSection === href.substring(1)
                          ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                  © {new Date().getFullYear()} My Portfolio
                </p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
