import React from 'react';
import { render } from '@testing-library/react';
import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;
import Home from './Home'



test('renders app', () => {
  render(<Home />);
});