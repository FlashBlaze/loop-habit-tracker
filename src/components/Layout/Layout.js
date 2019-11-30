import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import layoutStyles from './styles.module.scss';

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
