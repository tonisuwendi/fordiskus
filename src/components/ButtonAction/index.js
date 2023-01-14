import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button';

const ButtonAction = ({ showComment }) => (
    <div className="thread__action">
        <Button type="like" amount={4} />
        <Button type="dislike" amount={1} />
        {showComment && (
            <Link to="/thread/aokwokw">
                <Button type="comment" amount={8} />
            </Link>
        )}
    </div>
);

ButtonAction.propTypes = {
    showComment: PropTypes.bool.isRequired,
};

export default ButtonAction;
