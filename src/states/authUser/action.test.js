/**
 * scenario test
 *
 * - asyncSetAuthUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call toast correctly when data fetching failed
*/

import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { buttonLoadingActionCreator } from '../loading/action';
import { asyncSetAuthUser, setAuthUserActionCreator } from './action';
import { fakeErrorResponse } from '../../utils';

const fakeUserResponse = {
    id: 'user-1',
    name: 'Toni Suwendi',
    email: 'toni@mail.com',
    avatar: 'https://domain.com/photo?id=user-1',
};

describe('asyncSetAuthUser thunk', () => {
    beforeEach(() => {
        fetchApi._login = fetchApi.login;
        fetchApi._getOwnProfile = fetchApi.getOwnProfile;

        jest.spyOn(toast, 'error').mockImplementation(() => {});
    });

    it('should dispatch action correctly when data fetching success', async () => {
        fetchApi.login = () => Promise.resolve({ token: 'initoken123' });
        fetchApi.getOwnProfile = () => Promise.resolve(fakeUserResponse);

        const dispatch = jest.fn();
        await asyncSetAuthUser(fakeUserResponse)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUserResponse));
        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(false));
    });

    it('should dispatch action and call toast correctly when data fetching failed', async () => {
        fetchApi.login = () => Promise.reject(fakeErrorResponse);
        fetchApi.getOwnProfile = () => Promise.reject(fakeErrorResponse);

        const dispatch = jest.fn();
        await asyncSetAuthUser(fakeUserResponse)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(false));
        expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
    });

    afterEach(() => {
        fetchApi.login = fetchApi._login;
        fetchApi.getOwnProfile = fetchApi._getOwnProfile;

        delete fetchApi._login;
        delete fetchApi._getOwnProfile;
    });
});
