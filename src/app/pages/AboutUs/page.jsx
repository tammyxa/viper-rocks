import styles from "./aboutus.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutuscontainer}>
      <section className={styles.aboutuscontent}>
        <h2>Welcome to Our Story</h2>
        <p>
          At Viper Rocks, we are passionate about exploring the wonders of the universe.
          Our mission is to bring the excitement of space exploration to everyone.
        </p>
      
      </section>

      <section className={styles.teamsection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teammember}>
          <div className={styles.frontend}>
            <h4>UI/UX DESIGN</h4>
                <ul>
                    <li>Diana Arteaga-Andrade</li>
                    <li>Chrisitan Gomez</li>
                    <li>Santiago Bautista</li>
                    <li>Angy Xajil</li>
                    <li>Tammy Xaypraseuth</li>
                </ul>

          <div className={styles.backend}>
            <h4>DATABASE DESIGN</h4>
                <ul>
                    <li>Kevin Andrade</li>
                    <li>Michael Gibson</li>
                    <li>Nida Sheikh</li>
                    <li>Zainab Sulaiman</li>
                    <li>Diane Tabilas</li>
                </ul>
            </div>
        </div>
          
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className={styles.valuessection}>
        <h2>Our Values</h2>
        <ul>
          <li>Curiosity</li>
          <li>Innovation</li>
          <li>Collaboration</li>
          <li>Education</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
