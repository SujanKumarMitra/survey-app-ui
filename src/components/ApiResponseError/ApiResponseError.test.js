import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApiResponseError from './ApiResponseError';

describe('<ApiResponseError />', () => {
  test('it should mount', () => {
    render(<ApiResponseError />);
    
    const apiResponseError = screen.getByTestId('ApiResponseError');

    expect(apiResponseError).toBeInTheDocument();
  });
});