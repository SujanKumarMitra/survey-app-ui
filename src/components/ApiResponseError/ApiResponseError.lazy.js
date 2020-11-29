import React, { lazy, Suspense } from 'react';

const LazyApiResponseError = lazy(() => import('./ApiResponseError'));

const ApiResponseError = props => (
  <Suspense fallback={null}>
    <LazyApiResponseError {...props} />
  </Suspense>
);

export default ApiResponseError;
