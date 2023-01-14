import { useState } from 'react';

const useInput = () => {
    const [value, setValue] = useState('');

    const handleChangeValue = (event) => {
        setValue(event.target.value);
    };

    return [value, handleChangeValue];
};

export default useInput;
