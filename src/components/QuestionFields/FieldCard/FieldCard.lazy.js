import React, { lazy, Suspense } from 'react';

const LazyFieldCard = lazy(() => import('./FieldCard'));

const FieldCard = props => (
  <Suspense fallback={null}>
    <LazyFieldCard {...props} />
  </Suspense>
);

export default FieldCard;
