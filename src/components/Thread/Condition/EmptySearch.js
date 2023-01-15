import React from 'react';
import PropTypes from 'prop-types';

import searchImage from '../../../images/search-empty.svg';

const EmptySearch = ({ searchKeyword }) => (
    <div className="empty-data">
        <img
            src={searchImage}
            alt="search empty"
            className="empty-data-image"
        />
        <p className="empty-data-text">
            Upps.. Tidak ada hasil untuk
            {' '}
            <strong>{searchKeyword}</strong>
        </p>
    </div>
);

EmptySearch.propTypes = {
    searchKeyword: PropTypes.string.isRequired,
};

export default EmptySearch;
