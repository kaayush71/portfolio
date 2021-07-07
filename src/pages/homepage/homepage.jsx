import React from 'react';
import styles from './homepage.module.scss';
import Personal from '../../assets/personal.png';

const Homepage = () => {
  return (
    <section className={styles.homepage}>
      <div className={styles.left}></div>
      <div className={styles.hero}>
        <div className={styles.hero_left}>
          <img className={styles.hero_left__img} src={Personal} alt="me" />
        </div>
        <div className={styles.hero_right}>
          {/* <img alt="mobile" /> */}
          <h1 className={styles.heading}>
            I'M Aayush Kumar.
            <span className={styles.heading_sub} style={{ display: 'block' }}>
              Web Developer
            </span>
          </h1>
          <p className={styles.subheading}>
            Hello i am full stack developer from Bangalore India currently
            pursuing B-tech from NMIT Bangalore. I am very passionate about tech
            related stuffs and always looking to learn new things.
          </p>
          <a href="/" className={styles.button}>
            <span className={styles.button_text}>More About Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
