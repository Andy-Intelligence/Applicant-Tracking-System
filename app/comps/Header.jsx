import List from "./List";
import Image from "next/image";
import Search from "./Search";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-white p-2">
      <div className="flex align-center">
        <h1 className="font-normal text-5xl">Logo</h1>
        <nav>
          <ul className="items-center mt-5 ml-10">
            <List list="Overview" />
            <List list="Mailbox" />
            <Link href='/Jobs'><List list="Jobs" /></Link>
          </ul>
        </nav>
        <Search />
      </div>
      <Link href='/SignUp'><button className=" button">Sign up</button></Link>
    </header>
  );
};

export default Header;
