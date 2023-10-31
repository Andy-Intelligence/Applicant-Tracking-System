'use client'


const Company = () => {

    return (
        <form className="width-1/2">
            <input  type="text" placeholder="Full Name" required id="fName"/>
            <input type="text" placeholder="Company Name" required id="CName"/>
            <input type="email"  id="Cmail" required placeholder="Company Email" />
            <input type="password"  id="password" required placeholder="Password" />
            <input type="submit" value="Continue" id="submit" className="text-white bold" />
        </form>
    );
}

export default Company;
