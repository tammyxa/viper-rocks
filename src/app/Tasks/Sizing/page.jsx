// /components/SizingPage.js
"use client"; 

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import dynamic from 'next/dynamic';
import LoadingSpinner from "../../(components)/LoadingSpinner/LoadingSpinner"; // Adjust path as necessary

const DisplayQuadrant = dynamic(() => import('../../(components)/Sizing/DisplayQuadrant/canvas'), { ssr: false });

export default function SizingPage() {
    const { data: session, status } = useSession();
    const [quadrants, setQuadrants] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedIndex = localStorage.getItem('lastViewedQuadrant');
            return savedIndex ? parseInt(savedIndex, 10) : 0;
        }
        return 0;
    });
    const [labels, setLabels] = useState(() => JSON.parse(localStorage.getItem('savedLabels')) || []);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (status === "unauthenticated") {
            signIn('auth0', { callbackUrl: '/Tasks/Sizing' });
        }
    }, [status]);

    useEffect(() => {
        localStorage.setItem('lastViewedQuadrant', currentIndex.toString());
        localStorage.setItem('savedLabels', JSON.stringify(labels));
    }, [currentIndex, labels]);

    useEffect(() => {
        const fetchQuadrants = async () => {
            setIsLoading(true);
            const response = await fetch("/api/sizing/rockquadrants");
            const data = await response.json();
            setQuadrants(data);
            setIsLoading(false);
        };

        fetchQuadrants();
    }, []);

    const handleSubmit = async () => {
        setIsLoading(true);
        const geoData = labels.map(label => ({
            type: 'Polygon',
            coordinates: [label.map(point => [point.x, point.y])]
        }));
        const response = await fetch('/api/sizing/geometry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ geometries: geoData, quadrant: quadrants[currentIndex] })
        });
        if (response.ok) {
            localStorage.removeItem('savedLabels');
            setLabels([]);
            handleNextQuadrant();
        } else {
            console.error('Submission failed');
        }
        setIsLoading(false);
    };

    const handleNextQuadrant = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % quadrants.length);
    };

    return (
        <div>
            <Link href="/Explore">Back</Link>
            <h1>Sizing</h1>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                quadrants.length > 0 && (
                    <DisplayQuadrant
                        key={`${quadrants[currentIndex].image.imageURL}-${quadrants[currentIndex].id}`}
                        quadrant={quadrants[currentIndex]}
                        labels={labels}
                        setLabels={setLabels}
                    />
                )
            )}
            {!isLoading && (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </div>
    );
}
