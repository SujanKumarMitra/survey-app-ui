import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormCreateLoadingAnimation from './FormCreateLoadingAnimation';

describe('<FormCreateLoadingAnimation />', () => {
  test('it should mount', () => {
    render(<FormCreateLoadingAnimation />);
    
    const formCreateLoadingAnimation = screen.getByTestId('FormCreateLoadingAnimation');

    expect(formCreateLoadingAnimation).toBeInTheDocument();
  });
});