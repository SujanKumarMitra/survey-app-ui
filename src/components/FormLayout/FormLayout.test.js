import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormLayout from './FormLayout';

describe('<FormLayout />', () => {
  test('it should mount', () => {
    render(<FormLayout />);
    
    const formLayout = screen.getByTestId('FormLayout');

    expect(formLayout).toBeInTheDocument();
  });
});