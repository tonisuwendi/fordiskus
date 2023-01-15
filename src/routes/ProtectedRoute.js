import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { authUser } = useSelector((states) => states);

    const redirect = `/login?redirect=${location.pathname}`;

    useEffect(() => {
        if (!authUser) toast.warning('Kamu harus login terlebih dahulu');
    }, []);

    return authUser ? children : <Navigate to={redirect} />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
