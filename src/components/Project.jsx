import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p2.png";

const projects = [
  {
    title: "iResQ – Apple Device Service Center Website",
    img: P2,
    description:
      "A professional and responsive website built for iResQ, a certified Apple service center in Bangalore. The site highlights their technical expertise, customer-first philosophy, service offerings (iPhone, iMac, iPad, MacBook), and includes detailed FAQs, contact information, and a modern UI optimized for conversions.",
    link: "https://iresqindia.com/",
  },
  {
    title: "TechLife – Electronics Repair & Services Website",
    img: P1,
    description:
      "A modern, responsive website for TechLife, an electronics repair business in New York. The platform includes service descriptions, contact forms, repair process overview, testimonials, and detailed business info with working hours and multiple service offerings.",
    link: "https://techlife.strongholdthemes.com/demos/demo2/",
  },
  {
    title: "Consectetur Adipiscing",
    img: P3,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "https://example.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 scroll-mt-20"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 mx-auto rounded-full bg-blue-500"
          />
        </div>

        <div className="grid left-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl truncate font-semibold mb-2 text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-700 truncatemb-4">
                  {project.description}
                </p>
              </div>
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-200"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
