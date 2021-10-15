import React from 'react';
import styles from './workPage.module.scss';
import todo from '../../assets/todo.png';
import venrate from '../../assets/venrate.png';
import weather from '../../assets/weather.png';
import url from '../../assets/url.png';
import portfolio from '../../assets/portfolio.png';
import hastebin from '../../assets/hastebin.png';
import currency from '../../assets/currency.png';

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
        <div className={styles.grid}>
          <div data-aos="fade-right" className={styles.card}>
            <img className={styles.card_img} src={venrate} alt="todo" />
            <h1 className={styles.card_title}>Venrate</h1>
            <div className={styles.card_sub}>
              <p>Nuxt Js</p>
              <p>Ceramic Blockchain</p>
            </div>
          </div>
          <div data-aos="fade-left" className={styles.card}>
            <img className={styles.card_img} src={todo} alt="todo" />
            <h1 className={styles.card_title}>Todo App</h1>
            <div className={styles.card_sub}>
              <p>React Js</p>
              <p>Firebase Firestore</p>
            </div>
          </div>
          <div data-aos="fade-right" className={styles.card}>
            <img className={styles.card_img} src={weather} alt="weather" />
            <h1 className={styles.card_title}>Weather App</h1>
            <div className={styles.card_sub}>
              <p>React Js</p>
            </div>
          </div>
          <div data-aos="fade-left" className={styles.card}>
            <img className={styles.card_img} src={url} alt="weather" />
            <h1 className={styles.card_title}>Url Shortner</h1>
            <div className={styles.card_sub}>
              <p>React Js</p>
              <p>Express Js</p>
              <p>Mongodb Atlas</p>
            </div>
          </div>
          <div data-aos="fade-right" className={styles.card}>
            <img className={styles.card_img} src={portfolio} alt="weather" />
            <h1 className={styles.card_title}>Portfolio</h1>
            <div className={styles.card_sub}>
              <p>React Js</p>
            </div>
          </div>
          <div data-aos="fade-left" className={styles.card}>
            <img className={styles.card_img} src={hastebin} alt="weather" />
            <h1 className={styles.card_title}>Hastebin Clone</h1>
            <div className={styles.card_sub}>
              <p>React Js</p>
              <p>Mongodb</p>
            </div>
          </div>
          <div data-aos="fade-right" className={styles.card}>
            <img className={styles.card_img} src={currency} alt="weather" />
            <h1 className={styles.card_title}>Currency Converter</h1>
            <div className={styles.card_sub}>
              <p>React Js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
