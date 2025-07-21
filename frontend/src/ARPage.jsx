import { useEffect } from 'react';
import axios from 'axios';

export default function ARPage() {
  useEffect(() => {
    const startTime = Date.now();
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

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
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex flex-col items-center">
      
      <div className="text-center max-w-xl w-full mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome to the AR Experience!</h1>
        <p className="mt-2 text-gray-600">Your scan is being tracked.</p>
      </div>

      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-4 md:p-6 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">AR Scan Success!</h2>

        <video controls className="w-full rounded mb-4">
          <source src="/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <img
          src="/001.jpg"
          alt="AR Visual"
          className="w-full sm:w-2/3 mx-auto rounded shadow-lg mb-4"
        />

        <img
          src="/001.jpg"
          alt="AR Example"
          className="w-full sm:w-2/3 mx-auto rounded shadow"
        />
      </div>
    </div>
  );
}
