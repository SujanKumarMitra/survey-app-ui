import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateField from './DateField';

describe('<DateField />', () => {
  test('it should mount', () => {
    render(<DateField />);
    
    const dateField = screen.getByTestId('DateField');

    expect(dateField).toBeInTheDocument();
  });
});