const ActionType = {
    THREADS_LOADING: 'loading/threads',
    DETAIL_THREAD_LOADING: 'loading/detailThread',
    LEADERBOARDS_LOADING: 'loading/leaderboards',
    BUTTON_LOADING: 'loading/button',
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
