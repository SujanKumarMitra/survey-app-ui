import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormResponseDataAccessForm from './FormResponseDataAccessForm';

describe('<FormResponseDataAccessForm />', () => {
  test('it should mount', () => {
    render(<FormResponseDataAccessForm />);
    
    const formResponseDataAccessForm = screen.getByTestId('FormResponseDataAccessForm');

    expect(formResponseDataAccessForm).toBeInTheDocument();
  });
});