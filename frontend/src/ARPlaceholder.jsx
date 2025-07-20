import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import CTAButton from './CTAButton';

export default function ARPlaceholder() {
  return (
    <div className="bg-white rounded shadow-md p-4 my-6">
      <h2 className="text-xl font-semibold mb-2">AR Experience Placeholder</h2>
      
      <Canvas style={{ height: 300 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box>
          <meshStandardMaterial attach="material" color="orange" />
        </Box>
        <OrbitControls />
      </Canvas>
      
      <div className="mt-4">
        <CTAButton 
          label="Buy Now" 
          onClick={() => window.open("https://youtube.com/shorts/y3N3N7h-KeU?si=gjTjLFfB-xhopFeK", "_blank")} 
        />
      </div>
    </div>
  );
}
