import React from 'react';
import PropTypes from 'prop-types';

import CommentItem from './CommentItem';

const ListComments = ({ comments }) => (
    <div className="section-content list-comments">
        <h3 className="section-title">{`Komentar (${comments.length})`}</h3>
        <div className="list-comments-content">
            {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    {...comment}
                />
            ))}
        </div>
    </div>
);

ListComments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
    })),
};

ListComments.defaultProps = {
    comments: [],
};

export default ListComments;
