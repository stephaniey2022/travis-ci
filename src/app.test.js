import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;
import Home from './components/Home'



test('renders app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Freedom Generator/i);
  expect(linkElement).toBeInTheDocument();
});