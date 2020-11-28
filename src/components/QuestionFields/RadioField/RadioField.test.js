import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioField from './RadioField';

describe('<RadioField />', () => {
  test('it should mount', () => {
    render(<RadioField />);
    
    const radioField = screen.getByTestId('RadioField');

    expect(radioField).toBeInTheDocument();
  });
});