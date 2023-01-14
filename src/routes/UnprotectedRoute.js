import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const UnprotectedRoute = ({ children }) => {
    const { authUser } = { authUser: null };

    return authUser ? <Navigate to="/" /> : children;
};

UnprotectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UnprotectedRoute;
