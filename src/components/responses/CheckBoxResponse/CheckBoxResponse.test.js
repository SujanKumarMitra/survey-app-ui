import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckBoxResponse from './CheckBoxResponse';

describe('<CheckBoxResponse />', () => {
  test('it should mount', () => {
    render(<CheckBoxResponse />);
    
    const checkBoxResponse = screen.getByTestId('CheckBoxResponse');

    expect(checkBoxResponse).toBeInTheDocument();
  });
});