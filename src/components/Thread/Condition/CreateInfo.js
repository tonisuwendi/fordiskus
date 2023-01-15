import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Button';

const CreateInfo = () => (
    <div className="want-create-thread section-content">
        <h2 className="want-create-thread__title">Mau diskusi apaan?</h2>
        <Link to="/new">
            <Button label="Buat Diskusi" />
        </Link>
    </div>
);

export default CreateInfo;
