import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <ul className="px-8">
                <li className="inline px-8">
                    <Link href='/'>Home</Link>
                </li>
                <li className="inline px-8">
                    <Link href='/Navbar'>About</Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar;
