import React from "react";
import ellipse from "@/app/images/Ellipse 3.svg";
import Image from "next/image";
import main from "@/app/images/main.svg";
import HeaderOne from "./HeaderOne";
import Link from "next/link";
import HeaderTwo from "./HeaderTwo";
import LinkedIn from "@/app/images/LinkedIn.svg";
import JobberMan from "@/app/images/jobberman.svg";
import Jora from "@/app/images/Jora.svg";
import dribble from "@/app/images/dribble.svg";
const Body = () => {
  return (
    <main>
      <div className="body ">
        <div>
          <h2 className="p-7 text-3xl mt-7 ml-5 font-semibold">
            Unlock the Power of Modern HR with
            <span className="block">(Name)</span>
            <span className="block mt-4 font-normal">
              <p className="headerText">
                {" "}
                Seamless, efficient, and comprehensive HR solutions tailored{" "}
              </p>
              <p className="headerTextTwo font-normal "> to your needs</p>
            </span>
          </h2>

          <Link href="/SignUp">
            <button className="getStarted">Get Started</button>
          </Link>
          <div className="flex mt-14 align-center describe">
            <small>Effortless Task Management</small>
            <Image src={ellipse} />
            <small>Real-time Collaboration</small>
            <Image src={ellipse} />
            <small>Intuitive User Interface</small>
            <Image src={ellipse} />
            <small>Seamless Integration</small>
          </div>
        </div>
        <Image src={main} />
      </div>
      <div className="mid-level  mb-15 p-8">
        <h2 className=" ml-4 text-2xl">Trusted By:</h2>
        <div className="trusted">
          <Image src={JobberMan} className="ml-9" alt="jobberman" />
          <Image src={LinkedIn} alt="LinkedIn" />
          <Image src={dribble} alt="dribble" />
          <Image src={Jora} alt="jora" />
        </div>
      </div>
      <div className=" p-6">
        <HeaderOne />
        <HeaderTwo />
      </div>
    </main>
  );
};

export default Body;
