/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../Button';
import { filterCategoryActionCreator } from '../../../states/filter/action';

const ThreadContent = ({
    isDetail, id, title, body, category,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickCategory = () => {
        dispatch(filterCategoryActionCreator(category));
        navigate('/');
    };

    return (
        <>
            {isDetail ? (
                <p className="thread__content-title">{title}</p>
            ) : (
                <Link to={`/thread/${id}`}>
                    <p className="thread__content-title">{title}</p>
                </Link>
            )}
            <p className={`thread__content-body ${isDetail ? '' : 'line-clamp-2'}`} dangerouslySetInnerHTML={{ __html: body }} />
            {isDetail && (
                <Button
                    label={`#${category.toLowerCase()}`}
                    variant="outline"
                    size="small"
                    onClick={handleClickCategory}
                    style={{ marginTop: 10, padding: '0 8px', height: 28 }}
                />
            )}
        </>
    );
};

ThreadContent.propTypes = {
    isDetail: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default ThreadContent;
