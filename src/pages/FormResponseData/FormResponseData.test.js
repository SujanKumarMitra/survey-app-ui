import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormResponseData from './FormResponseData';

describe('<FormResponseData />', () => {
  test('it should mount', () => {
    render(<FormResponseData />);
    
    const formResponseData = screen.getByTestId('FormResponseData');

    expect(formResponseData).toBeInTheDocument();
  });
});