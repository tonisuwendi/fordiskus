/**
 * test scenario
 *
 * - LoginPage component
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should disabled login button when email and password is empty
 *  - should enabled login button when email and password is not empty
 */

import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import LoginPage from '.';

const mockStore = configureMockStore([thunk]);

describe('LoginPage component', () => {
    beforeEach(() => {
        const store = mockStore({ loading: { button: false } });

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <LoginPage />
                </Provider>
            </BrowserRouter>,
        );
    });

    it('should handle email typing correctly', async () => {
        const emailInput = screen.getByPlaceholderText('Masukkan email');
        const inputValue = 'toni@mail.com';
        await userEvent.type(emailInput, inputValue);
        expect(emailInput).toHaveValue(inputValue);
    });

    it('should handle password typing correctly', async () => {
        const passwordInput = screen.getByPlaceholderText('Masukkan password');
        const inputValue = 'toni123';
        await userEvent.type(passwordInput, inputValue);
        expect(passwordInput).toHaveValue(inputValue);
    });

    it('should disabled login button when email and password is empty', async () => {
        const loginButton = screen.getByText('MASUK');
        expect(loginButton).toBeDisabled();
    });

    it('should enabled login button when email and password is not empty', async () => {
        const emailInput = screen.getByPlaceholderText('Masukkan email');
        await userEvent.type(emailInput, 'toni@mail.com');
        const passwordInput = screen.getByPlaceholderText('Masukkan password');
        await userEvent.type(passwordInput, 'toni123');
        const loginButton = screen.getByText('MASUK');
        expect(loginButton).toBeEnabled();
    });
});
