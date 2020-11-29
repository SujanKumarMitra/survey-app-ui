import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormCreateSuccess from './FormCreateSuccess';

describe('<FormCreateSuccess />', () => {
  test('it should mount', () => {
    render(<FormCreateSuccess />);
    
    const formCreateSuccess = screen.getByTestId('FormCreateSuccess');

    expect(formCreateSuccess).toBeInTheDocument();
  });
});