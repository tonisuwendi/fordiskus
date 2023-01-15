import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchThreadsActionCreator } from '../../states/filter/action';

const SearchBox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleChangeInput = (event) => {
        const { target: { value } } = event;
        dispatch(searchThreadsActionCreator(value));
    };

    const handleSearch = () => navigate('/');

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Cari diskusi disini..."
                autoComplete="off"
                className="search-box__input"
                onChange={handleChangeInput}
            />
            {pathname !== '/' && (
                <button
                    type="button"
                    className="search-box__button"
                    onClick={handleSearch}
                >
                    <FiSearch />
                </button>
            )}
        </div>
    );
};

export default SearchBox;
