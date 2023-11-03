"use client";
import List from "./List";
import Image from "next/image";
import Search from "./Search";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import profile from "../images/profile.png";
const Header = () => {
  const { user } = UserAuth();

  return (
    <header className="bg-white p-2">
      <div className="flex align-center">
        <Link href='/'><h1 className="font-normal text-5xl">Logo</h1></Link>
        <nav>
          <ul className="items-center mt-5 ml-10">
            <List list="Overview" />
            <List list="Mailbox" />
            <Link href="/Jobs">
              <List list="Jobs" />
            </Link>
          </ul>
        </nav>
        <Search />
      </div>
      {!user ? (
        <Link href="/SignUp">
          <Image src={profile} alt="profile" quality={100} className="shifter" />
        </Link>
      ) : (
        <div className="user-details">
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
      )}
      {/**/}
    </header>
  );
};

export default Header;
