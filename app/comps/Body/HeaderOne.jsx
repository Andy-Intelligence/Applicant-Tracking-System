import Image from "next/image";
import firstImage from "@/app/images/firstImage.svg";
const HeaderOne = () => {
  return (
    <div className=" p-5 mt-20 ">
      <div className="headerOne ml-4">
        <div className="mainDetails">
          <h2 className=" font-bold mb-4">Header 2</h2>
          <p>
            <span className=" spanDetails">
              Sir, should i move to the next phase? She really did well during
              the first interview section we heard.Sir, should i move to the
              next phase? She really did well during the first interview section
              we heard.Sir, should i move to the next phase? She really did well
              during the first interview section we heard.Sir, should i move to
              the next phase? She really did well during the first interview
              section we heard
            </span>
            .Sir, should i move to the next phase? She really did well during
            the first interview section we heard.Sir, should i move to the next
            phase? She really did well during the first interview section we
            heard.
          </p>
        </div>

        <div className="imgOne">
          <Image src={firstImage} alt="illustration" width={500} />
        </div>
      </div>
    </div>
  );
};

export default HeaderOne;
