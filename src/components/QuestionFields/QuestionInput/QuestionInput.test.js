import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionInput from './QuestionInput';

describe('<QuestionInput />', () => {
  test('it should mount', () => {
    render(<QuestionInput />);
    
    const questionInput = screen.getByTestId('QuestionInput');

    expect(questionInput).toBeInTheDocument();
  });
});