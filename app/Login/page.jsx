import Image from "next/image";
import illustration from "../images/Rectangle 7.svg";
const page = () => {
  return (
    <>
      <div>
        <Image src={illustration} alt="logo" quality={100} className="img" />
      </div>
    </>
  );
};

export default page;
