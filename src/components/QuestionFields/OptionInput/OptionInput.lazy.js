import React, { lazy, Suspense } from 'react';

const LazyOptionInput = lazy(() => import('./OptionInput'));

const OptionInput = props => (
  <Suspense fallback={null}>
    <LazyOptionInput {...props} />
  </Suspense>
);

export default OptionInput;
