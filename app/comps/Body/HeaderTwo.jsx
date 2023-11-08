import Image from "next/image";
import firstImage from "@/app/images/firstImage.svg";
const HeaderTwo = () => {
  return (
    <div className="secondDetails">
      <div className="imgOne">
        <Image src={firstImage} alt="Second Image" />
      </div>

      <div>
        <h2 className=" font-bold mb-4">Header 2</h2>
        <p>
          <span className=" spanDetails">
            Sir, should i move to the next phase? She really did well during the
            first interview section we heard.Sir, should i move to the next
            phase? She really did well during the first interview section we
            heard.Sir, should i move to the next phase? She really did well
            during the first interview section we heard.Sir, should i move to
            the next phase? She really did well during the first interview
            section we heard
          </span>
          .Sir, should i move to the next phase? She really did well during the
          first interview section we heard.Sir, should i move to the next phase?
          She really did well during the first interview section we heard.
        </p>
      </div>
    </div>
  );
};

export default HeaderTwo;
