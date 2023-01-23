/**
 * scenario test
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call toast correctly when data fetching failed
 *
 * - asyncCreateComment thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call toast correctly when data fetching failed
*/

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { buttonLoadingActionCreator, detailThreadLoadingActionCreator } from '../loading/action';
import { fakeErrorResponse } from '../../utils';
import {
    asyncCreateComment,
    asyncReceiveThreadDetail,
    createCommentActionCreator,
    receiveThreadDetailActionCreator,
} from './action';

const fakeThreadDetailResponse = {
    id: 'thread-1',
    title: 'Perbedaan class component dan functional component pada react',
    body: 'Pada react kan kita bisa bikin component dengan class dan functional, saya masih sedikit bingung membedakan antara keduanya. Gimana cara membedakannya?',
    createdAt: '2023-01-21T07:43:07.488Z',
    owner: {
        id: 'user-1',
        name: 'Toni Suwendi',
        avatar: 'https://domain.com/photo?id=user-1',
    },
    category: 'react',
    comments: [],
    upVotesBy: [],
    downVotesBy: [],
};

const fakeCommentResponse = {
    id: 'comment-1',
    content: 'Jadi ginii... Nah gituuu...',
    createdAt: '2023-01-23T12:23:14.467Z',
    upVotesBy: [],
    downVotesBy: [],
    owner: {
        id: 'user-1',
        name: 'Toni Suwendi',
        email: 'toni@mail.com',
        avatar: 'https://domain.com/photo?id=user-1',
    },
};

const fakeCommentInput = {
    threadId: 'thread-1',
    content: 'Jadi ginii... Nah gituuu...',
    onSuccess: () => {},
};

describe('asyncReceiveThreadDetail thunk', () => {
    beforeEach(() => {
        fetchApi._getDetailThread = fetchApi.getDetailThread;

        jest.spyOn(toast, 'error').mockImplementation(() => {});
    });

    it('should dispatch action correctly when data fetching success', async () => {
        fetchApi.getDetailThread = () => Promise.resolve(fakeThreadDetailResponse);

        const dispatch = jest.fn();
        await asyncReceiveThreadDetail(fakeThreadDetailResponse.id)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(detailThreadLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(receiveThreadDetailActionCreator(fakeThreadDetailResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(dispatch).toHaveBeenCalledWith(detailThreadLoadingActionCreator(false));
    });

    it('should dispatch action and call toast correctly when data fetching failed', async () => {
        fetchApi.getDetailThread = () => Promise.reject(fakeErrorResponse);

        const dispatch = jest.fn();
        await asyncReceiveThreadDetail(fakeThreadDetailResponse.id)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(detailThreadLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(dispatch).toHaveBeenCalledWith(detailThreadLoadingActionCreator(false));
        expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
    });

    afterEach(() => {
        fetchApi.getDetailThread = fetchApi._getDetailThread;

        delete fetchApi._getDetailThread;
    });
});

describe('asyncCreateComment thunk', () => {
    beforeEach(() => {
        fetchApi._createComment = fetchApi.createComment;

        jest.setTimeout(5000);
        jest.spyOn(toast, 'error').mockImplementation(() => {});
        jest.spyOn(toast, 'success').mockImplementation(() => {});
    });

    it('should dispatch action correctly when data fetching success', async () => {
        fetchApi.createComment = () => Promise.resolve(fakeCommentResponse);

        const dispatch = jest.fn();
        await asyncCreateComment(fakeCommentInput)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(createCommentActionCreator(fakeCommentResponse));
        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(false));
        expect(toast.success).toHaveBeenCalledWith('Berhasil memberikan komentar');
    });

    it('should dispatch action and call toast correctly when data fetching failed', async () => {
        fetchApi.createComment = () => Promise.reject(fakeErrorResponse);

        const dispatch = jest.fn();
        await asyncCreateComment(fakeCommentInput)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(true));
        expect(dispatch).toHaveBeenCalledWith(buttonLoadingActionCreator(false));
        expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
    });

    afterEach(() => {
        fetchApi.createComment = fetchApi._createComment;

        delete fetchApi._createComment;
    });
});
