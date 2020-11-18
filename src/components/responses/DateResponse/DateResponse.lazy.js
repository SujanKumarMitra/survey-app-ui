import React, { lazy, Suspense } from 'react';

const LazyDateResponse = lazy(() => import('./DateResponse'));

const DateResponse = props => (
  <Suspense fallback={null}>
    <LazyDateResponse {...props} />
  </Suspense>
);

export default DateResponse;
