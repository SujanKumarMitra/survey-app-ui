import React, { lazy, Suspense } from 'react';

const LazyTextBoxResponse = lazy(() => import('./TextBoxResponse'));

const TextBoxResponse = props => (
  <Suspense fallback={null}>
    <LazyTextBoxResponse {...props} />
  </Suspense>
);

export default TextBoxResponse;
