import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PasswordField from './PasswordField';

describe('<PasswordField />', () => {
  test('it should mount', () => {
    render(<PasswordField />);
    
    const passwordField = screen.getByTestId('PasswordField');

    expect(passwordField).toBeInTheDocument();
  });
});