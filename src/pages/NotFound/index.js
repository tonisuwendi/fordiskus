import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import notFoundImage from '../../images/404.svg';
import { NotFoundImage, NotFoundStyled, NotFoundText } from './styled';

const NotFound = () => (
    <NotFoundStyled>
        <NotFoundImage
            src={notFoundImage}
            alt="not found"
        />
        <NotFoundText>
            Upps, sepertinya kamu tersesat
        </NotFoundText>
        <Link to="/">
            <Button label="Kembali ke Rumah" />
        </Link>
    </NotFoundStyled>
);

export default NotFound;
