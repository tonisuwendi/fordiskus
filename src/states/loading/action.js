const ActionType = {
    THREADS_LOADING: 'THREADS_LOADING',
    DETAIL_THREAD_LOADING: 'DETAIL_THREAD_LOADING',
    LEADERBOARDS_LOADING: 'LEADERBOARDS_LOADING',
    BUTTON_LOADING: 'BUTTON_LOADING',
};

const threadsLoadingActionCreator = (isLoading) => ({
    type: ActionType.THREADS_LOADING,
    payload: { isLoading },
});

const detailThreadLoadingActionCreator = (isLoading) => ({
    type: ActionType.DETAIL_THREAD_LOADING,
    payload: { isLoading },
});

const leaderboardsLoadingActionCreator = (isLoading) => ({
    type: ActionType.LEADERBOARDS_LOADING,
    payload: { isLoading },
});

const buttonLoadingActionCreator = (isLoading) => ({
    type: ActionType.BUTTON_LOADING,
    payload: { isLoading },
});

export {
    ActionType,
    threadsLoadingActionCreator,
    detailThreadLoadingActionCreator,
    leaderboardsLoadingActionCreator,
    buttonLoadingActionCreator,
};
