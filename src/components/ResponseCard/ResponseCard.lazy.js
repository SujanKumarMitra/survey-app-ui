import React, { lazy, Suspense } from 'react';

const LazyResponseCard = lazy(() => import('./ResponseCard'));

const ResponseCard = props => (
  <Suspense fallback={null}>
    <LazyResponseCard {...props} />
  </Suspense>
);

export default ResponseCard;
