import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormResponseDataTableLoadingAnimation from './FormResponseDataTableLoadingAnimation';

describe('<FormResponseDataTableLoadingAnimation />', () => {
  test('it should mount', () => {
    render(<FormResponseDataTableLoadingAnimation />);
    
    const formResponseDataTableLoadingAnimation = screen.getByTestId('FormResponseDataTableLoadingAnimation');

    expect(formResponseDataTableLoadingAnimation).toBeInTheDocument();
  });
});