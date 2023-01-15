import React from 'react';

import ButtonAction from '../../ButtonAction';
import CommentHeader from './Header';

const CommentItem = () => (
    <div className="comment-item">
        <CommentHeader />
        <p className="comment__body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            At, aut laborum esse porro soluta distinctio nulla corporis reiciendis unde
            vitae aliquam temporibus quisquam officiis,
            qui alias autem pariatur voluptates? Accusamus.
        </p>
        <ButtonAction showComment={false} />
    </div>
);

export default CommentItem;
