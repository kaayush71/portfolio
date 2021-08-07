import React from 'react';
import styles from './contactPage.module.scss';
import { FaEnvelopeOpen } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        <h1 data-aos="fade-up" className={styles.heading}>
          GET IN <span className={styles.heading_sub}>TOUCH</span>
        </h1>
        <span className={styles.sub}>CONTACT</span>
      </div>
      <div className={styles.main}>
        <div className={styles.main_left}>
          <h2 className={styles.main_left__head}>DON'T BE SHY !</h2>
          <p className={styles.main_left__para}>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className={styles.main_left__con}>
            <FaEnvelopeOpen className={styles.conicons} />
            <p>kaayush.ak71@gmail.com</p>
          </div>
          <div className={styles.main_left__con}>
            <FaPhoneSquare className={styles.conicons} />
            <p>9870275606</p>
          </div>
          <div className={styles.main_left__social}>
            <a
              href="https://github.com/Resolution-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
            <a href="https://twitter.com/Aayush_Miracle">
              <SiTwitter />
            </a>
            <a href="https://www.linkedin.com/in/aayush-kumar-738769195/">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/aayush_kumar0808/">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={styles.main_right}>
          <form className={styles.form}>
            <div className={styles.form_container}>
              <div className={styles.form_input}>
                <input type="text"  placeholder="YOUR NAME" />
                <input type="email"  placeholder="YOUR EMAIL" />
                <input type="text"  placeholder="YOUR SUBJECT" />
              </div>
              <div className={styles.form_container__sub}>
                <textarea className={styles.form_textarea} name="message" placeholder="YOUR MESSAGE" />
                </div>
                <button className={styles.button}>
                  <span className={styles.button_text}>Send Message</span>
                  <span className={styles.button_icon}>
                    <FaPaperPlane />
                  </span>
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
