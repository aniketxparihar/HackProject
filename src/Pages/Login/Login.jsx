import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth,googleProvider } from "../../firebase/config";



const Login = () => {
  const location=useNavigate();
  const navigate=useLocation();
  const signInWithGoogle=()=>signInWithPopup(auth,googleProvider).then((result)=>{
    const credential=GoogleAuthProvider.credentialFromResult(result);
    const token=credential.accessToken;
    const user=result.user;
    navigate(location.state?.from?.pathname || '/',{replace:true});
    console.log(user)
  }).catch((error)=>{
    console.log(error.message)
  })
  return (
    <div className="login__container h-full w-full flex justify-center items-center">
      <div
        className="h-14 w-32 bg-cyan-500 flex justify-center items-center rounded-3xl font-bold cursor-pointer"
        onClick={signInWithGoogle}
      >
        Login
      </div>
    </div>
  );
};

export default Login;
