import React, { lazy, Suspense } from 'react';

const LazyFormCreate = lazy(() => import('./FormCreate'));

const FormCreate = props => (
  <Suspense fallback={null}>
    <LazyFormCreate {...props} />
  </Suspense>
);

export default FormCreate;
