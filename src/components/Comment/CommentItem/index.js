import React from 'react';

import ButtonAction from '../../ButtonAction';

const CommentItem = () => (
    <div className="comment-item">
        <div className="comment__header">
            <div className="comment__header-user">
                <img className="comment__header-photo" src="https://id-static.z-dn.net/files/d39/41834b86159e993dc59c8f2bcf764fd3.jpg" alt="user" />
                <p className="comment__header-name">Paijo Subejo</p>
            </div>
            <small className="comment__header-date">2 jam yang lalu</small>
        </div>
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
