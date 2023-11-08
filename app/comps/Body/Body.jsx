import React from "react";
import ellipse from "@/app/images/Ellipse 3.svg";
import Image from "next/image";
import main from "@/app/images/main.svg";
import HeaderOne from "./HeaderOne";
import Link from "next/link";
import HeaderTwo from "./HeaderTwo";
const Body = () => {
  return (
    <main>
      <div className="body ">
        <div>
          <h2 className="p-7 text-3xl font-bold mt-7 ml-5">
            Unlock the Power of Modern HR with
            <span className="block">
              <p>( Name )</p>
            </span>
            <p className=" text-sm mt-5 font-normal"> 
              <span className="block">
                Seamless, efficient, and comprehensive HR solutions tailored{" "}
              </span>
              to your needs
            </p>
          </h2>

          <Link href="/SignUp ">
            <button className="getStarted">Get Started</button>
          </Link>
          <div className="flex align-center describe">
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
      <div className="mid-level mt-10 mb-6 p-8">
        <h2 className=" ml-4 text-2xl">Trusted By</h2>
      </div>
      <div className=" border-b-2 p-6">
        <HeaderOne />
        <HeaderTwo />
      </div>
      <hr />
      <p>Taiwo</p>
    </main>
  );
};

export default Body;
