import React, { lazy, Suspense } from 'react';

const LazyFormResponseDataTable = lazy(() => import('./FormResponseDataTable'));

const FormResponseDataTable = props => (
  <Suspense fallback={null}>
    <LazyFormResponseDataTable {...props} />
  </Suspense>
);

export default FormResponseDataTable;
