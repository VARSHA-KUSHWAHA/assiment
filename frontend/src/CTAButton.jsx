import React from 'react';

export default function CTAButton({ label = "Buy Now", onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition duration-300"
    >
      {label}
    </button>
  );
}
