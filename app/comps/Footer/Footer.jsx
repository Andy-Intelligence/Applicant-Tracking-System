import Image from 'next/image'
import Logo from './logo';
import Subscribe from './Subscribe'
import FooterNav from './FooterNav'
const Footer = () => {
    return (
        <footer>
            <Subscribe />
            <Logo />
            <FooterNav />
        </footer>
    );
}

export default Footer;
