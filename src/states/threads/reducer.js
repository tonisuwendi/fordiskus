import { ActionType } from './action';

const threadsReducer = (threads = [], action = {}) => {
    switch (action.type) {
    case ActionType.RECEIVE_THREADS:
        return action.payload.threads;
    case ActionType.VOTE_THREAD:
        return threads.map((thread) => {
            if (thread.id === action.payload.threadId) {
                return {
                    ...thread,
                    ...(action.payload.action === 'up' && {
                        downVotesBy: thread.downVotesBy.filter((vote) => vote !== action.payload.userId),
                        upVotesBy: [...thread.upVotesBy, action.payload.userId],
                    }),
                    ...(action.payload.action === 'down' && {
                        upVotesBy: thread.upVotesBy.filter((vote) => vote !== action.payload.userId),
                        downVotesBy: [...thread.downVotesBy, action.payload.userId],
                    }),
                    ...(action.payload.action === 'neutral' && {
                        upVotesBy: thread.upVotesBy.filter((vote) => vote !== action.payload.userId),
                        downVotesBy: thread.downVotesBy.filter((vote) => vote !== action.payload.userId),
                    }),
                };
            }
            return thread;
        });
    default:
        return threads;
    }
};

export default threadsReducer;
