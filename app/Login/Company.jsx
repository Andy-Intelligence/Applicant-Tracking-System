'use client'

import { useState } from "react";

const Company = () => {

    function areAllInputsEmpty(inputs) {
        return inputs.every((input) => {
            return input.value === ''
        });
    }

    return (
        <form className="width-1/2">
            <input  type="text" placeholder="Full Name" id="fName"/>
            <input type="text" placeholder="Company Name" id="CName"/>
            <input type="email"  id="Cmail" placeholder="Company Email" />
            <input type="password"  id="password" placeholder="Password" />
            <input type="submit" value="Continue" id="submit" onClick={() => {
                const inputs = document.querySelectorAll('input');
                const areAllInputsEmpty = areAllInputsEmpty(inputs);

                
            }} className="text-white bold" />
        </form>
    );
}

export default Company;
