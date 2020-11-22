import React, { lazy, Suspense } from 'react';

const LazyFormLayout = lazy(() => import('./FormLayout'));

const FormLayout = props => (
  <Suspense fallback={null}>
    <LazyFormLayout {...props} />
  </Suspense>
);

export default FormLayout;
