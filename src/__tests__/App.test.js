import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'

test('renders search input', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter city/i);
  expect(input).toBeInTheDocument();
});
