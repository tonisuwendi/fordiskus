import React from 'react';

const ThreadHeader = () => (
    <div className="thread__header">
        <img className="thread__header-photo" src="https://id-static.z-dn.net/files/d39/41834b86159e993dc59c8f2bcf764fd3.jpg" alt="user" />
        <div className="thread__header__content">
            <p className="thread__header-name">Paijo Subejo</p>
            <small className="thread__header-date">2 jam yang lalu</small>
        </div>
    </div>
);

export default ThreadHeader;
