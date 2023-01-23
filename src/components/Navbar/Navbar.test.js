/**
 * test scenario
 *
 * - Navbar component
 *  - should display "Daftar" and "Masuk" button for unauthorized user
 *  - should display "Buat Diskusi" and "Keluar" button for authorized user
 */

import React from 'react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import Navbar from '.';

const mockStore = configureMockStore();

const renderNavbar = (store) => (
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
            </Provider>
        </BrowserRouter>,
    )
);

describe('Navbar component', () => {
    it('should display "Daftar" and "Masuk" button for unauthorized user', () => {
        const store = mockStore({ authUser: null });
        renderNavbar(store);
        const registerButton = screen.getByText('Daftar');
        expect(registerButton).toBeInTheDocument();
        const loginButton = screen.getByText('Masuk');
        expect(loginButton).toBeInTheDocument();
    });

    it('should display "Buat Diskusi" and "Keluar" button for authorized user', () => {
        const store = mockStore({ authUser: {} });
        renderNavbar(store);
        const registerButton = screen.getByText('Buat Diskusi');
        expect(registerButton).toBeInTheDocument();
        const loginButton = screen.getByText('Keluar');
        expect(loginButton).toBeInTheDocument();
    });
});
