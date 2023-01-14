import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

const SearchBox = () => {
    const { pathname } = useLocation();

    return (
        <div className="search-box">
            <input type="text" placeholder="Cari diskusi disini..." autoComplete="off" className="search-box__input" />
            {pathname !== '/' && (
                <button type="button" className="search-box__button">
                    <FiSearch />
                </button>
            )}
        </div>
    );
};

export default SearchBox;
