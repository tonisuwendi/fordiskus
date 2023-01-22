import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { searchThreadsActionCreator } from '../../states/filter/action';
import { SearchBoxButton, SearchBoxInput, SearchBoxStyled } from './styled';

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
        <SearchBoxStyled>
            <SearchBoxInput
                type="text"
                placeholder="Cari diskusi disini..."
                autoComplete="off"
                onChange={handleChangeInput}
            />
            {pathname !== '/' && (
                <SearchBoxButton
                    type="button"
                    onClick={handleSearch}
                >
                    <FiSearch />
                </SearchBoxButton>
            )}
        </SearchBoxStyled>
    );
};

export default SearchBox;
