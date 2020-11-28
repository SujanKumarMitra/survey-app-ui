import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckBoxField from './CheckBoxField';

describe('<CheckBoxField />', () => {
  test('it should mount', () => {
    render(<CheckBoxField />);
    
    const checkBoxField = screen.getByTestId('CheckBoxField');

    expect(checkBoxField).toBeInTheDocument();
  });
});