import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom'; 

test('renders button with correct label', () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
});
