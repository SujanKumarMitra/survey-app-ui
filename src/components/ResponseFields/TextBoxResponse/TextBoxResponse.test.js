import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextBoxResponse from './TextBoxResponse';

describe('<TextBoxResponse />', () => {
  test('it should mount', () => {
    render(<TextBoxResponse />);
    
    const textBoxResponse = screen.getByTestId('TextBoxResponse');

    expect(textBoxResponse).toBeInTheDocument();
  });
});