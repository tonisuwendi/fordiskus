/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threadDetail when given by RECEIVE_THREAD_DETAIL action
 *  - should return the threadDetail with the new upVotesBy or downVotesBy when given by VOTE_THREAD_DETAIL action
 *  - should return the threadDetail with the new comments when given by CREATE_COMMENT action and with upVotesBy or downVotesBy when given by VOTE_COMMENT action
*/

import threadDetailReducer from './reducer';
import { ActionType } from './action';

const threadDetail = {
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

describe('threadDetailReducers function', () => {
    it('should return the initial state when given by unknown action', () => {
        const initialState = null;
        const action = { type: 'unknown' };
        const nextState = threadDetailReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });

    it('should return the threadDetail when given by RECEIVE_THREAD_DETAIL action', () => {
        const initialState = null;
        const action = {
            type: ActionType.RECEIVE_THREAD_DETAIL,
            payload: { threadDetail },
        };
        const nextState = threadDetailReducer(initialState, action);
        expect(nextState).toEqual(action.payload.threadDetail);
    });

    it('should return the threadDetail with the new upVotesBy or downVotesBy when given by VOTE_THREAD_DETAIL action', () => {
        const initialState = threadDetail;
        const action = {
            type: ActionType.VOTE_THREAD_DETAIL,
            payload: { action: 'up', userId: 'user-1' },
        };
        const nextState = threadDetailReducer(initialState, action);
        expect(nextState).toEqual({
            ...initialState,
            upVotesBy: [action.payload.userId],
        });

        const action2 = {
            type: ActionType.VOTE_THREAD_DETAIL,
            payload: { action: 'neutral', userId: 'user-1' },
        };
        const nextState2 = threadDetailReducer(nextState, action2);
        expect(nextState2).toEqual(initialState);

        const action3 = {
            type: ActionType.VOTE_THREAD_DETAIL,
            payload: { action: 'down', userId: 'user-1' },
        };
        const nextState3 = threadDetailReducer(nextState2, action3);
        expect(nextState3).toEqual({
            ...initialState,
            downVotesBy: [action.payload.userId],
        });
    });

    it('should return the threadDetail with the new comments when given by CREATE_COMMENT action and upVotesBy or downVotesBy when given by VOTE_COMMENT action', () => {
        const initialState = threadDetail;

        // create comment
        const commentAction = {
            type: ActionType.CREATE_COMMENT,
            payload: {
                comment: {
                    id: 'comment-1',
                    content: 'Perbedaan paling mendasar adalah functional component lebih ringkas dan mudah dibaca daripada class component',
                    createdAt: '2023-01-21T08:26:35.224Z',
                    upVotesBy: [],
                    downVotesBy: [],
                    owner: {
                        id: 'user-2',
                        name: 'Shani Indira Natio',
                        email: 'shani@mail.com',
                        avatar: 'https://domain.com/photo?id=user-2',
                    },
                },
            },
        };
        const commentNextState = threadDetailReducer(initialState, commentAction);
        expect(commentNextState).toEqual({
            ...initialState,
            comments: [commentAction.payload.comment, ...initialState.comments],
        });

        // up-vote
        const upVoteAction = {
            type: ActionType.VOTE_COMMENT,
            payload: {
                action: 'up',
                userId: 'user-1',
                commentId: 'comment-1',
            },
        };
        const upVoteNextState = threadDetailReducer(commentNextState, upVoteAction);
        expect(upVoteNextState).toEqual({
            ...commentNextState,
            comments: [{
                ...commentNextState.comments[0],
                upVotesBy: [upVoteAction.payload.userId],
            }],
        });

        // neutral vote
        const neutralVoteAction = {
            type: ActionType.VOTE_COMMENT,
            payload: {
                action: 'neutral',
                userId: 'user-1',
                commentId: 'comment-1',
            },
        };
        const neutralVoteNextState = threadDetailReducer(upVoteNextState, neutralVoteAction);
        expect(neutralVoteNextState).toEqual(commentNextState);

        // down vote
        const downVoteAction = {
            type: ActionType.VOTE_COMMENT,
            payload: {
                action: 'down',
                userId: 'user-1',
                commentId: 'comment-1',
            },
        };
        const downVoteNextState = threadDetailReducer(neutralVoteNextState, downVoteAction);
        expect(downVoteNextState).toEqual({
            ...neutralVoteNextState,
            comments: [{
                ...neutralVoteNextState.comments[0],
                downVotesBy: [upVoteAction.payload.userId],
            }],
        });
    });
});
