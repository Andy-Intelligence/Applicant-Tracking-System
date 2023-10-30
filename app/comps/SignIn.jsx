"use client";
import Image from "next/image";
import Google from "../images/continue-with-google-centre-google-logo.svg";
import Facebook from "../images/continue-with-facebook-centre-facebook-logo.svg";
import { UserAuth, } from "../context/AuthContext";

const SignIn = () => {
    const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  
  };

  // const handleSignOut = async () => {
  //   try {
  //     await logOut()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  {!user ? (
    console.log("Sign in failed")
  ) : (
      console.log(user.displayName)
      
    // <button onClick={handleSignOut}>Sign out</button>
  )}
  
  return (
    <>
      <button onClick={handleSignIn} className="google">
        <Image
          src={Google}
          alt="Sign in with Google"
          quality={100}
          width={20}
        />
        <p>Sign Up with Google</p>
      </button>
      <button className="facebook">
        <Image
          src={Facebook}
          alt="Sign in with Google"
          quality={100}
          width={20}
        />
        <p>Sign Up with facebook</p>
      </button>
    </>
  );
};

export default SignIn;
