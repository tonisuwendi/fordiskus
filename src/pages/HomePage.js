import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesSection from '../components/CategoriesSection';
import ThreadsList from '../components/Thread/ThreadsList';
import Leaderboard from '../components/Leaderboard';
import ProfileSection from '../components/ProfileSection';
import SearchInfo from '../components/Thread/Condition/SearchInfo';
import CreateInfo from '../components/Thread/Condition/CreateInfo';
import EmptySearch from '../components/Thread/Condition/EmptySearch';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { filterCategoryActionCreator } from '../states/filter/action';

const HomePage = () => {
    const dispatch = useDispatch();
    const {
        authUser, users, threads, filter: { category, searchKeyword },
    } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncPopulateUsersAndThreads());
        return () => dispatch(filterCategoryActionCreator(''));
    }, [dispatch]);

    const filteredCategories = category ? threads.filter((thread) => thread.category === category) : threads;

    const filteredSearch = filteredCategories.filter((thread) => (
        thread.title.toLowerCase().includes(searchKeyword.toLowerCase())
    ));

    const threadsList = filteredSearch.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
    }));

    let topHomeContent = <CreateInfo />;
    if (searchKeyword && threadsList.length > 0) topHomeContent = <SearchInfo searchKeyword={searchKeyword} />;
    else if (searchKeyword) topHomeContent = <EmptySearch searchKeyword={searchKeyword} />;

    return (
        <div className="home-container">
            <div className="home-left">
                <CategoriesSection />
            </div>
            <div className="home-content">
                {topHomeContent}
                <ThreadsList threads={threadsList} />
            </div>
            <div className="home-right">
                {authUser && <ProfileSection />}
                <Leaderboard />
            </div>
        </div>
    );
};

export default HomePage;
