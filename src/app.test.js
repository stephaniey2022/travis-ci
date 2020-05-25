import React from 'react';
import 'mutationobserver-shim';
import { render } from '@testing-library/react';
import App from './App';
import Home from './components/Home'

test('renders app', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Freedom Generator/i);
  expect(titleElement).toBeInTheDocument();
});