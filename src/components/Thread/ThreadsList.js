import React from 'react';
import PropTypes from 'prop-types';

import ThreadItem from './ThreadItem';

const ThreadsList = ({ threads }) => (
    <div className="threads">
        {threads.map((thread) => (
            <ThreadItem
                key={thread.id}
                thread={thread}
                user={thread.user}
            />
        ))}
    </div>
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
