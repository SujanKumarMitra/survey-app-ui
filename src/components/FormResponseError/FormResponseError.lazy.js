import React, { lazy, Suspense } from 'react';

const LazyFormResponseError = lazy(() => import('./FormResponseError'));

const FormResponseError = props => (
  <Suspense fallback={null}>
    <LazyFormResponseError {...props} />
  </Suspense>
);

export default FormResponseError;
