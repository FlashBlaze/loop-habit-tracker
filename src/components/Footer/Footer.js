import React from 'react';

import githubLogo from '../../../static/github.svg';
import footerStyles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div>
        <p>
          Made with{' '}
          <span role="img" aria-label="Heart Emoji">
            ❤️
          </span>{' '}
          by Neeraj Lagwankar
        </p>
      </div>

      <div className={footerStyles.info}>
        <a
          href="https://github.com/FlashBlaze/loop-habit-tracker"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={githubLogo}
            alt="GitHub Logo"
            style={{ color: '#ffffff', fill: '#ffffff' }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
