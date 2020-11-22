import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormResponseDataTable from './FormResponseDataTable';

describe('<FormResponseDataTable />', () => {
  test('it should mount', () => {
    render(<FormResponseDataTable />);
    
    const formResponseDataTable = screen.getByTestId('FormResponseDataTable');

    expect(formResponseDataTable).toBeInTheDocument();
  });
});