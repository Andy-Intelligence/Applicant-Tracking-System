'use client'
import Link from "next/link";
import List from "../comps/List";
import Search from "../comps/Search";
import Image from "next/image";
import profile from "../images/profile.png";
import { UserAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";
// photoURL
const JobsHeader = () => {
  const { user } = UserAuth();
  return (
    <>
      <div className="bg-white p-2">
      <div className="flex align-center">
        <Link href='/'><h1 className="font-normal text-5xl cursor-pointer">Logo</h1></Link>
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
          <Image src={profile} alt="profile" quality={100} className=" shift" />
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
    </div>
    <div>
        <Sidebar />
      </div>
    </>
  );
};

export default JobsHeader;
