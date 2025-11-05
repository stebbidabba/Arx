import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      id="verkefni"
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Okkar <span className="text-[#9c54f3]">Verkefni</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-20 md:gap-32"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            className="flex items-center justify-center"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_arxdigital-team/artifacts/rwqa9c5t_Untitled%20design%20-%202025-10-31T204748.024.png"
              alt="Verki Logo"
              className="w-80 h-auto object-contain"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            className="flex items-center justify-center"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_arxdigital-team/artifacts/k1k14gzr_Kaggi%20%284%29%20%281%29.png"
              alt="Kaggi Logo"
              className="w-80 h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;