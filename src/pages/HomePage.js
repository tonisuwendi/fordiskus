import React from 'react';
import { Link } from 'react-router-dom';

import CategoriesSection from '../components/CategoriesSection';
import ThreadsList from '../components/Thread/ThreadsList';
import Button from '../components/Button';
import Leaderboard from '../components/Leaderboard';
import ProfileSection from '../components/ProfileSection';

const HomePage = () => (
    <div className="home-container">
        <div className="home-left">
            <CategoriesSection />
        </div>
        <div className="home-content">
            <div className="want-create-thread section-content">
                <h2 className="want-create-thread__title">Mau bikin diskusi?</h2>
                <Link to="/new">
                    <Button label="Buat Diskusi" />
                </Link>
            </div>
            <ThreadsList />
        </div>
        <div className="home-right">
            <ProfileSection />
            <Leaderboard />
        </div>
    </div>
);

export default HomePage;
