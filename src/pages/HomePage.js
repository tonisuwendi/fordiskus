import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesSection from '../components/CategoriesSection';
import ThreadsList from '../components/Thread/ThreadsList';
import Button from '../components/Button';
import Leaderboard from '../components/Leaderboard';
import ProfileSection from '../components/ProfileSection';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { filterCategoryActionCreator } from '../states/filter/action';

const HomePage = () => {
    const dispatch = useDispatch();
    const {
        authUser, users, threads, filter,
    } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncPopulateUsersAndThreads());
        return () => dispatch(filterCategoryActionCreator(''));
    }, [dispatch]);

    const filteredThreads = threads.filter((thread) => (
        thread.title.toLowerCase().includes(filter.searchKeyword.toLowerCase())
    ));

    const threadsList = filteredThreads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
    }));

    return (
        <div className="home-container">
            <div className="home-left">
                <CategoriesSection />
            </div>
            <div className="home-content">
                <div className="want-create-thread section-content">
                    <h2 className="want-create-thread__title">Mau diskusi apaan?</h2>
                    <Link to="/new">
                        <Button label="Buat Diskusi" />
                    </Link>
                </div>
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
