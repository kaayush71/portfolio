import React from 'react';
import styles from './navbar.module.scss';
import NavbarIcon from '../navbarIcon/navbarIcon';

export default function Navbar() {
  return (
    <section>
      {/* Desktop Navbar  */}
      <div className={styles.dcontainer}>
        <NavbarIcon home text="home" path="/" />
        <NavbarIcon user text="user" path="/about" />
        <NavbarIcon portfolio text="portfolio" path="/work" />
        <NavbarIcon contact text="contact" path="/contact" />
        <NavbarIcon blog text="blogs" path="/blog" />
      </div>
    </section>
  );
}
