/**
 * test scenario
 *
 * - HomePage component
 *  - should display text "Kategori Populer", "Semua Kategori", "Mau diskusi apaan?", and "Top 3 Terbaik"
 *  - should display categories "#react" and "#javascript"
 *  - should display threads with title "Apa itu javascript" and "Apa itu React"
 *  - should display leaderboards with name "Toni Suwendi" and "Shani Indira Natio"
 *  - should display profile is authUser not null
 */

import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import HomePage from '.';

const mockStore = configureMockStore([thunk]);
const fakeThreadsList = [
    {
        id: 'thread-1',
        title: 'Apa itu javascript',
        body: 'Javascript itu apa sih?',
        category: 'javascript',
        createdAt: '2023-01-23T09:03:12.807Z',
        ownerId: 'user-1',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
    },
    {
        id: 'thread-2',
        title: 'Apa itu React',
        body: 'React itu apa sih?',
        category: 'react',
        createdAt: '2023-01-23T19:03:12.807Z',
        ownerId: 'user-2',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
    },
];
const fakeUsersList = [
    {
        id: 'user-1',
        name: 'Toni Suwendi',
        email: 'toni@mail.com',
        avatar: 'https://domain.com/photo?id=user-1',
    },
    {
        id: 'user-2',
        name: 'Shani Indira Natio',
        email: 'shani@mail.com',
        avatar: 'https://domain.com/photo?id=user-2',
    },
];

const homePageRender = (storeValue = {}) => {
    const store = mockStore({
        loading: {},
        filter: {
            category: '',
            searchKeyword: '',
        },
        threads: fakeThreadsList,
        users: fakeUsersList,
        leaderboards: fakeUsersList.map((user, index) => ({ user, score: 2 * (index + 1) })),
        ...storeValue,
    });

    render(
        <BrowserRouter>
            <Provider store={store}>
                <HomePage />
            </Provider>
        </BrowserRouter>,
    );
};

describe('HomePage component', () => {
    it('should display text "Kategori Populer", "Semua Kategori", "Mau diskusi apaan?", and "Top 3 Terbaik"', () => {
        homePageRender({ authUser: null });
        const categoryTitle = screen.getByText('Kategori Populer');
        expect(categoryTitle).toBeInTheDocument();
        const allCategories = screen.getByText('Semua Kategori');
        expect(allCategories).toBeInTheDocument();
        const askDisscuss = screen.getByText('Mau diskusi apaan?');
        expect(askDisscuss).toBeInTheDocument();
        const leaderboardTitle = screen.getByText('Top 3 Terbaik');
        expect(leaderboardTitle).toBeInTheDocument();
    });

    it('should display categories "#react" and "#javascript"', () => {
        homePageRender();
        const category = screen.getAllByTestId('category-item');
        expect(category[1]).toHaveTextContent(`#${fakeThreadsList[0].category}1 diskusi`);
        expect(category[2]).toHaveTextContent(`#${fakeThreadsList[1].category}1 diskusi`);
    });

    it('should display threads with title "Apa itu javascript" and "Apa itu React"', () => {
        homePageRender();
        const thread = screen.getAllByTestId('thread-title');
        expect(thread[0]).toHaveTextContent(fakeThreadsList[0].title);
        expect(thread[1]).toHaveTextContent(fakeThreadsList[1].title);
    });

    it('should display leaderboards with name "Toni Suwendi" and "Shani Indira Natio"', () => {
        homePageRender();
        const leaderboard = screen.getAllByTestId('leaderboard-name');
        expect(leaderboard[0]).toHaveTextContent(fakeUsersList[0].name);
        expect(leaderboard[1]).toHaveTextContent(fakeUsersList[1].name);
    });

    it('should display profile is authUser not null', () => {
        const fakeAuthUser = { name: 'Toni Suwendi' };
        homePageRender({ authUser: fakeAuthUser });
        const name = screen.getByTestId('profile-name');
        expect(name).toHaveTextContent(fakeAuthUser.name);
    });
});
