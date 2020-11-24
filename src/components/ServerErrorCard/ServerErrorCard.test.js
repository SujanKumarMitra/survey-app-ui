import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ServerErrorCard from './ServerErrorCard';

describe('<ServerErrorCard />', () => {
  test('it should mount', () => {
    render(<ServerErrorCard />);
    
    const serverErrorCard = screen.getByTestId('ServerErrorCard');

    expect(serverErrorCard).toBeInTheDocument();
  });
});