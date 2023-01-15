import React from 'react';

const CommentHeader = () => (
    <div className="comment__header">
        <div className="comment__header-user">
            <img className="comment__header-photo" src="https://id-static.z-dn.net/files/d39/41834b86159e993dc59c8f2bcf764fd3.jpg" alt="user" />
            <p className="comment__header-name">Paijo Subejo</p>
        </div>
        <small className="comment__header-date">2 jam yang lalu</small>
    </div>
);

export default CommentHeader;
