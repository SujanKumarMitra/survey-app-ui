import React, { lazy, Suspense } from 'react';

const LazyFormResponseDataTableLoadingAnimation = lazy(() => import('./FormResponseDataTableLoadingAnimation'));

const FormResponseDataTableLoadingAnimation = props => (
  <Suspense fallback={null}>
    <LazyFormResponseDataTableLoadingAnimation {...props} />
  </Suspense>
);

export default FormResponseDataTableLoadingAnimation;
