import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function QRCodeSection() {
  const scanURL = 'http://localhost:5173/ar'; // Simulated AR page

  return (
    <div className="mb-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-xl font-semibold mb-4">Scan this QR Code:</h2>
      <QRCodeSVG value={scanURL} size={200} />
      <p className="text-sm text-gray-600 mt-2">
        Or{' '}
        <a href="/ar" className="text-blue-500 underline">
          click here
        </a>{' '}
        to simulate scan
      </p>
    </div>
  );
}
