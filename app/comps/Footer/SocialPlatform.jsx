import Image from "next/image";
import facebook from "@/app/images/facebook.svg";
import twitter from "@/app/images/Twitter.svg";
import instagram from "@/app/images/Instagram.svg";
const SocialPlatform = () => {
  return (
    <div className="social">
      <p className="follow">Follow us on:</p>
      <div className="flex socials">
        <Image src={facebook} alt="facebook icon" />
        <Image src={twitter} alt="twitter icon" />
        <Image src={instagram} alt="Instagram icon" />
      </div>
    </div>
  );
};

export default SocialPlatform;
