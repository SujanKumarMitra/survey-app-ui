import React, { lazy, Suspense } from 'react';

const LazyTimeField = lazy(() => import('./TimeField'));

const TimeField = props => (
  <Suspense fallback={null}>
    <LazyTimeField {...props} />
  </Suspense>
);

export default TimeField;
