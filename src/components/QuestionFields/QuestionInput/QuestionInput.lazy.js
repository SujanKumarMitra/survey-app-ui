import React, { lazy, Suspense } from 'react';

const LazyQuestionInput = lazy(() => import('./QuestionInput'));

const QuestionInput = props => (
  <Suspense fallback={null}>
    <LazyQuestionInput {...props} />
  </Suspense>
);

export default QuestionInput;
