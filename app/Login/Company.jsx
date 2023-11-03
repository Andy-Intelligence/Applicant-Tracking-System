"use client";
import React, { useState } from "react";

import Link from "next/link";
/**
 * Renders a form for the user to enter their information.
 * @returns {JSX.Element} The rendered form component.
 */
const Company = () => {
  const [inputs, setInputs] = useState({
    fName: "",
    CName: "",
    CMail: "",
    password: "",
  });

  const [routing, setRouting] = useState("/Login");

  /**
   * Handles form submission.
   */
  const handleSubmit = () => {
    if (
      inputs.fName === "" ||
      inputs.CName === "" ||
      inputs.CMail === "" ||
      inputs.password === ""
    ) {
      alert("Please fill in all fields");
    } else {
      setRouting("/");
    }
  };

  /**
   * Handles input changes.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleChange = (event) => {
    const { id, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [id]: value }));
    localStorage.setItem("formInputs", JSON.stringify(inputs));
  };

  return (
    <form className="width-1/2" id="contact-form">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Full Name"
        required
        id="fName"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Company Name"
        required
        id="CName"
      />
      <input
        type="email"
        onChange={handleChange}
        id="CMail"
        required
        placeholder="Company Email"
      />
      <input
        type="password"
        onChange={handleChange}
        id="password"
        required
        placeholder="Password"
      />
      <Link href={routing} onClick={handleSubmit}>
        <input
          type="submit"
          value="Continue"
          id="submit"
          className="text-white bold"
        />
      </Link>
    </form>
  );
};

export default Company;
