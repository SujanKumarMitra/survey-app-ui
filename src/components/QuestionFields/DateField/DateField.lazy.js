import React, { lazy, Suspense } from 'react';

const LazyDateField = lazy(() => import('./DateField'));

const DateField = props => (
  <Suspense fallback={null}>
    <LazyDateField {...props} />
  </Suspense>
);

export default DateField;
