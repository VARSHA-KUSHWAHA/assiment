import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Analytics() {
  const [data, setData] = useState({ totalScans: 0, avgTime: 0 });

  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    axios.get(`${baseURL}/api/analytics`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching analytics:", err);
      });
  }, []);

  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Campaign Analytics</h2>
      <p>Total Scans: {data.totalScans}</p>
      <p>Average Time Spent: {data.avgTime} sec</p>
    </div>
  );
}

