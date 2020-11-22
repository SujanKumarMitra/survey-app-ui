import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateResponse from './DateResponse';

describe('<DateResponse />', () => {
  test('it should mount', () => {
    render(<DateResponse />);
    
    const dateResponse = screen.getByTestId('DateResponse');

    expect(dateResponse).toBeInTheDocument();
  });
});