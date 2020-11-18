import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormDescription from './FormDescription';

describe('<FormDescription />', () => {
  test('it should mount', () => {
    render(<FormDescription />);
    
    const formDescription = screen.getByTestId('FormDescription');

    expect(formDescription).toBeInTheDocument();
  });
});