/**
 * scenario test
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call toast correctly when data fetching failed
*/

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { leaderboardsLoadingActionCreator } from '../loading/action';
import { asyncReceiveLeaderboards, receiveLeaderboardsActionCreator } from './action';
import { fakeErrorResponse } from '../../utils';

const fakeLeaderboardsResponse = [
    {
        user: {
            id: 'user-1',
            name: 'Toni Suwendi',
            email: 'toni@mail.com',
            avatar: 'https://domain.com/photo?id=user-1',
        },
        score: 26000,
    },
    {
        user: {
            id: 'user-2',
            name: 'Shani Indira Natio',
            email: 'shani@mail.com',
            avatar: 'https://domain.com/photo?id=user-2',
        },
        score: 23500,
    },
];

describe('asyncReceiveLeaderboards thunk', () => {
    beforeEach(() => {
        fetchApi._seeLeaderboards = fetchApi.seeLeaderboards;

        jest.spyOn(toast, 'error').mockImplementation(() => {});
    });

    it('should dispatch action correctly when data fetching success', async () => {
        fetchApi.seeLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

        const dispatch = jest.fn();
        await asyncReceiveLeaderboards()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(leaderboardsLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(dispatch).toHaveBeenCalledWith(leaderboardsLoadingActionCreator(false));
    });

    it('should dispatch action and call toast correctly when data fetching failed', async () => {
        fetchApi.seeLeaderboards = () => Promise.reject(fakeErrorResponse);

        const dispatch = jest.fn();
        await asyncReceiveLeaderboards()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(leaderboardsLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(dispatch).toHaveBeenCalledWith(leaderboardsLoadingActionCreator(false));
        expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
    });

    afterEach(() => {
        fetchApi.seeLeaderboards = fetchApi._seeLeaderboards;

        delete fetchApi._seeLeaderboards;
    });
});
