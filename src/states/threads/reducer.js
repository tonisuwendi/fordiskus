import { ActionType } from './action';

const threadsReducer = (threads = [], action = {}) => {
    switch (action.type) {
    case ActionType.RECEIVE_THREADS:
        return action.payload.threads;
    case ActionType.UPVOTE_THREAD:
        return threads.map((thread) => {
            if (thread.id === action.payload.threadId) {
                return {
                    ...thread,
                    upVotesBy: thread.upVotesBy.push(action.payload.userId),
                };
            }
            return thread;
        });
    case ActionType.DOWNVOTE_THREAD:
        return threads.map((thread) => {
            if (thread.id === action.payload.threadId) {
                return {
                    ...thread,
                    downVotesBy: thread.downVotesBy.push(action.payload.userId),
                };
            }
            return thread;
        });
    case ActionType.NEUTRALVOTE_THREAD:
        return threads.map((thread) => {
            if (thread.id === action.payload.threadId) {
                return {
                    ...thread,
                    upVotesBy: thread.upVotesBy.filter((vote) => vote !== action.payload.userId),
                    downVotesBy:
                        thread.downVotesBy.filter((vote) => vote !== action.payload.userId),
                };
            }
            return thread;
        });
    default:
        return threads;
    }
};

export default threadsReducer;
