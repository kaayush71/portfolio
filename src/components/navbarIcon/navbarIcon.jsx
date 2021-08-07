import React from 'react';
import styles from './navbarIcon.module.scss';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

const Navbar = ({ home, user, portfolio, contact, blog, text }) => {
  return (
    <div className={styles.iconbox}>
      {home && <FaHome className={styles.iconbox_icon} />}
      {user && <FaUser className={styles.iconbox_icon} />}
      {portfolio && <FaBriefcase className={styles.iconbox_icon} />}
      {contact && <FaEnvelope className={styles.iconbox_icon} />}
      {blog && <FaComment className={styles.iconbox_icon} />}

      <div className={styles.iconbox_link}>
        <h2 className={styles.iconbox_link__text}>{text}</h2>
      </div>
    </div>
  );
};

export default Navbar;
