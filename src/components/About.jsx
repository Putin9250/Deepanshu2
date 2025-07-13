import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 70 },
    { name: "WordPress", level: 85 },
    { name: "Elementor", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "WooCommerce", level: 80 },
    { name: "SEO", level: 85 },
    { name: "SQL", level: 75 },
    { name: "VS Code", level: 80 },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 scroll-mt-20"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"
          />
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerChildren}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left: Professional Summary */}
          <div>
            <motion.div 
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
            >
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Professional Profile</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Motivated and detail-oriented Web Developer with hands-on experience in creating responsive 
                and user-friendly websites using WordPress, HTML, CSS, Bootstrap, and Elementor. Skilled in 
                implementing SEO strategies such as optimizing meta information, fixing broken links, 
                improving page speed, and managing backlinks. Passionate about building modern, accessible 
                websites and eager to contribute to dynamic development teams.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Key Expertise</h3>
              <div className="space-y-4">
                {[
                  { 
                    title: "Web Development", 
                    items: ["WordPress Development", "Elementor Page Building", "Bootstrap Implementation"] 
                  },
                  { 
                    title: "E-Commerce", 
                    items: ["WooCommerce Integration", "Product Management", "Payment Gateway Setup"] 
                  },
                  { 
                    title: "SEO & Optimization", 
                    items: ["Meta Tag Optimization", "Page Speed Improvement", "Broken Link Resolution"] 
                  },
                  { 
                    title: "Collaboration", 
                    items: ["Client Website Management", "Team Project Coordination", "Deadline-Oriented Development"] 
                  }
                ].map((category, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeIn}
                    className="border-l-2 border-indigo-500 pl-4 py-1"
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{category.title}</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.items.map((item, i) => (
                        <motion.li 
                          key={i}
                          variants={fadeIn}
                          className="flex items-start"
                        >
                          <span className="text-indigo-500 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Skills & Technical Proficiency */}
          <div>
            <motion.div 
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
            >
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Technical Proficiency</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div 
                        className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={staggerChildren}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div 
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3">Developer Tools</h3>
                <ul className="space-y-2">
                  {["Visual Studio Code", "Notepad++", "FileZilla", "Git & GitHub"].map((tool, idx) => (
                    <motion.li 
                      key={idx}
                      variants={fadeIn}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3">Soft Skills</h3>
                <ul className="space-y-2">
                  {["MS Office", "Power BI", "Digital Literacy", "Teamwork", "Leadership", "Problem Solving"].map((skill, idx) => (
                    <motion.li 
                      key={idx}
                      variants={fadeIn}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;