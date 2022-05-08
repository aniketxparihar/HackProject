import React from 'react'
import { useEffect } from 'react';
import { useAuth } from '../../Context/Auth-Context'
const Login = () => {
  const { setAuthToken }=useAuth()
  const handleLogin = () => {
    localStorage.setItem("authToken", "ass")
    setAuthToken("ass");
 }

  return (
    <div className="login__container h-full w-full flex justify-center items-center">
      <div
        className="h-14 w-32 bg-cyan-500 flex justify-center items-center rounded-3xl font-bold cursor-pointer"
        onClick={() => {
          handleLogin();
        }}
      >Login</div>
    </div>
  );
}

export default Login