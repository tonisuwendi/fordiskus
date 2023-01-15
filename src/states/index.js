import { configureStore } from '@reduxjs/toolkit';

import authUserReducer from './authUser/reducer';
import filterReducer from './filter/reducer';
import isPreloadReducer from './isPreload/redurer';
import leaderboardsReducer from './leaderboards/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        leaderboards: leaderboardsReducer,
        users: usersReducer,
        threads: threadsReducer,
        filter: filterReducer,
    },
});

export default store;
