import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the footer', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Contact me:/i);
  expect(linkElement).toBeInTheDocument();
});
