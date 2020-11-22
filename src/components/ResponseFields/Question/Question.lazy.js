import React, { lazy, Suspense } from 'react';

const LazyQuestion = lazy(() => import('./Question'));

const Question = props => (
  <Suspense fallback={null}>
    <LazyQuestion {...props} />
  </Suspense>
);

export default Question;
