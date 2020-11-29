import React, { lazy, Suspense } from 'react';

const LazyFormCreateSuccess = lazy(() => import('./FormCreateSuccess'));

const FormCreateSuccess = props => (
  <Suspense fallback={null}>
    <LazyFormCreateSuccess {...props} />
  </Suspense>
);

export default FormCreateSuccess;
