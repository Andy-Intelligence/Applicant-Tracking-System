import Link from "next/link";
import List from "../comps/List";
import Search from "../comps/Search";
import Image from "next/image";
import profile from '../images/profile.png'
import { UserAuth } from "../context/AuthContext";
import Sidebar from './Sidebar'
// photoURL
const JobsHeader = () => {
  return (
    <div className="bg-white p-2">
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
    <Image 
        src={profile}
        alt="profile"
        quality={100}
        className="absolute shift"
     />
    </div>
  );
};

export default JobsHeader;
