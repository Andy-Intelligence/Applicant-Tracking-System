"use client";
import Image from "next/image";
import Google from "../images/continue-with-google-centre-google-logo.svg";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import {useEffect} from 'react';
import { useRouter } from "next/navigation";
const SignIn = () => {
    const { user, googleSignIn, logOut } = UserAuth();
    const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      
    } catch (error) {
      console.log(error);
    }
  };
  {!user ? (
    router.push('/SignUp')
  ) : (
    console.log(user),
    router.push('/Login')
  )}
  
  return (
    <>
      <button onClick={handleSignIn} className="google">
        <Image
          src={Google}
          alt="Sign in with Google"
          width={20}
        />
        <p>Sign Up with Google</p>
      </button>
      
    </>
  );
};

export default SignIn;
