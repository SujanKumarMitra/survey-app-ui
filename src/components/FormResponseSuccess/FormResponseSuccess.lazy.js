import React, { lazy, Suspense } from 'react';

const LazyFormResponseSuccess = lazy(() => import('./FormResponseSuccess'));

const FormResponseSuccess = props => (
  <Suspense fallback={null}>
    <LazyFormResponseSuccess {...props} />
  </Suspense>
);

export default FormResponseSuccess;
