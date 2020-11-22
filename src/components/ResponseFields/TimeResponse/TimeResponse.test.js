import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimeResponse from './TimeResponse';

describe('<TimeResponse />', () => {
  test('it should mount', () => {
    render(<TimeResponse />);
    
    const timeResponse = screen.getByTestId('TimeResponse');

    expect(timeResponse).toBeInTheDocument();
  });
});