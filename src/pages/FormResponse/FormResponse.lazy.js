import React, { lazy, Suspense } from 'react';

const LazyFormResponse = lazy(() => import('./FormResponse'));

const FormResponse = props => (
  <Suspense fallback={null}>
    <LazyFormResponse {...props} />
  </Suspense>
);

export default FormResponse;
