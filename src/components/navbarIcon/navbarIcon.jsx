import React, { useState } from 'react';
import styles from './navbarIcon.module.scss';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

const Navbar = ({ home, user, portfolio, contact, blog, text, path }) => {
  const [active, setActive] = useState();

  function handleClick() {
    // home = false;
    setActive(true);
  }
  return (
    <div
      onClick={() => handleClick()}
      className={
        active
          ? styles.iconbox_active
          : // : home
            // ? styles.iconbox_active
            styles.iconbox
      }
    >
      {home && <FaHome className={styles.iconbox_icon} />}
      {user && <FaUser className={styles.iconbox_icon} />}
      {portfolio && <FaBriefcase className={styles.iconbox_icon} />}
      {contact && <FaEnvelope className={styles.iconbox_icon} />}
      {blog && <FaComment className={styles.iconbox_icon} />}

      <Link to={path} className={styles.iconbox_link}>
        <h2 className={styles.iconbox_link__text}>{text}</h2>
      </Link>
    </div>
  );
};

export default Navbar;
