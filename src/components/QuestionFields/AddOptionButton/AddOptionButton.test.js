import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddOptionButton from './AddOptionButton';

describe('<AddOptionButton />', () => {
  test('it should mount', () => {
    render(<AddOptionButton />);
    
    const addOptionButton = screen.getByTestId('AddOptionButton');

    expect(addOptionButton).toBeInTheDocument();
  });
});