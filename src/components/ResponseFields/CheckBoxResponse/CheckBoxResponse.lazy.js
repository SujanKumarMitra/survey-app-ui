import React, { lazy, Suspense } from 'react';

const LazyCheckBoxResponse = lazy(() => import('./CheckBoxResponse'));

const CheckBoxResponse = props => (
  <Suspense fallback={null}>
    <LazyCheckBoxResponse {...props} />
  </Suspense>
);

export default CheckBoxResponse;
