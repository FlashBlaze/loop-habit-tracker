import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import headerStyles from './styles.module.scss';

const Header = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      className={headerStyles.header}
    >
      <h1>
        <Link to="/" className={headerStyles.title}>
          Loop - Habit Tracker
        </Link>
      </h1>
      <nav>
        <a href="#download" className={headerStyles.downloadText}>
          Download
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
