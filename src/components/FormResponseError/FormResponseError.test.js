import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormResponseError from './FormResponseError';

describe('<FormResponseError />', () => {
  test('it should mount', () => {
    render(<FormResponseError />);
    
    const formResponseError = screen.getByTestId('FormResponseError');

    expect(formResponseError).toBeInTheDocument();
  });
});