import Image from "next/image";
import illustration from "./images/Rectangle 7.svg";
export default function Home() {
  return (
    <div>
      <div>
      <Image src={illustration} alt="logo" quality={100} className="img" />
      <div className="absolute bottom-6 left-0  floater ">
        <p className="text-white  font-semibold text-2xl text-center">
          Streamline Your Recruitment Effort with{" "}
          <span className="block">our Advanced Application Tracking System </span>
        </p>
      </div>
      </div>
    </div>
  );
}
