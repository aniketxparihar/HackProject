import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../Context/Auth-Context';

const PrivateRoute = () => {
  const {  authToken } = useAuth();
  const location = useLocation();
    return (
      authToken!==""? <Outlet /> : <Navigate to="/login" replace={true} state={ {from:location.pathname}}/>
  )
}

export  {PrivateRoute}