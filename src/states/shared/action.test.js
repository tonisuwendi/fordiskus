/**
 * scenario test
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call toast correctly when data fetching failed
*/

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { threadsLoadingActionCreator } from '../loading/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { asyncPopulateUsersAndThreads } from './action';
import { fakeErrorResponse } from '../../utils';

const fakeThreadsResponse = [
    {
        id: 'thread-1',
        title: 'Perhitungan',
        body: 'Berapa 1 ditambah 2?',
        createdAt: '2023-01-21T07:43:07.488Z',
        owner: {
            id: 'user-1',
            name: 'Toni Suwendi',
            avatar: 'https://domain.com/photo?id=user-1',
        },
        category: 'matematika',
        comments: [],
        upVotesBy: [],
        downVotesBy: [],
    },
];

const fakeUsersResponse = [
    {
        id: 'user-1',
        name: 'Toni Suwendi',
        email: 'toni@mail.com',
        avatar: 'https://domain.com/photo?id=user-1',
    },
];

describe('asyncReceiveLeaderboards thunk', () => {
    beforeEach(() => {
        fetchApi._getAllUsers = fetchApi.getAllUsers;
        fetchApi._getAllThreads = fetchApi.getAllThreads;

        jest.spyOn(toast, 'error').mockImplementation(() => {});
    });

    it('should dispatch action correctly when data fetching success', async () => {
        fetchApi.getAllUsers = () => Promise.resolve(fakeUsersResponse);
        fetchApi.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

        const dispatch = jest.fn();
        await asyncPopulateUsersAndThreads()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(threadsLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
        expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(dispatch).toHaveBeenCalledWith(threadsLoadingActionCreator(false));
    });

    it('should dispatch action and call toast correctly when data fetching failed', async () => {
        fetchApi.getAllUsers = () => Promise.reject(fakeErrorResponse);
        fetchApi.getAllThreads = () => Promise.reject(fakeErrorResponse);

        const dispatch = jest.fn();
        await asyncPopulateUsersAndThreads()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(threadsLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(dispatch).toHaveBeenCalledWith(threadsLoadingActionCreator(false));
        expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
    });

    afterEach(() => {
        fetchApi.getAllUsers = fetchApi._getAllUsers;
        fetchApi.getAllThreads = fetchApi._getAllThreads;

        delete fetchApi._getAllUsers;
        delete fetchApi._getAllThreads;
    });
});
