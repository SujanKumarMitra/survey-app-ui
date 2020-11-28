import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimeField from './TimeField';

describe('<TimeField />', () => {
  test('it should mount', () => {
    render(<TimeField />);
    
    const timeField = screen.getByTestId('TimeField');

    expect(timeField).toBeInTheDocument();
  });
});