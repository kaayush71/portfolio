import React from 'react';
import styles from './aboutPage.module.scss';
import { TiArrowRightThick } from 'react-icons/ti';
import pdf from '../../assets/resume.pdf';

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h1 data-aos="fade-up" className={styles.heading}>
          ABOUT <span className={styles.heading_sub}>ME</span>
        </h1>
        <span className={styles.sub}>Resume</span>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h3 className={styles.heading}>Personal Info</h3>
            <div className={styles.info}>
              <p>
                <span className={styles.text}>First Name :</span>
                <span className={styles.subtext}> Aayush</span>
              </p>
              <p>
                <span className={styles.text}>Address :</span>
                <span className={styles.subtext}> Bangalore</span>
              </p>
            </div>
            <div className={styles.info}>
              <p>
                <span className={styles.text}>Last Name :</span>
                <span className={styles.subtext}> Kumar</span>
              </p>
              <p>
                <span className={styles.text}>Email :</span>
                <span className={styles.subtext}> kaayush.ak71@gmail.com</span>
              </p>
            </div>
            <div className={styles.info}>
              <p>
                <span className={styles.text}>Age :</span>
                <span className={styles.subtext}> 21 Years</span>
              </p>
              <p>
                <span className={styles.text}>Freelance :</span>
                <span className={styles.subtext}> Available</span>
              </p>
            </div>
            <div className={styles.info}>
              <p>
                <span className={styles.text}>Nationality :</span>
                <span className={styles.subtext}> Indian</span>
              </p>
              <p>
                <span className={styles.text}>Languages :</span>
                <span className={styles.subtext}> English</span>
              </p>
            </div>
            <div className={styles.button_con}>
              <a href={pdf} download="resume" className={styles.button}>
                <span className={styles.button_text}>Download Resume</span>
                <span className={styles.button_icon}>
                  <TiArrowRightThick />
                </span>
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.right_card}>
              <h3 className={styles.right_card__heading}>15</h3>
              <p className={styles.right_card__text}>Completed Projects</p>
            </div>
            <div className={styles.right_card}>
              <h3 className={styles.right_card__heading}>2</h3>
              <p className={styles.right_card__text}>years of experience</p>
            </div>
            <div className={styles.right_card}>
              <h3 className={styles.right_card__heading}>5</h3>
              <p className={styles.right_card__text}>Hackathons participated</p>
            </div>
            <div className={styles.right_card}>
              <h3 className={styles.right_card__heading}>1</h3>
              <p className={styles.right_card__text}>Internships</p>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.seperator} />
      {/* ========================================================================== */}
      <div className={styles.container}>
        <div className={styles.skills}>
          <h1 className={styles.skills__title}>My Skills</h1>
          <div className={styles.skills_wrapper}>
            <p>A</p>
            <p>b</p>
            <p>c</p>
            <p>d</p>
            <p>e</p>
            <p>f</p>
          </div>
        </div>
      </div>
    </div>
  );
}
