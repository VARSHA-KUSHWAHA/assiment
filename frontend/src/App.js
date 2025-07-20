import React from 'react';
import QRCodeSection from './QRCodeSection';
import ARPlaceholder from './ARPlaceholder';
import Analytics from './Analytics';
import ARPage from './ARPage'; 

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-center p-8">
      <h1 className="text-4xl font-bold mb-6">Experience Print Come to Life</h1>
      <QRCodeSection />
      <ARPlaceholder />
      <Analytics />
       <ARPage />
    </div>
  );
}
