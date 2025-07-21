import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Import images (replace with your actual certificate images)
import cert1 from "../assets/IMG-20250716-WA0003.jpg";
import cert2 from "../assets/IMG-20250716-WA0004.jpg";
import cert3 from "../assets/IMG-20250716-WA0006.jpg";
import cert4 from "../assets/IMG-20250716-WA0008.jpg";
import cert5 from "../assets/IMG-20250716-WA0005.jpg";
import cert6 from "../assets/IMG-20250716-WA0007.jpg";
import cert7 from "../assets/IMG-20250716-WA0001.jpg";
import cert8 from "../assets/IMG-20250716-WA0002.jpg";

const certificates = [
  {
    id: 1,
    title: "Cloud Practitioner Essentials",
    img: cert1,
    issuer: "Amazon Web Services",
    date: "Aug 2024",
    skills: ["AWS", "EC2", "Cloud Compute"],
  },
  {
    id: 2,
    title: "Skill Saksham  Trainee",
    img: cert2,
    issuer: "MicroSoft",
    date: "Jul 2023",
    skills: ["Effective Communication", "Problem-Solving", "Teamwork", "Professional Development"],
  },
  {
    id: 3,
    title: "ITI Certificate",
    img: cert3,
    issuer: "NCVT ITI COPA",
    date: "Sep 2024",
    skills: ["HTML5", "CSS3", "Responsive"],
  },
  {
    id: 4,
    title: "Word Press & SEO Intern",
    img: cert4,
    issuer: "JSM Digital Marketing",
    date: "July 2025",
    skills: ["SEO", "Word Press", "Back Links"],
  },
  {
    id: 5,
    title: "DCA",
    img: cert5,
    issuer: "Best Computer Technology",
    date: "Feb 2025",
    skills: ["Fronted Devlopment", "Web Devlopment", "Responsive"],
  },
  {
    id: 6,
    title: "NCC-A Certificate",
    img: cert6,
    issuer: "NCC",
    date: "Jun 2023",
    skills: ["GD", "Discipline", ],
  },
  {
    id: 7,
    title: "Tally Prime",
    img: cert7,
    issuer: "STP Computer Education",
    date: "Aug 2024",
    skills: ["Tally Prime", ],
  },
  {
    id: 8,
    title: "Advance Excel",
    img: cert8,
    issuer: "STP Computer Education",
    date: "Jun 2024",
    skills: ["Advance Excel", ],
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const ref = useRef(null);

  // Use a more lenient threshold for mobile
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -50px 0px",
    amount: "some",
  });

  // Download handler
  const handleDownload = (imgSrc, title) => {
    const link = document.createElement("a");
    link.href = imgSrc;
    link.download = `${title.replace(/\s+/g, "_")}_certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={ref}
      id="certifications"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-20"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Certifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "140px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"
          />
        </div>

        {/* Certificates grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeIn}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              }}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-48 sm:h-56 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg truncate font-semibold text-gray-900 dark:text-white mb-1"
                >
                  {cert.title}
                </h3>
                <p className="text-sm truncate text-gray-600 dark:text-gray-400">
                  Issued by {cert.issuer} <br /> {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedCert(null)}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                exit: { opacity: 0 },
              }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
                onClick={(e) => e.stopPropagation()}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="h-[50vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
                  <img
                    src={selectedCert.img}
                    alt={selectedCert.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedCert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Issued by {selectedCert.issuer} • {selectedCert.date}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        handleDownload(selectedCert.img, selectedCert.title)
                      }
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download
                    </button>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-300">
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;
