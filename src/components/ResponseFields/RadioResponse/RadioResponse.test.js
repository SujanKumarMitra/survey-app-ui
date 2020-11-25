import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioResponse from './RadioResponse';

describe('<RadioResponse />', () => {
  test('it should mount', () => {
    render(<RadioResponse />);
    
    const radioResponse = screen.getByTestId('RadioResponse');

    expect(radioResponse).toBeInTheDocument();
  });
});