/**
 * scenario test
 *
 * - asyncRegisterUser thunk
 *  - should dispatch action correctly when register success
 *  - should dispatch action and call toast correctly when register failed
*/

import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { fakeErrorResponse } from '../../utils';
import { asyncRegisterUser } from './action';
import { buttonLoadingActionCreator } from '../loading/action';

const fakeUserResponse = {
    id: 'user-1',
    name: 'Toni Suwendi',
    email: 'toni@mail.com',
    avatar: 'https://domain.com/photo?id=user-1',
};

const fakeUserInput = {
    name: 'Toni Suwendi',
    email: 'toni@mail.com',
    password: 'toni123',
    navigate: () => {},
};

describe('asyncRegisterUser thunk', () => {
    beforeEach(() => {
        fetchApi._register = fetchApi.register;

        jest.spyOn(toast, 'success').mockImplementation(() => {});
        jest.spyOn(toast, 'error').mockImplementation(() => {});
    });

    it('should dispatch action correctly when register success', async () => {
        fetchApi.register = () => Promise.resolve(fakeUserResponse);

        const dispatch = jest.fn();
        await asyncRegisterUser(fakeUserInput)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(false));
        expect(toast.success).toHaveBeenCalledWith('Pendaftaran berhasil dilakukan');
    });

    it('should dispatch action and call toast correctly when register failed', async () => {
        fetchApi.register = () => Promise.reject(fakeErrorResponse);

        const dispatch = jest.fn();
        await asyncRegisterUser(fakeUserInput)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(false));
        expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
    });

    afterEach(() => {
        fetchApi.register = fetchApi._register;

        delete fetchApi._register;
    });
});
