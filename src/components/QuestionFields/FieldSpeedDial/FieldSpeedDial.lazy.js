import React, { lazy, Suspense } from 'react';

const LazyFieldSpeedDial = lazy(() => import('./FieldSpeedDial'));

const FieldSpeedDial = props => (
  <Suspense fallback={null}>
    <LazyFieldSpeedDial {...props} />
  </Suspense>
);

export default FieldSpeedDial;
