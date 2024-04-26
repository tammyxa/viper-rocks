"use client";

import { useState } from 'react';


export default function AggregatePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAggregate = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/analysis/sizing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        throw new Error(data.message || 'Failed to aggregate geometry');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Aggregate Geometry</h1>
      <button onClick={handleAggregate} disabled={loading}>
        {loading ? 'Aggregating...' : 'Aggregate Geometries'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
