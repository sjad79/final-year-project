import React from 'react';

export default function LuckyDrawcard() {
  return (
    <div className="bg-gray-50">
      <div className="mt-8 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Lucky Draw</span>
          <span className="block text-indigo-600">Start your Spin today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0"></div>
      </div>
    </div>
  );
}
