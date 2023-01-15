import React from 'react';

import loadingImage from '../../images/loading.gif';

const LoadingSpinner = () => (
    <div className="loading-center-content">
        <img src={loadingImage} alt="loading..." />
        <h4>Sedang memuat data...</h4>
    </div>
);

export default LoadingSpinner;
