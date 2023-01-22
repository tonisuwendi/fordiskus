import React from 'react';
import PropTypes from 'prop-types';

import ThreadItem from './ThreadItem';
import { ThreadsContainer } from './styled';

const ThreadsList = ({ threads }) => (
    <ThreadsContainer>
        {threads.map((thread) => (
            <ThreadItem
                key={thread.id}
                thread={thread}
                user={thread.user}
            />
        ))}
    </ThreadsContainer>
);

ThreadsList.propTypes = {
    threads: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        user: PropTypes.shape({}),
    })),
};

ThreadsList.defaultProps = {
    threads: [],
};

export default ThreadsList;
