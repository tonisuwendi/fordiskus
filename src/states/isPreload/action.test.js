/**
 * scenario test
 *
 * - asyncPreloadProccess thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call toast correctly when data fetching failed
*/

import fetchApi from '../../utils/fetchApi';
import { setAuthUserActionCreator } from '../authUser/action';
import { asyncPreloadProccess, setIsPreloadActionCreator } from './action';
import { fakeErrorResponse } from '../../utils';

const fakeUserResponse = {
    id: 'user-1',
    name: 'Toni Suwendi',
    email: 'toni@mail.com',
    avatar: 'https://domain.com/photo?id=user-1',
};

describe('asyncPreloadProccess thunk', () => {
    beforeEach(() => {
        fetchApi._getOwnProfile = fetchApi.getOwnProfile;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        fetchApi.getOwnProfile = () => Promise.resolve(fakeUserResponse);

        const dispatch = jest.fn();
        await asyncPreloadProccess()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUserResponse));
        expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    });

    it('should dispatch action and call toast correctly when data fetching failed', async () => {
        fetchApi.getOwnProfile = () => Promise.reject(fakeErrorResponse);

        const dispatch = jest.fn();
        await asyncPreloadProccess()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
        expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    });

    afterEach(() => {
        fetchApi.getOwnProfile = fetchApi._getOwnProfile;

        delete fetchApi._getOwnProfile;
    });
});
