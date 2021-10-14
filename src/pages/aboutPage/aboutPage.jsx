import React from 'react';
import styles from './aboutPage.module.scss';
import { TiArrowRightThick } from 'react-icons/ti';
import { FaBriefcase } from 'react-icons/fa';
import pdf from '../../assets/myresume.pdf';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import ProgressBar from '../../components/progressBar/progressBar';

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <div className={styles.about_container}>
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
                  <span className={styles.subtext}>
                    {' '}
                    kaayush.ak71@gmail.com
                  </span>
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
                <p className={styles.right_card__text}>
                  Hackathons participated
                </p>
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
              <div className={styles.progress}>
                <CircularProgressbar
                  value={66}
                  text={'66%'}
                  styles={buildStyles({
                    pathColor: '#e94b3cff',
                    textColor: '#fff',
                    textSize: '20px',
                    trailColor: '#252525',
                  })}
                />
                <p className={styles.progress_text}>HTML</p>
              </div>
              <div className={styles.progress}>
                <CircularProgressbar
                  value={66}
                  text={'66%'}
                  styles={buildStyles({
                    pathColor: '#e94b3cff',
                    textColor: '#fff',
                    textSize: '20px',
                    trailColor: '#252525',
                  })}
                />
                <p className={styles.progress_text}>HTML</p>
              </div>
              <div className={styles.progress}>
                <CircularProgressbar
                  value={66}
                  text={'66%'}
                  styles={buildStyles({
                    pathColor: '#e94b3cff',
                    textColor: '#fff',
                    textSize: '20px',
                    trailColor: '#252525',
                  })}
                />
                <p className={styles.progress_text}>HTML</p>
              </div>
              <div className={styles.progress}>
                <CircularProgressbar
                  value={66}
                  text={'66%'}
                  styles={buildStyles({
                    pathColor: '#e94b3cff',
                    textColor: '#fff',
                    textSize: '20px',
                    trailColor: '#252525',
                  })}
                />
                <p className={styles.progress_text}>HTML</p>
              </div>
              <div className={styles.progress}>
                <CircularProgressbar
                  value={66}
                  text={'66%'}
                  styles={buildStyles({
                    pathColor: '#e94b3cff',
                    textColor: '#fff',
                    textSize: '20px',
                    trailColor: '#252525',
                  })}
                />
                <p className={styles.progress_text}>HTML</p>
              </div>
              <div className={styles.progress}>
                <CircularProgressbar
                  value={66}
                  text={'66%'}
                  styles={buildStyles({
                    pathColor: '#e94b3cff',
                    textColor: '#fff',
                    textSize: '20px',
                    trailColor: '#252525',
                  })}
                />
                <p className={styles.progress_text}>HTML</p>
              </div>
              <div className={styles.progress}>
                <CircularProgressbar
                  value={66}
                  text={'66%'}
                  styles={buildStyles({
                    pathColor: '#e94b3cff',
                    textColor: '#fff',
                    textSize: '20px',
                    trailColor: '#252525',
                  })}
                />
                <p className={styles.progress_text}>HTML</p>
              </div>
              <div className={styles.progress}>
                <CircularProgressbar
                  value={66}
                  text={'66%'}
                  styles={buildStyles({
                    pathColor: '#e94b3cff',
                    textColor: '#fff',
                    textSize: '20px',
                    trailColor: '#252525',
                  })}
                />
                <p className={styles.progress_text}>HTML</p>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.seperator} />
        {/* ====================================================================== */}
        <div className={styles.exp}>
          <h1 className={styles.exp__title}>EXPERIENCE & EDUCATION</h1>
          <div className={styles.exp_wrapper}>
            <div className={styles.experience}>Aayush</div>
            <div className={styles.education}>Kumar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
