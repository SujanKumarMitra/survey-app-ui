import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormResponseLayout from './FormResponseLayout';

describe('<FormResponseLayout />', () => {
  test('it should mount', () => {
    render(<FormResponseLayout />);
    
    const formResponseLayout = screen.getByTestId('FormResponseLayout');

    expect(formResponseLayout).toBeInTheDocument();
  });
});