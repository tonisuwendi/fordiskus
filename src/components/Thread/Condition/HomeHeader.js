import React, { useState } from 'react';

import Button from '../../Button';
import CategoriesSection from '../../CategoriesSection';
import Leaderboard from '../../Leaderboard';
import useResponsive from '../../../hooks/useReponsive';

const HomeHeader = () => {
    const [showInfo, setShowInfo] = useState(null);
    const { isMobile } = useResponsive();

    const handleShowInfo = (info) => {
        setShowInfo((prevState) => (prevState === info ? null : info));
    };

    return (
        <>
            {isMobile && (
                <div className="home-filter-mobile">
                    <Button
                        label="Kategori"
                        variant="outline"
                        size="small"
                        onClick={() => handleShowInfo('categories')}
                    />
                    <Button
                        label="Leaderboards"
                        variant="outline"
                        size="small"
                        onClick={() => handleShowInfo('leaderboards')}
                    />
                </div>
            )}
            {isMobile && showInfo === 'categories' && <CategoriesSection />}
            {isMobile && showInfo === 'leaderboards' && <Leaderboard />}
        </>
    );
};

export default HomeHeader;
