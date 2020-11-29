import React, { lazy, Suspense } from 'react';

const LazyOptionFieldErrorToast = lazy(() => import('./OptionFieldErrorToast'));

const OptionFieldErrorToast = props => (
  <Suspense fallback={null}>
    <LazyOptionFieldErrorToast {...props} />
  </Suspense>
);

export default OptionFieldErrorToast;
