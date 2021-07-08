import React from 'react';
import styles from './aboutPage.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.heading}>
          ABOUT <span className={styles.heading_sub}>ME</span>
        </h1>
        <span className={styles.sub}>Resume</span>
      </div>
    </div>
  );
}
