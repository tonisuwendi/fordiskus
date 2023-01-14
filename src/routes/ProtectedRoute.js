import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { authUser } = { authUser: null };

    const redirect = `/login?redirect=${location.pathname}`;

    return authUser ? children : <Navigate to={redirect} />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
