/**
 * test scenario
 *
 * - DetailPage component
 *  - should display text "Upps, sepertinya kamu tersesat" when is loaded but threadDetail is null
 *  - should display the same thread title as the state threadDetail
 *  - should display the same thread body as the state threadDetail
 *  - should display comment title "Komentar (X) based on total comments"
 */

import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import DetailPage from '.';

const mockStore = configureMockStore([thunk]);
const fakeDetailThread = {
    id: 'thread-1',
    title: 'Perbedaan ref dan href',
    body: 'Apa sih bedanya ref sama href?',
    createdAt: '2023-01-23T09:59:31.019Z',
    owner: {
        id: 'user-1',
        name: 'Toni Suwendi',
        avatar: 'https://domain.com/photo?id=user-1',
    },
    category: 'react',
    comments: [
        {
            id: 'comment-1',
            content: 'Sama seperti bedanya car dan carpet',
            createdAt: '2023-01-23T10:59:31.019Z',
            owner: {
                id: 'user-2',
                name: 'Shani Indira Natio',
                avatar: 'https://domain.com/photo?id=user-2',
            },
            upVotesBy: [],
            downVotesBy: [],
        },
    ],
    upVotesBy: [],
    downVotesBy: [],
};

describe('DetailPage component thread is null', () => {
    it('should display text "Upps, sepertinya kamu tersesat" when is loaded but threadDetail is null', () => {
        const store = mockStore({
            threadDetail: null,
            loading: { detailThread: false },
        });
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPage />
                </Provider>
            </BrowserRouter>,
        );
        const notFoundText = screen.getByText('Upps, sepertinya kamu tersesat');
        expect(notFoundText).toBeInTheDocument();
    });
});

describe('DetailPage component is not null', () => {
    beforeEach(() => {
        const store = mockStore({
            threadDetail: fakeDetailThread,
            leaderboards: [],
            loading: { detailThread: false },
        });

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPage />
                </Provider>
            </BrowserRouter>,
        );
    });

    it('should display the same thread title as the state threadDetail', () => {
        const titleText = screen.getByTestId('thread-title');
        expect(titleText).toHaveTextContent(fakeDetailThread.title);
    });

    it('should display the same thread body as the state threadDetail', () => {
        const bodyText = screen.getByTestId('thread-body');
        expect(bodyText).toHaveTextContent(fakeDetailThread.body);
    });

    it('should display comment title "Komentar (X) based on total comments"', () => {
        const commentTitle = screen.getByTestId('comments-title');
        expect(commentTitle).toHaveTextContent(`Komentar (${fakeDetailThread.comments.length})`);
    });
});
