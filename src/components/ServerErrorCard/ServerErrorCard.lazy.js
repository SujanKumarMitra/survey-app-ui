import React, { lazy, Suspense } from 'react';

const LazyServerErrorCard = lazy(() => import('./ServerErrorCard'));

const ServerErrorCard = props => (
  <Suspense fallback={null}>
    <LazyServerErrorCard {...props} />
  </Suspense>
);

export default ServerErrorCard;
