import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import 'mutationobserver-shim';
import { fireEvent, waitFor, screen } from '@testing-library/react'
global.MutationObserver = window.MutationObserver;
import Home from './Home'



test('renders app', () => {
    const { getByText } = render(<Home />);
//   const linkElement = getByText(/Medical Furlough/i);
//   expect(linkElement).toBeInTheDocument();
    fireEvent.click(screen.getByText('Import Data'))


});