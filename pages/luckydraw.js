import React from 'react';
import Layout from '../components/Layout';
import LuckyDraw from '../components/LuckyDraw';
import LuckyDrawcard from '../components/LuckyDrawCard';

export default function LuckyDrawScreen() {
  return (
    <Layout title="LucyDraw">
      <div className="py-3">
        <LuckyDrawcard />
        <div className="py-3 ">
          <LuckyDraw />
        </div>
      </div>
    </Layout>
  );
}

LuckyDrawScreen.auth = true;
