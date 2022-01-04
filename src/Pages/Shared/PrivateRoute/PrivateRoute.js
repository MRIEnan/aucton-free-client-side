import React from 'react';
import {  Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Authentication/Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {allContext}=useAuth()
    const { user, isLoading } = allContext;
    const location = useLocation()

    if(isLoading)
        {
            return <Spinner animation="border" />
        }
    if(user.email)
        {
            return children;
        }
    return <Navigate to="/login" state={{from: location}} />
};

export default PrivateRoute;