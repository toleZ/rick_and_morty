import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <article>
        <h3>Who created this app?</h3>
        <p className={styles.answer}>
          This app is created by{" "}
          <a
            href="https://www.linkedin.com/in/juan-cruz-toloy-85610223b/"
            className={styles.link}
          >
            Juan Cruz Toloy
          </a>
          , a front-end developer with less than a year of experience. Actually
          i'm studying in{" "}
          <a href="https://www.soyhenry.com/" className={styles.link}>
            Soy Henry Bootcamp
          </a>
          . At the moment i'm open to work, if you are insteresting on my
          profile you can contact me on{" "}
          <span className={styles.mail}>toloyjc@gmail.com</span>
        </p>
      </article>

      <article>
        <h3>Why is created this app?</h3>
        <p className={styles.answer}>
          It is created for a final project of module 2. The intention of this
          page is to show my skills as a front-end developer. Applying
          everything learned this time in this module.
        </p>
      </article>

      <article>
        <h3>Which technologies were used?</h3>
        <p className={styles.answer}>Used technology:</p>
        <ul className={styles.skills}>
          <li className={styles.skill}>HTML</li>
          <li className={styles.skill}>CSS</li>
          <li className={styles.skill}>JavaScript</li>
          <li className={styles.skill}>React</li>
          <li className={styles.skill}>React-Router-Dom</li>
          <li className={styles.skill}>Redux</li>
        </ul>
      </article>

      <article>
        <h3>Who appi were used?</h3>
        <p className={styles.answer}>
          I used{" "}
          <a href="https://rickandmortyapi.com/" className={styles.link}>
            The Rick and Morty API
          </a>
          , to get all info of the characters and more.
        </p>
      </article>

      <article>
        <h3>Can i collaborate in this project?</h3>
        <p className={styles.answer}>
          Sure, and i'm finding a designer to change the page styles and one
          developer to continue getting better the page.
        </p>
      </article>
    </section>
  );
};

export default About;
