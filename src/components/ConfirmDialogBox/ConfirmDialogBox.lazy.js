import React, { lazy, Suspense } from 'react';

const LazyConfirmDialogBox = lazy(() => import('./ConfirmDialogBox'));

const ConfirmDialogBox = props => (
  <Suspense fallback={null}>
    <LazyConfirmDialogBox {...props} />
  </Suspense>
);

export default ConfirmDialogBox;
