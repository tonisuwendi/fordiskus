import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ThreadItem from './ThreadItem';

const ThreadsList = ({ threads }) => {
    const { filter: { category } } = useSelector((states) => states);

    const filteredThreads = category
        ? threads.filter((thread) => thread.category === category) : threads;

    return (
        <div className="threads">
            {filteredThreads.map((thread) => (
                <ThreadItem
                    key={thread.id}
                    thread={thread}
                    user={thread.user}
                />
            ))}
        </div>
    );
};

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
