import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Home from './components/Home'

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Freedom Generator/i);
  expect(linkElement).toBeInTheDocument();
});