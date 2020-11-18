import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Question from './Question';

describe('<Question />', () => {
  test('it should mount', () => {
    render(<Question />);
    
    const question = screen.getByTestId('Question');

    expect(question).toBeInTheDocument();
  });
});