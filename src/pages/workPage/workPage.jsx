import React from 'react';
import styles from './workPage.module.scss';

export default function WorkPage() {
  return (
    <div className={styles.work}>
      <div className={styles.work_container}>
        <div className={styles.title}>
          <h1 data-aos="fade-up" className={styles.heading}>
            MY <span className={styles.heading_sub}>PORTFOLIO</span>
          </h1>
          <span className={styles.sub}>Works</span>
        </div>
      </div>
    </div>
  );
}
