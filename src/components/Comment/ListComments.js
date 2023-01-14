import React from 'react';

import CommentItem from './CommentItem';

const ListComments = () => (
    <div className="section-content list-comments">
        <h3 className="section-title">Komentar (3)</h3>
        <div className="list-comments-content">
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </div>
    </div>
);

export default ListComments;
