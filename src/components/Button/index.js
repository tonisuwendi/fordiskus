/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */

import React from 'react';
import PropTypes from 'prop-types';
import { ImSpinner2 } from 'react-icons/im';

const Button = ({
    label,
    variant,
    size,
    type,
    disabled,
    full,
    isLoading,
    style,
    leftIcon,
    onClick,
}) => (
    <button
        className={`button button-${variant} button-size-${size} ${full ? 'full-width' : ''} ${disabled || isLoading ? `button-${variant}-disabled` : ''}`}
        type={type}
        style={style}
        disabled={disabled || isLoading}
        onClick={onClick}
    >
        {isLoading ? <ImSpinner2 className="icon-loading" /> : (
            <>
                {leftIcon}
                {label}
            </>
        )}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outline']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['button', 'submit']),
    disabled: PropTypes.bool,
    full: PropTypes.bool,
    isLoading: PropTypes.bool,
    style: PropTypes.object,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    type: 'button',
    disabled: false,
    full: false,
    isLoading: false,
    style: {},
    leftIcon: null,
    onClick: () => {},
};

export default Button;
