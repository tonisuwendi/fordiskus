import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authUserReducer from './authUser/reducer';
import filterReducer from './filter/reducer';
import isPreloadReducer from './isPreload/redurer';
import leaderboardsReducer from './leaderboards/reducer';
import loadingReducer from './loading/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        leaderboards: leaderboardsReducer,
        users: usersReducer,
        threads: threadsReducer,
        threadDetail: threadDetailReducer,
        filter: filterReducer,
        loading: loadingReducer,
        loadingBar: loadingBarReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 55 },
        serializableCheck: { warnAfter: 55 },
    }),
});

export default store;
