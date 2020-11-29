import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormCreate from './FormCreate';

describe('<FormCreate />', () => {
  test('it should mount', () => {
    render(<FormCreate />);
    
    const formCreate = screen.getByTestId('FormCreate');

    expect(formCreate).toBeInTheDocument();
  });
});