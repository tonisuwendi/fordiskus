/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ThreadContent = ({
    isDetail, title, body, category,
}) => (
    <>
        {isDetail ? (
            <p className="thread__content-title">{title}</p>
        ) : (
            <Link to="/thread/aokwokw">
                <p className="thread__content-title">{title}</p>
            </Link>
        )}
        <p className={`thread__content-body ${isDetail ? '' : 'line-clamp-2'}`} dangerouslySetInnerHTML={{ __html: body }} />
        {isDetail && (
            <p className="thread__content-category">{`#${category.toLowerCase()}`}</p>
        )}
    </>
);

ThreadContent.propTypes = {
    isDetail: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default ThreadContent;
