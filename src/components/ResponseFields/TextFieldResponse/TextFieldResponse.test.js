import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextFieldResponse from './TextFieldResponse';

describe('<TextBoxResponse />', () => {
  test('it should mount', () => {
    render(<TextFieldResponse />);
    
    const textFieldResponse = screen.getByTestId('TextFieldResponse');

    expect(textFieldResponse).toBeInTheDocument();
  });
});