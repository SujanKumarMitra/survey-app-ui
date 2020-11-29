import React, { lazy, Suspense } from 'react';

const LazyAddOptionButton = lazy(() => import('./AddOptionButton'));

const AddOptionButton = props => (
  <Suspense fallback={null}>
    <LazyAddOptionButton {...props} />
  </Suspense>
);

export default AddOptionButton;
