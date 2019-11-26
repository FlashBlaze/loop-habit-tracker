import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './styles.module.scss';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          Loop - Habit Tracker
        </Link>
      </h1>
      <nav>
        <Link to="/" className={headerStyles.downloadText}>
          Download
        </Link>
      </nav>
    </header>
  );
};

export default Header;
