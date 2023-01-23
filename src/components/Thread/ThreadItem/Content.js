/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../Button';
import { filterCategoryActionCreator } from '../../../states/filter/action';
import { ThreadContentBody, ThreadContentTitle } from '../styled';

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
                <ThreadContentTitle data-testid="thread-title" isDetail>{title}</ThreadContentTitle>
            ) : (
                <Link to={`/thread/${id}`}>
                    <ThreadContentTitle data-testid="thread-title" withLink>{title}</ThreadContentTitle>
                </Link>
            )}
            <ThreadContentBody
                data-testid="thread-body"
                isDetail={isDetail}
                withLineClamp={!isDetail}
                dangerouslySetInnerHTML={{ __html: body }}
            />
            <Button
                label={`#${category?.toLowerCase()}`}
                variant="outline"
                size="small"
                onClick={handleClickCategory}
                style={{
                    height: isDetail ? 28 : 24,
                    marginTop: 10,
                    padding: '0 8px',
                }}
            />
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
