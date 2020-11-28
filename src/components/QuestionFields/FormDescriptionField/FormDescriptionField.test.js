import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormDescriptionField from './FormDescriptionField';

describe('<FormDescriptionField />', () => {
  test('it should mount', () => {
    render(<FormDescriptionField />);
    
    const formDescriptionField = screen.getByTestId('FormDescriptionField');

    expect(formDescriptionField).toBeInTheDocument();
  });
});