import React, { lazy, Suspense } from 'react';

const LazyFormDescriptionField = lazy(() => import('./FormDescriptionField'));

const FormDescriptionField = props => (
  <Suspense fallback={null}>
    <LazyFormDescriptionField {...props} />
  </Suspense>
);

export default FormDescriptionField;
