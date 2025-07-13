import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section ref={ref} id="skills" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
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
            Skills
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 dark:text-gray-200"
        >
          {/* Skill Category Blocks */}
          {[
            {
              title: "💻 Web Development",
              items: [
                "Languages: HTML, CSS, JavaScript (Basic), SQL",
                "Frameworks & Libraries: Bootstrap",
                "CMS: WordPress, Elementor, WooCommerce"
              ]
            },
            {
              title: "🛠️ Developer Tools",
              items: ["Visual Studio Code", "Notepad++", "FileZilla"]
            },
            {
              title: "📈 SEO & Web Optimization",
              items: [
                "Meta Tags & Structured Data",
                "Page Speed Optimization",
                "Broken Link Fixing",
                "Backlink Management"
              ]
            },
            {
              title: "📊 Office & Digital Tools",
              items: ["MS Office", "Power BI", "VBA (Visual Basic for Applications)"]
            },
            {
              title: "🌐 Cloud & Security",
              items: ["AWS Cloud (Basic)", "Digital Literacy", "Cyber Security Fundamentals"]
            },
            {
              title: "🤝 Soft Skills",
              items: ["Teamwork", "Leadership", "Employability Skills", "Communication"]
            }
          ].map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                {skillGroup.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {skillGroup.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
