import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormResponseSuccess from './FormResponseSuccess';

describe('<FormResponseSuccess />', () => {
  test('it should mount', () => {
    render(<FormResponseSuccess />);
    
    const formResponseSuccess = screen.getByTestId('FormResponseSuccess');

    expect(formResponseSuccess).toBeInTheDocument();
  });
});