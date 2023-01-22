import React from 'react';
import styled from 'styled-components';

import loadingImage from '../../images/loading.gif';

const LoadingCenterContent = styled.div({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    height: '100vh',
    justifyContent: 'center',
    '>img': {
        width: 100,
    },
});

const LoadingSpinner = () => (
    <LoadingCenterContent>
        <img src={loadingImage} alt="loading..." />
        <h4>Sedang memuat data...</h4>
    </LoadingCenterContent>
);

export default LoadingSpinner;
