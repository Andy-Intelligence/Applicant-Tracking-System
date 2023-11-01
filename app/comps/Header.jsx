"use client";
import List from "./List";
import Image from "next/image";
import Search from "./Search";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
const Header = () => {
  const { user } = UserAuth();

  return (
    <header className="bg-white p-2">
      <div className="flex align-center">
        <h1 className="font-normal text-5xl">Logo</h1>
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
          <button className=" button">Sign up</button>
        </Link>
      ) : (
        
        <Image src={user.photoURL} alt="Profile Photo" width={50} height={10} />
      )}
      {/**/}
    </header>
  );
};

export default Header;
