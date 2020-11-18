import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormResponseLoadingAnimation from './FormResponseLoadingAnimation';

describe('<FormResponseLoadingAnimation />', () => {
  test('it should mount', () => {
    render(<FormResponseLoadingAnimation />);
    
    const formResponseLoadingAnimation = screen.getByTestId('FormResponseLoadingAnimation');

    expect(formResponseLoadingAnimation).toBeInTheDocument();
  });
});