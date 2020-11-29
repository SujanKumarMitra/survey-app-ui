import React, { lazy, Suspense } from 'react';

const LazyFormResponseLayout = lazy(() => import('./FormResponseLayout'));

const FormResponseLayout = props => (
  <Suspense fallback={null}>
    <LazyFormResponseLayout {...props} />
  </Suspense>
);

export default FormResponseLayout;
