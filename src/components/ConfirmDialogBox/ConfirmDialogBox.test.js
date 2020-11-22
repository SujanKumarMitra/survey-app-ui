import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConfirmDialogBox from './ConfirmDialogBox';

describe('<ConfirmDialogBox />', () => {
  test('it should mount', () => {
    render(<ConfirmDialogBox />);
    
    const confirmDialogBox = screen.getByTestId('ConfirmDialogBox');

    expect(confirmDialogBox).toBeInTheDocument();
  });
});