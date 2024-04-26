// pages/index.js
"use client";
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState('');

  const executeQuery = async () => {
    const response = await fetch('/api/analysis/sizing', {
      method: 'POST',
    });
    const data = await response.json();
    setResult(data.message || data.error);
  };

  return (
    <div>
      <h1>Execute SQL Query</h1>
      <button onClick={executeQuery}>Run Query</button>
      <p>{result}</p>
    </div>
  );
}
