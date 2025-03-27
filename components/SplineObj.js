import React, { Suspense } from 'react';
import loadable from '@loadable/component';

const Spline = loadable(() => import('@splinetool/react-spline'));
//https://it.reactjs.org/docs/code-splitting.html
export default function SplineObj() {
  return (
    <div className="w-full h-80">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/XF6vY6LjRseR4bQD/scene.splinecode" />
      </Suspense>
    </div>
  );
}
