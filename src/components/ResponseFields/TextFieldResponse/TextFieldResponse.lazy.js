import React, { lazy, Suspense } from 'react';

const LazyTextFieldResponse = lazy(() => import('./TextFieldResponse'));

const TextBoxResponse = props => (
  <Suspense fallback={null}>
    <LazyTextFieldResponse {...props} />
  </Suspense>
);

export default TextBoxResponse;
