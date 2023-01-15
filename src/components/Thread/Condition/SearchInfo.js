import React from 'react';
import PropTypes from 'prop-types';

const SearchInfo = ({ searchKeyword }) => (
    <p className="search-info">
        Hasil pencarian:
        {' '}
        <strong>{searchKeyword}</strong>
    </p>
);

SearchInfo.propTypes = {
    searchKeyword: PropTypes.string.isRequired,
};

export default SearchInfo;
