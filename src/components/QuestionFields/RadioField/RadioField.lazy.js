import React, { lazy, Suspense } from 'react';

const LazyRadioField = lazy(() => import('./RadioField'));

const RadioField = props => (
  <Suspense fallback={null}>
    <LazyRadioField {...props} />
  </Suspense>
);

export default RadioField;
