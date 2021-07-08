import React from 'react';
import styles from './navbar.module.scss';
import NavbarIcon from '../navbarIcon/navbarIcon';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <section>
      {/* Desktop Navbar  */}
      <div className={styles.dcontainer}>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.active}
        >
          <NavbarIcon home text="home" path="/" />
        </NavLink>
        <NavLink
          className={styles.link}
          exact
          to="/about"
          activeClassName={styles.active}
        >
          <NavbarIcon user text="user" path="/about" />
        </NavLink>
        <NavLink
          className={styles.link}
          exact
          to="/work"
          activeClassName={styles.active}
        >
          <NavbarIcon portfolio text="portfolio" path="/work" />
        </NavLink>

        <NavLink
          className={styles.link}
          exact
          to="/contact"
          activeClassName={styles.active}
        >
          <NavbarIcon contact text="contact" path="/contact" />
        </NavLink>
        <NavLink
          className={styles.link}
          exact
          to="/blog"
          activeClassName={styles.active}
        >
          <NavbarIcon blog text="blogs" path="/blog" />
        </NavLink>
      </div>
    </section>
  );
}
