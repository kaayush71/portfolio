import React from 'react';
import styles from './contactPage.module.scss';

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        <h1 data-aos="fade-up" className={styles.heading}>
          GET IN <span className={styles.heading_sub}>TOUCH</span>
        </h1>
        <span className={styles.sub}>CONTACT</span>
      </div>
    </div>
  );
}
