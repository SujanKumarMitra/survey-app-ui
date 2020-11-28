import React, { lazy, Suspense } from 'react';

const LazyCheckBoxField = lazy(() => import('./CheckBoxField'));

const CheckBoxField = props => (
  <Suspense fallback={null}>
    <LazyCheckBoxField {...props} />
  </Suspense>
);

export default CheckBoxField;
