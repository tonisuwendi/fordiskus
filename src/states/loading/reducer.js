import { ActionType } from './action';

const loadingReducer = (loading = {}, action = {}) => {
    switch (action.type) {
    case ActionType.THREADS_LOADING:
        return { ...loading, threads: action.payload.isLoading };
    case ActionType.DETAIL_THREAD_LOADING:
        return { ...loading, detailThread: action.payload.isLoading };
    case ActionType.LEADERBOARDS_LOADING:
        return { ...loading, leaderboard: action.payload.isLoading };
    case ActionType.BUTTON_LOADING:
        return { ...loading, button: action.payload.isLoading };
    default:
        return loading;
    }
};

export default loadingReducer;
