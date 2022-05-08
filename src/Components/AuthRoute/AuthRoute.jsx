import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../Context/Auth-Context'
import { Navigate } from 'react-router-dom';
const AuthRoute = () => {
  const { user, authToken }= useAuth();
  return (
    <Outlet/>
  )
}

export default AuthRoute