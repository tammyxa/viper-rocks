import styles from "./about.module.css";

const About = () => {
    return (
    <div className={styles.info}>
        <div className={styles.title}>
            <div>
                <h1>ABOUT US</h1>
            </div>
        </div>

        <div className={styles.frontend}>
            <h3>UI/UX DESIGN</h3>
                <ul>
                    <li>Diana Arteaga-Andrade</li>
                    <li>Chrisitan Gomez</li>
                    <li>Santiago Bautista</li>
                    <li>Angy Xajil</li>
                    <li>Tammy Xaypraseuth</li>
                </ul>

        <div className={styles.backend}>
            <h3>DATABASE DESIGN</h3>
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

    );
}

export default About;