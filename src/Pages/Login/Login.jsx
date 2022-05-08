import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../Context/Theme-Context";
import { auth,googleProvider } from "../../firebase/config";

import "./Login.css"

const Login = () => {
  const location=useNavigate();
  const navigate = useLocation();
  const { themeObject } = useTheme();
  const colors = [
    "#22d3ee",
    "#38bdf8",
    "#60a5fa",
    "#818cf8",
    "#a78bfa",
    "#9333ea",
    "#e879f9",
    "#14b8a6"
  ];
  const [bgColorIndex, setBgColorIndex] = useState(0);
  setTimeout(()=>{bgColorIndex<7?setBgColorIndex(bgColorIndex+1):setBgColorIndex(0)},1000)
  const signInWithGoogle=()=>signInWithPopup(auth,googleProvider).then((result)=>{
    const credential=GoogleAuthProvider.credentialFromResult(result);
    const token=credential.accessToken;
    const user=result.user;
    navigate(location.state?.from?.pathname || '/',{replace:true});
  }).catch((error)=>{
    console.log(error.message)
  })
  return (
    <div className="login__container h-full w-full flex justify-center items-center rounded-3xl"
    style={{backgroundColor:`${colors[bgColorIndex]}`,transition:"4s"}}>
      <div
        className="h-14 w-auto pl-2 pr-2  flex justify-center items-center rounded-3xl font-bold cursor-pointer"
        onClick={signInWithGoogle}
        style={{backgroundColor:themeObject.primary,color:themeObject.text}}
      >
        Login with Google
      </div>
    </div>
  );
};

export default Login;
