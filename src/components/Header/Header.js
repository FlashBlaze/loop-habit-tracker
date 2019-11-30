import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './styles.module.scss';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h2>
        <Link to="/" className={headerStyles.title}>
          Loop - Habit Tracker
        </Link>
      </h2>

      <nav>
        <a href="#download" className={headerStyles.downloadText}>
          Download
        </a>
      </nav>
    </header>
  );
};

export default Header;
