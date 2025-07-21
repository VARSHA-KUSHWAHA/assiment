import { useEffect } from 'react';
import axios from 'axios';

export default function ARPage() {
  useEffect(() => {
    const startTime = Date.now();
    const apiUrl = process.env.REACT_APP_API_BASE_URL;// ✅ yahan use kiya

    const sendScanData = async () => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime) / 1000);

      try {
        await axios.post(`${apiUrl}/api/scan`, {
          timeSpent,
        });
      } catch (err) {
        console.error('Scan data error:', err.message);
      }
    };

    window.addEventListener('beforeunload', sendScanData);

    return () => window.removeEventListener('beforeunload', sendScanData);
  }, []);
  return (
    <div>
       <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the AR Experience!</h1>
      <p className="mt-2 text-gray-600">Your scan is being tracked.</p>
    </div>

     <div className="p-6 text-center bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">AR Scan Success!</h2>
      <video controls className="mx-auto w-full max-w-md mb-4">
        <source src="/sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src="/001.jpg" alt="AR Visual" className="w-64 h-auto rounded shadow-lg" />

      <img src="001" alt="AR Example" className="mx-auto w-1/2 rounded shadow" />
    </div>
    </div>
  );
}
