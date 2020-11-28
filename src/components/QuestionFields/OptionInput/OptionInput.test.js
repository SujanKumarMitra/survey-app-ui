import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OptionInput from './OptionInput';

describe('<OptionInput />', () => {
  test('it should mount', () => {
    render(<OptionInput />);
    
    const optionInput = screen.getByTestId('OptionInput');

    expect(optionInput).toBeInTheDocument();
  });
});