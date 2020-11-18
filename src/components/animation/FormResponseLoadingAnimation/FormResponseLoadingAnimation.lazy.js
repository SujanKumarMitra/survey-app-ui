import React, { lazy, Suspense } from 'react';

const LazyFormResponseLoadingAnimation = lazy(() => import('./FormResponseLoadingAnimation'));

const FormResponseLoadingAnimation = props => (
  <Suspense fallback={null}>
    <LazyFormResponseLoadingAnimation {...props} />
  </Suspense>
);

export default FormResponseLoadingAnimation;
