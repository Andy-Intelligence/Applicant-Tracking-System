"use client";
import List from "./List";
import { useState, useEffect } from "react";
import Image from "next/image";
import Search from "./Search";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import mainLogo from "../images/Logo.png";
import profile from "../images/profile.png";
const Header = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      setLoading(false);
    };

    checkAuthentication();
  }, [user]);

  return (
    <header className="header ">
      <div className="flex align-center">
        <Link href="/">
          <h1 className="font-normal text-5xl">
            <Image src={mainLogo} alt="Main-logo" className="semiLogo" />
          </h1>
        </Link>
        <nav>
          <ul className="items-center mt-5 ml-10 display-inline">
            <span className="home">
              <Link href="/">
                <List list="Home" />
              </Link>
            </span>
            <div className="absolute lister">
              <Link href="/About">
                <List list="About US" />
              </Link>
              <Link href="/Jobs">
                <List list="Jobs" />
              </Link>
              <List list="Contact Us" />
            </div>
          </ul>
        </nav>
        <Search />
      </div>
      {loading ? null : !user ? (
        <Link href="/SignUp">
          <button className="login">Login</button>
          <button className="register">Sign Up</button>
        </Link>
      ) : (
        <Link href='/Candidate'>
          <div className="user-details cursor-pointer">
            <Image
              src={user.photoURL}
              alt="Profile Photo"
              width={25}
              height={20}
              quality={100}
              className="profiler"
            />
            <div className="titles">
              <p className="userName">{user.displayName}</p>
              <p className="userEmail">{user.email}</p>
            </div>
          </div>
        </Link>
      )}
      {/**/}
    </header>
  );
};

export default Header;
