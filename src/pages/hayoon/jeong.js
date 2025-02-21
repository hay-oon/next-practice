import LondonWeather from "./components/LondonWeather";
import ExchangeRate from "./components/ExchangeRate";
import GithubActivity from "./components/GithubActivity";
import LondonTransport from "./components/LondonTransport";
import DevNews from "./components/DevNews";
import styles from "./Jeong.module.css";
import Image from "next/image";

export default function Hayoon() {
  return (
    <section className={styles.container}>
      <div className={styles.featuredSection}>
        <div className={styles.nameLogoWrapper}>
          <div className={styles.nameWrapper}>
            <div className={styles.nameLine}>
              <span className={styles.nameChar + " " + styles.black}>H</span>
              <span className={styles.nameChar + " " + styles.black}>A</span>
              <span className={styles.nameChar + " " + styles.black}>Y</span>
              <span className={styles.nameChar + " " + styles.navy}>O</span>
              <span className={styles.nameChar + " " + styles.navy}>O</span>
              <span className={styles.nameChar + " " + styles.black}>N</span>
            </div>
            <div className={styles.nameLine}>
              <span className={styles.nameChar + " " + styles.gray}>J</span>
              <span className={styles.nameChar + " " + styles.pastelBlue}>
                E
              </span>
              <span className={styles.nameChar + " " + styles.gray}>O</span>
              <span className={styles.nameChar + " " + styles.gray}>N</span>
              <span className={styles.nameChar + " " + styles.gray}>G</span>
            </div>
            <p className={styles.featuredSubtitle}>
              Software Developer (..in progress)
            </p>
          </div>
          <div className={styles.logoWrapper}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/528/528256.png"
              alt="Logo"
              className={styles.logoImage}
              width={240}
              height={240}
            />
          </div>
        </div>
      </div>

      <div className={styles.grayBackground}>
        <div className={styles.graySectionWrapper}>
          <div className={styles.graySectionCard}>
            <h2 className={styles.graySectionTitle}>About Me</h2>
            <p className={styles.featuredSubtitle}>
              I enjoy taking on challenges that seem impossible
            </p>
            <div className={styles.featuredContent}>
              <p>🇰🇷 Born in Ulsan, South Korea</p>
              <p>🎓 Bachelor in Management</p>
              <p>🇬🇧 In 2019, moved to UK after leaving my previous job</p>
              <p>🍴 In 2021, started a restaurant business in London</p>
              <p>
                💻 In 2024, started learning programming, attending fullstack
                developer bootcamp
              </p>
              <p>🛫 In 2025, what will I be doing?</p>
            </div>
          </div>

          <div className={styles.graySectionCard}>
            <h2 className={styles.graySectionTitle}>What I'm into</h2>
            <p className={styles.featuredSubtitle}>
              These are the things I'm interested in these days.
            </p>
            <div className={styles.featuredContent}>
              <p>🇩🇪 Learning German</p>
              <p>
                🎧 Coding while listening to{" "}
                <a
                  href="https://www.youtube.com/watch?v=f1WuPpDA5fo&t=4062s"
                  style={{ color: "skyblue" }}
                >
                  NewJeans playlists
                </a>
              </p>
              <p>🧠 Neuroscience</p>
              <p>🏃🏻‍♂️ Physical training</p>
              <p>🍎 Eating healthy</p>
              <p>📰 Reading articles about investing</p>
            </div>
          </div>
        </div>

        <div className={styles.interSection}>
          <div className={styles.interSectionInner}>
            <div className={styles.interSectionLeft}>
              <h3 className={styles.interSectionTitle}>London Life</h3>
              <div className={styles.londonInfoContainer}>
                <LondonWeather />
                <ExchangeRate />
                <LondonTransport />
              </div>
            </div>

            <div className={styles.interSectionRight}>
              <h3 className={styles.interSectionTitle}>Dev Life</h3>
              <div className={styles.devInfoContainer}>
                <GithubActivity />
                <DevNews />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.graySectionCard} ${styles.wideCard}`}>
          <h2 className={styles.graySectionTitle}>Achievements in 2024</h2>
          <p className={styles.featuredSubtitle}>
            Here are some things I accomplished in 2024.
          </p>
          <div className={styles.featuredContent}>
            <p>🇰🇷 Wrapped up everything in the UK and moved to Korea</p>
            <p>🇫🇷 Experienced the Paris Olympics</p>
            <p>✈️ Three-month accident-free trip across Europe</p>
            <p>🍔 Gained a lot of weight(?)</p>
          </div>
        </div>

        <div className={`${styles.graySectionCard} ${styles.wideCard}`}>
          <h2 className={styles.graySectionTitle}>Goals in 2025</h2>
          <p className={styles.featuredSubtitle}>
            Here are some goals I'm working towards.
          </p>
          <div className={styles.featuredContent}>
            <p>
              🌟 Create and deploy a service independently as a full-stack
              developer
            </p>
            <p>🚀 Write blog posts periodically</p>
            <p>🎨 Study interactive design</p>
            <p>📚 Continue studying English</p>
            <p>🇩🇪 Achieve German A2 level</p>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="https://github.com/hay-oon">GitHub</a>
          </li>
          <li>
            <a href="mailto:hayooncode@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://velog.io/@hayooncode/">Blog</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
