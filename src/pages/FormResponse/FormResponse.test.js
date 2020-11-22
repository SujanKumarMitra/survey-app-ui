import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormResponse from './FormResponse';

describe('<FormResponse />', () => {
  test('it should mount', () => {
    render(<FormResponse />);
    
    const formResponse = screen.getByTestId('FormResponse');

    expect(formResponse).toBeInTheDocument();
  });
});