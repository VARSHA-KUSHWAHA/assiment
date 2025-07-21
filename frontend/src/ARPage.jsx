import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ARPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    const sendScanData = async () => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime) / 1000);

      try {
        await axios.post(`${apiUrl}/api/scan`, { timeSpent });

        // ✅ Scan hone ke baad hi content dikhana
        setShowContent(true);
      } catch (err) {
        console.error('Scan data error:', err.message);
      }
    };

    // For demo: scan 5 seconds me complete maan lo
    const timer = setTimeout(() => {
      sendScanData();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Welcome to the AR Experience!</h1>
        <p className="mt-2 text-gray-600">Your scan is being tracked.</p>
      </div>

      {showContent ? (
        <div className="bg-white shadow rounded p-4 w-full max-w-xl text-center">
          <h2 className="text-xl font-semibold mb-4">AR Scan Success!</h2>

          
          <div className="aspect-w-9 aspect-h-16 w-full">
            <iframe
              className="w-full h-96 rounded"
              src="https://www.youtube.com/embed/y3N3N7h-KeU"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-6">Waiting for scan to complete...</p>
      )}
    </div>
  );
}
