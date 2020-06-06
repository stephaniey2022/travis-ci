import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import 'mutationobserver-shim';
import { fireEvent, waitFor, screen, getByLabelText, getByRole } from '@testing-library/react'
global.MutationObserver = window.MutationObserver;
import Home from './Home'



test('user story', async() => {
    const { getByTestId, findByTestId } = render(<Home />);
    fireEvent.click(getByTestId("submit"));
    const item = await findByTestId("eligibility");
    expect(item).toBeInTheDocument();
    screen.getByText('Medical Furlough', {exact: false});
});