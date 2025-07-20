import { useEffect } from 'react';
import axios from 'axios';

export default function ARPage() {
  useEffect(() => {
    const startTime = Date.now();

    const sendScanData = async () => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime) / 1000); // seconds
      const baseURL = import.meta.env.VITE_API_BASE_URL;
      try {
     await axios.post(`${baseURL}/api/scan`, {
  timeSpent
});
        console.log('Scan data sent');
      } catch (error) {
        console.error('Error sending scan data:', error);
      }
    };

    // Call sendScanData when user leaves the page
    window.addEventListener('beforeunload', sendScanData);
    return () => {
      window.removeEventListener('beforeunload', sendScanData);
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the AR Experience!</h1>
      <p className="mt-2 text-gray-600">Your scan is being tracked.</p>
       <footer className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm text-center py-4">
  © {new Date().getFullYear()} AR Campaign Sim | Built by Varsha
</footer>

    </div>
    
  );
}
