'use-client'
import Image from "next/image";
import search from '../images/search.svg'
import profile from '../images/profile.png'
const Search = () => {
  return (
    <>
      <input
        type="search"
        id="search"
        placeholder="I am looking for..."
        className=" relative mt-3 ml-10"
      />
      <Image src={search} width={30} className="main-image" alt="search" quality={100} />
      
    </>
  );
};

export default Search;
