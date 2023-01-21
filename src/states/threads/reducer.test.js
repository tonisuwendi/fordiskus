/**
 * test scenario for threadsReducer
 *
 * - threadsReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new upVotesBy or downVotesBy when given by VOTE_THREAD action
*/

import threadsReducer from './reducer';
import { ActionType } from './action';

const threads = [
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

describe('threadsReducers function', () => {
    it('should return the initial state when given by unknown action', () => {
        const initialState = [];
        const action = { type: 'unknown' };
        const nextState = threadsReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });

    it('should return the threads when given by RECEIVE_THREADS action', () => {
        const initialState = [];
        const action = {
            type: ActionType.RECEIVE_THREADS,
            payload: { threads },
        };
        const nextState = threadsReducer(initialState, action);
        expect(nextState).toEqual(action.payload.threads);
    });

    it('should return the threads with the new upVotesBy or downVotesBy when given by VOTE_THREAD action', () => {
        const initialState = threads;
        const action = {
            type: ActionType.VOTE_THREAD,
            payload: {
                threadId: 'thread-1',
                action: 'up',
                userId: 'user-1',
            },
        };
        const nextState = threadsReducer(initialState, action);
        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [action.payload.userId],
            },
        ]);

        const action2 = {
            type: ActionType.VOTE_THREAD,
            payload: {
                threadId: 'thread-1',
                action: 'neutral',
                userId: 'user-1',
            },
        };
        const nextState2 = threadsReducer(nextState, action2);
        expect(nextState2).toEqual(initialState);

        const action3 = {
            type: ActionType.VOTE_THREAD,
            payload: {
                threadId: 'thread-1',
                action: 'down',
                userId: 'user-1',
            },
        };
        const nextState3 = threadsReducer(nextState2, action3);
        expect(nextState3).toEqual([
            {
                ...initialState[0],
                downVotesBy: [action.payload.userId],
            },
        ]);
    });
});
