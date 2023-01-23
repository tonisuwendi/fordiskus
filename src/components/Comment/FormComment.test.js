/**
 * test scenario
 *
 * - FormComment component
 *  - should handle comment typing correctly
 *  - should disabled comment button when input is empty
 *  - should enabled comment button when input is not empty
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import FormComment from './FormComment';

const mockStore = configureMockStore([thunk]);
const commentText = 'Jadi gini.. Nah gitu!!';

describe('FormComment component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            loading: { button: false },
            threadDetail: { id: 'thread-1' },
        });
        render(<Provider store={store}><FormComment /></Provider>);
    });

    it('should handle comment typing correctly', async () => {
        const commentInput = screen.getByPlaceholderText(/tanggapi/i);
        await userEvent.type(commentInput, commentText);
        expect(commentInput).toHaveValue(commentText);
    });

    it('should disabled comment button when input is empty', async () => {
        const submitButton = screen.getByRole('button', 'Kirim Komentar');
        expect(submitButton).toBeDisabled();
    });

    it('should enabled comment button when input is not empty', async () => {
        const commentInput = screen.getByPlaceholderText(/tanggapi/i);
        await userEvent.type(commentInput, commentText);
        const submitButton = screen.getByRole('button', 'Kirim Komentar');
        expect(submitButton).toBeEnabled();
    });
});
