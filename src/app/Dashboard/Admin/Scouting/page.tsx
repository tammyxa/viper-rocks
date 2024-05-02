'use client';
import styles from './dashboard.module.css';
import TutorialModal from "../../../(components)/Admin Help Modal/AdminHelp";
import { Fragment, useState, useEffect } from 'react';
import Link from "next/link";

interface RockData {
    id: number;
    rockCount: number;
    imageId: number;
}

const AdminDash = () => {
    const [data, setData] = useState<RockData[]>([]);
    const [mean, setMean] = useState(0);
    const [std, setStd] = useState(0);
    const [variance, setVariance] = useState(0);
    const [median, setMedian] = useState(0);
    const [mode, setMode] = useState(0);
    const [lowest, setLowest] = useState(0);
    const [highest, setHighest] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/stats', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!res.ok) {
                    const errorResponse = await res.json();
                    throw new Error(`Error: ${errorResponse.message} - ${errorResponse.error}`);
                }

                const jsonData: RockData[] = await res.json();
                jsonData.sort((a, b) => a.id - b.id);
                setData(jsonData);
                calculateStats(jsonData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setErrorMessage("Failed to load statistics");
            }
        };

        fetchData();
    }, []);

    const calculateStats = (rockData: RockData[]): void => {
        const rockCounts = rockData.map(item => item.rockCount);
        rockCounts.sort((a, b) => a - b);
        const n = rockCounts.length;
        const sum = rockCounts.reduce((a, b) => a + b, 0);
        const meanValue = sum / n;
        const varianceValue = rockCounts.reduce((acc, val) => acc + (val - meanValue) ** 2, 0) / n;
        const stdValue = Math.sqrt(varianceValue);
        const mid = Math.floor(n / 2);
        const medianValue = n % 2 !== 0 ? rockCounts[mid] : (rockCounts[mid - 1] + rockCounts[mid]) / 2;

        const frequency: Record<number, number> = {};
        let maxFreq = 0;
        let modeValue = rockCounts[0];
        for (let val of rockCounts) {
            frequency[val] = (frequency[val] || 0) + 1;
            if (frequency[val] > maxFreq) {
                maxFreq = frequency[val];
                modeValue = val;
            }
        }

        const lowestValue = rockCounts[0];
        const highestValue = rockCounts[n - 1];

        setMean(meanValue);
        setStd(stdValue);
        setVariance(varianceValue);
        setMedian(medianValue);
        setMode(modeValue);
        setLowest(lowestValue);
        setHighest(highestValue);
    };

    return (
        <Fragment>
            <div className={styles.title}>
                <h2>Admin Dashboard</h2>
                <div className={styles.tutorial}>
                    <button className={styles.tutorialButton} onClick={() => setShowModal(true)}>
                        Need Help ?
                    </button>
                    <p>{errorMessage}</p>
                </div>
            </div>

            <div className={styles.dashboardContainer}>
                <div className={styles.leftPanel}>
                    <div className={styles.checklist}>
                        <h3>Scouting</h3>
                        <ul>
                            <li>
                                <div className={styles.statsBox}>
                                    <div className={styles.statsLabel}>Mean</div>
                                    <div className={styles.statsValue}>{mean.toFixed(2)}</div>
                                </div>
                                <div className={styles.statsBox}>
                                    <div className={styles.statsLabel}>Standard Deviation</div>
                                    <div className={styles.statsValue}>{std.toFixed(2)}</div>
                                </div>
                                <div className={styles.statsBox}>
                                    <div className={styles.statsLabel}>Variance</div>
                                    <div className={styles.statsValue}>{variance.toFixed(2)}</div>
                                </div>
                                <div className={styles.statsBox}>
                                    <div className={styles.statsLabel}>Median</div>
                                    <div className={styles.statsValue}>{median.toFixed(2)}</div>
                                </div>
                                <div className={styles.statsBox}>
                                    <div className={styles.statsLabel}>Mode</div>
                                    <div className={styles.statsValue}>{mode.toFixed(2)}</div>
                                </div>
                                <div className={styles.statsBox}>
                                    <div className={styles.statsLabel}>Lowest</div>
                                    <div className={styles.statsValue}>{lowest.toFixed(2)}</div>
                                </div>
                                <div className={styles.statsBox}>
                                    <div className={styles.statsLabel}>Highest</div>
                                    <div className={styles.statsValue}>{highest.toFixed(2)}</div>
                                </div>
                                {data.map(item => (
                                    <div key={item.id} className={styles.blackCell}>
                                        <span>ID: {item.id}</span>
                                        <span>Rock Count: {item.rockCount}</span>
                                        <span>Image ID: {item.imageId}</span>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <TutorialModal isVisible={showModal} onClose={() => setShowModal(false)} />
        </Fragment>
    );
};

export default AdminDash;