import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
    id, name, label, value, placeholder, onChange,
}) => (
    <div className="form__group">
        <label htmlFor={id} className="form__group-label">{label}</label>
        <textarea
            id={id}
            name={name}
            className="form__group-input textarea"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </div>
);

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

Textarea.defaultProps = {
    label: '',
    name: '',
    placeholder: '',
};

export default Textarea;
