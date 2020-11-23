import React, { lazy, Suspense } from 'react';

const LazyFormResponseDataAccessForm = lazy(() => import('./FormResponseDataAccessForm'));

const FormResponseDataAccessForm = props => (
  <Suspense fallback={null}>
    <LazyFormResponseDataAccessForm {...props} />
  </Suspense>
);

export default FormResponseDataAccessForm;
