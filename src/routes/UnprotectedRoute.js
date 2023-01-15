import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UnprotectedRoute = ({ children }) => {
    const [searchParams] = useSearchParams();
    const { authUser } = useSelector((states) => states);

    const redirectURL = searchParams.get('redirect');

    return authUser ? <Navigate to={redirectURL || '/'} /> : children;
};

UnprotectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UnprotectedRoute;
