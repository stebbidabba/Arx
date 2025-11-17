import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 relative"
      style={{
        background: 'linear-gradient(to bottom, rgba(244, 241, 255, 1) 0%, rgba(247, 244, 255, 0.7) 30%, rgba(250, 248, 255, 0.3) 70%, transparent 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="https://customer-assets.emergentagent.com/job_arxdigital-team/artifacts/buz37x96_noBgColor.svg"
              alt="ArxDigital Logo"
              className="h-16 w-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;