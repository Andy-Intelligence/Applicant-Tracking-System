import List from "./List";
import Search from "./Search";
const Header = () => {
  return (
    <header className="bg-white mt-[-10]">
      <div className="flex">
        <h1 className="font-normal text-5xl">Logo</h1>
        <nav>
          <ul className="items-center mt-5 ml-10">
            <List list="Overview" />
            <List list="Mailbox" />
            <List list="Jobs" />
          </ul>
        </nav>
        <Search />
      </div>
      
    </header>
  );
};

export default Header;
