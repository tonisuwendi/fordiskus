import React from 'react';
import PropTypes from 'prop-types';
import { FaRegComment } from 'react-icons/fa';
import {
    AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike,
} from 'react-icons/ai';

const Button = ({
    isActive, amount, type, onClick,
}) => {
    let icon;
    switch (type) {
    case 'like':
        icon = isActive ? <AiFillLike /> : <AiOutlineLike />;
        break;
    case 'dislike':
        icon = isActive ? <AiFillDislike /> : <AiOutlineDislike />;
        break;
    case 'comment':
        icon = <FaRegComment />;
        break;
    default:
        icon = null;
    }
    return (
        <button
            type="button"
            className={`thread__action-button ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {icon}
            <span className="thread__action-button__amount">{amount}</span>
        </button>
    );
};

Button.propTypes = {
    isActive: PropTypes.bool,
    amount: PropTypes.number,
    type: PropTypes.oneOf(['like', 'dislike', 'comment']).isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    isActive: false,
    amount: 0,
    onClick: () => {},
};

export default Button;
