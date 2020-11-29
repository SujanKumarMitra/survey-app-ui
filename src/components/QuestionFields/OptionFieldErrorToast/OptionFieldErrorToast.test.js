import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OptionFieldErrorToast from './OptionFieldErrorToast';

describe('<OptionFieldErrorToast />', () => {
  test('it should mount', () => {
    render(<OptionFieldErrorToast />);
    
    const optionFieldErrorToast = screen.getByTestId('OptionFieldErrorToast');

    expect(optionFieldErrorToast).toBeInTheDocument();
  });
});