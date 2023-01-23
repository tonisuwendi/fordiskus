import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Button';
import { CreateInfoContainer, CreateInfoTitle } from '../styled';

const CreateInfo = () => (
    <CreateInfoContainer>
        <CreateInfoTitle data-test-id="create-info-title">Mau diskusi apaan?</CreateInfoTitle>
        <Link to="/new">
            <Button label="Buat Diskusi" />
        </Link>
    </CreateInfoContainer>
);

export default CreateInfo;
