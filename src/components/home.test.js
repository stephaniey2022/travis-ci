import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import 'mutationobserver-shim';
import { fireEvent, waitFor, screen, getByLabelText, getByRole, getByTestId } from '@testing-library/react'
global.MutationObserver = window.MutationObserver;
import Home from './Home'



test('user story', async() => {
    const {getByTestId, getByText, findByTestId, toBeInTheDocument} = render(<Home />);
    fireEvent.click(getByTestId("submit"));
    screen.getByText('Medical Furlough', {exact: false});
    const eligiblephrase = await findByTestId("eligibility");
    expect(eligiblephrase).toBeInTheDocument();
});