import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioButtonResponse from './RadioButtonResponse';

describe('<RadioButtonResponse />', () => {
  test('it should mount', () => {
    render(<RadioButtonResponse />);
    
    const radioButtonResponse = screen.getByTestId('RadioButtonResponse');

    expect(radioButtonResponse).toBeInTheDocument();
  });
});