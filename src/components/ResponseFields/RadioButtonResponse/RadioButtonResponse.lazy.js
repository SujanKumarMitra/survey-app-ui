import React, { lazy, Suspense } from 'react';

const LazyRadioButtonResponse = lazy(() => import('./RadioButtonResponse'));

const RadioButtonResponse = props => (
  <Suspense fallback={null}>
    <LazyRadioButtonResponse {...props} />
  </Suspense>
);

export default RadioButtonResponse;
