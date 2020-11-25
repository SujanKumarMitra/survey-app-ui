import React, { lazy, Suspense } from 'react';

const LazyRadioResponse = lazy(() => import('./RadioResponse'));

const RadioButtonResponse = props => (
  <Suspense fallback={null}>
    <LazyRadioResponse {...props} />
  </Suspense>
);

export default RadioButtonResponse;
