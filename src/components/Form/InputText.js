import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({
    id, name, label, value, placeholder, onChange,
}) => (
    <div className="form__group">
        <label htmlFor={id} className="form__group-label">{label}</label>
        <input
            type="text"
            id={id}
            name={name}
            className="form__group-input"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
);

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

InputText.defaultProps = {
    name: '',
    placeholder: '',
};

export default InputText;
