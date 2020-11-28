import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FieldCard from './FieldCard';

describe('<FieldCard />', () => {
  test('it should mount', () => {
    render(<FieldCard />);
    
    const fieldCard = screen.getByTestId('FieldCard');

    expect(fieldCard).toBeInTheDocument();
  });
});