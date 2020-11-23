import React, { lazy, Suspense } from 'react';

const LazyFormResponseData = lazy(() => import('./FormResponseData'));

const FormResponseData = props => (
  <Suspense fallback={null}>
    <LazyFormResponseData {...props} />
  </Suspense>
);

export default FormResponseData;
