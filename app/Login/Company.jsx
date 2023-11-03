'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Company = () => {
    const router = useRouter();
    const [fNameValue, setFNameValue] = useState('');
    const [cNameValue, setCNameValue] = useState('');
    const [cMailValue, setCMailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [routing, setRouting] = useState('/Login');
    const userData = () => {
        if(!fNameValue === '' && !cNameValue === '' && !cMailValue === '' && !passwordValue === '') {
            localStorage.setItem('name', setFNameValue)
            localStorage.setItem('CompanyName', setCNameValue)
            localStorage.setItem('CompanyMail', setCMailValue)
            localStorage.setItem('password', setPasswordValue)
            setRouting('/')
        }
        else {
            alert('input the necessary details');
            router.push('/Login')
            
        }
    }

    return (
        <form className="width-1/2" id="contact-form">
            <input  type="text" placeholder="Full Name" required id="fName"/>
            <input type="text" placeholder="Company Name" required id="CName"/>
            <input type="email" id="Cmail" required placeholder="Company Email" />
            <input type="password" id="password" required placeholder="Password" />
            <Link href={routing}><input type="submit" onClick={userData} value="Continue" id="submit" className="text-white bold" /></Link>
        </form>
    );
}

export default Company;
