import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FieldSpeedDial from './FieldSpeedDial';

describe('<FieldSpeedDial />', () => {
  test('it should mount', () => {
    render(<FieldSpeedDial />);
    
    const fieldSpeedDial = screen.getByTestId('FieldSpeedDial');

    expect(fieldSpeedDial).toBeInTheDocument();
  });
});