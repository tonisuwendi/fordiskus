import React from 'react';
import PropTypes from 'prop-types';
import ThreadContent from './Content';
import ThreadHeader from './Header';
import ButtonAction from '../../ButtonAction';

const ThreadItem = ({ isDetail }) => (
    <div className="thread-item section-content">
        <ThreadHeader />
        <ThreadContent isDetail={isDetail} />
        <ButtonAction showComment={!isDetail} />
    </div>
);

ThreadItem.propTypes = {
    isDetail: PropTypes.bool,
};

ThreadItem.defaultProps = {
    isDetail: false,
};

export default ThreadItem;
