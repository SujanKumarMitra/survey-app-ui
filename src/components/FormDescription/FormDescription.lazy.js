import React, { lazy, Suspense } from 'react';

const LazyFormDescription = lazy(() => import('./FormDescription'));

const FormDescription = props => (
  <Suspense fallback={null}>
    <LazyFormDescription {...props} />
  </Suspense>
);

export default FormDescription;
