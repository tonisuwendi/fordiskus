import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ThreadContent = ({ isDetail }) => (
    <>
        {isDetail ? (
            <p className="thread__content-title">Cara membuat kondisi di dalam kondisi pada react</p>
        ) : (
            <Link to="/thread/aokwokw">
                <p className="thread__content-title">Cara membuat kondisi di dalam kondisi pada react</p>
            </Link>
        )}
        <p className={`thread__content-body ${isDetail ? '' : 'line-clamp-2'}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            At, aut laborum esse porro soluta distinctio nulla corporis reiciendis unde
            vitae aliquam temporibus quisquam officiis,
            qui alias autem pariatur voluptates? Accusamus.
        </p>
        {isDetail && (
            <p className="thread__content-category">#reactjs</p>
        )}
    </>
);

ThreadContent.propTypes = {
    isDetail: PropTypes.bool.isRequired,
};

export default ThreadContent;
