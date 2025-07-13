import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const skills = ["HTML", "CSS", "WordPress", "Bootstrap", "Elementor", "SEO"];

  return (
    <>
    <div 
      id="home" style={{ height: "64px", marginTop: "-64px" }}
    ></div>
    <section
      className="relative flex flex-col justify-center items-center px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating circles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-indigo-200 dark:border-indigo-900/50"
            style={{
              width: `${Math.random() * 150 + 30}px`,
              height: `${Math.random() * 150 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient blob */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-800/30 dark:to-purple-800/30 filter blur-3xl opacity-30 dark:opacity-20"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium"
            >
              Web Developer & WordPress Specialist
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Deepanshu Jain
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
            >
              I build responsive websites with a focus on{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                clean UI
              </strong>
              , optimized{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                SEO
              </strong>
              , and{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                high performance
              </strong>{" "}
              using HTML, CSS, Bootstrap, WordPress, and Elementor.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/deepanshu-jain-057874302/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg transition shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Connect on LinkedIn
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-medium py-2.5 px-5 rounded-lg transition text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>Delhi, India</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a href="tel:+919138717026" className="hover:underline">
                  +91 9138717026
                </a>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:deepanshujain7026@gmail.com"
                  className="hover:underline"
                >
                  deepanshujain7026@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column with visual elements */}
          {/* Right column with visual elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mt-12 lg:mt-0 flex flex-col items-center lg:items-start"
          >
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none pb-16 lg:pb-8">
              {/* Main profile circle */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-6 border-white dark:border-gray-800 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-center text-white text-xl sm:text-2xl font-bold">
                    Deep J.
                  </div>
                </div>
              </div>

              {/* Floating skill badges - Large screens (lg and up) */}
              <div className="hidden lg:block relative w-full h-[280px] mt-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white dark:bg-gray-800 shadow-lg rounded-full px-3 py-1.5 flex items-center font-medium text-xs sm:text-sm"
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: Math.cos(i * 1.047) * 110,
                      y: Math.sin(i * 1.047) * 110,
                    }}
                    transition={{
                      delay: 0.6 + i * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mr-1.5"></div>
                    {skill}
                  </motion.div>
                ))}
              </div>

              {/* Skills grid - Mobile and tablet (below lg) */}
              <div className="mt-8 grid grid-cols-3 gap-3 lg:hidden">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 shadow rounded-full px-3 py-1.5 flex items-center justify-center font-medium text-xs"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mr-1.5"></div>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 lg:bottom-8 flex flex-col items-center"
      >
        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-indigo-600 dark:border-indigo-400 rotate-45"
        />
      </motion.div>
    </section>
    </>
  );
};

export default Hero;
