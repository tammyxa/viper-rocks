'use client';
import styles from './dashboard.module.css';
import TutorialModal from "../(components)/Tutorial Modal/TutorialModal.tsx";
import { Fragment, useState } from 'react';

const Dashboard = () => {

    const[showModal, setShowModal] = useState(false);

    return (
        <Fragment>

        <div>
            <div className={styles.title}>
                <h2>Dashboard</h2>
                <div className={styles.tutorial}>
                    <button onClick={() => setShowModal(true)}>Tutorial ?</button>
                </div>
            </div>
        
            <div className={styles.dashboardContainer}>
                <div className={styles.leftPanel}>
                    
                <div className={styles.checklist}>
                    <h3>Checklist</h3>
                        <ul>
                            <li>
                                <input type="checkbox" id="scouting" name="scouting" />
                                <label htmlFor="scouting"> Scouting</label>
                            </li>
                            <li>
                                <input type="checkbox" id="sizing" name="sizing" />
                                <label htmlFor="sizing"> Sizing</label>
                            </li>
                            <li>
                                <input type="checkbox" id="classification" name="classification" />
                                <label htmlFor="classification"> Classification</label>
                            </li>
                        </ul>
                </div>
                <div className={styles.leaderboard}>
                    <h3>Leaderboard</h3>
                    {
                        <ol>
                            <li> user 1</li>
                            <li> user 2</li>
                            <li> user 3</li>
                        </ol>
                    }
                </div>
                </div>
                <div className={styles.middlePanel}>
                    <div className={styles.imageTagged}>
                        <h3>Image Tagged</h3>
                        {/* Add image tagged content here */}
                    </div>
                </div>
                <div className={styles.rightPanel}>
                    <div className={styles.jplNewsFeed}>
                        <h3>JPL News Feed</h3>
                            {<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta exercitationem, earum sapiente molestias dolor incidunt tenetur! Quam qui ea excepturi, asperiores optio inventore obcaecati mollitia dolorum sit doloremque vitae veniam?</p>}
                    </div>
                </div>
            </div>
        </div>
        
        <TutorialModal isVisible = {showModal} onClose = {() => setShowModal(false)}/>
        </Fragment>
    );
};

export default Dashboard;