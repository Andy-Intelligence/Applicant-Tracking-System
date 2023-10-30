const Company = () => {
    return (
        <form className="width-1/2">
            <input  type="text" placeholder="Full Name" id="fName"/>
            <input type="text" placeholder="Company Name" id="CName"/>
            <input type="email"  id="Cmail" placeholder="Company Email" />
            <input type="password"  id="password" placeholder="Password" />
            <input type="submit" value="Continue" className="text-white bold" />
        </form>
    );
}

export default Company;
