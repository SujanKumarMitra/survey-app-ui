import React, { lazy, Suspense } from 'react';

const LazyPasswordField = lazy(() => import('./PasswordField'));

const PasswordField = props => (
  <Suspense fallback={null}>
    <LazyPasswordField {...props} />
  </Suspense>
);

export default PasswordField;
