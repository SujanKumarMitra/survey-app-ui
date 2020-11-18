import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResponseCard from './ResponseCard';

describe('<ResponseCard />', () => {
  test('it should mount', () => {
    render(<ResponseCard />);
    
    const responseCard = screen.getByTestId('ResponseCard');

    expect(responseCard).toBeInTheDocument();
  });
});