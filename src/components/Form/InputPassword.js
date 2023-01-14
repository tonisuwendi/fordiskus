import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const InputPassword = ({
    id, name, label, value, placeholder, onChange,
}) => {
    const [isPassword, setIsPassword] = useState(true);

    const handleToggleType = () => setIsPassword((prevState) => !prevState);

    return (
        <div className="form__group">
            <label htmlFor={id} className="form__group-label">{label}</label>
            <div className="form__group-body">
                <input
                    type={isPassword ? 'password' : 'text'}
                    name={name}
                    id={id}
                    className="form__group-input"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <button
                    className="form__group-password__icon"
                    type="button"
                    tabIndex={-1}
                    onClick={handleToggleType}
                >
                    {isPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
            </div>
        </div>
    );
};

InputPassword.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

InputPassword.defaultProps = {
    name: '',
    placeholder: '',
};

export default InputPassword;
