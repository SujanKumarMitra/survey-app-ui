import React, { lazy, Suspense } from 'react';

const LazyTimeResponse = lazy(() => import('./TimeResponse'));

const TimeResponse = props => (
  <Suspense fallback={null}>
    <LazyTimeResponse {...props} />
  </Suspense>
);

export default TimeResponse;
