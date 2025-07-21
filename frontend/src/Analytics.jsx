import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Analytics() {
  const [data, setData] = useState({ totalScans: 0, avgTime: 0 });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/analytics`);
        setData(res.data);
      } catch (err) {
        console.error('Error fetching analytics:', err.message);
      }
    };

    fetchAnalytics();
  }, []);


  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Campaign Analytics</h2>
      <p>Total Scans: {data.totalScans}</p>
      <p>Average Time Spent: {data.avgTime} sec</p>
    </div>
  );
}
