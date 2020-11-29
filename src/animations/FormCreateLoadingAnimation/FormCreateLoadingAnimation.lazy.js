import React, { lazy, Suspense } from 'react';

const LazyFormCreateLoadingAnimation = lazy(() => import('./FormCreateLoadingAnimation'));

const FormCreateLoadingAnimation = props => (
  <Suspense fallback={null}>
    <LazyFormCreateLoadingAnimation {...props} />
  </Suspense>
);

export default FormCreateLoadingAnimation;
