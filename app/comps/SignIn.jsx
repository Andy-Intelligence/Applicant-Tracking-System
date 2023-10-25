'use client';
import Image from "next/image";
import Google from '../images/continue-with-google-centre-google-logo.svg'
import Facebook from '../images/continue-with-facebook-centre-facebook-logo.svg';

const SignIn = () => {
    
    const handleClick = () => {
        alert('Taiwo')
    }
    return (
        <>
            <button onClick={handleClick} className="google">
                <Image 
                    src={Google}
                    alt="Sign in with Google"
                    quality={100}
                    width={20}
                />
                <p>Sign Up with Google</p>
            </button>
            <button className="facebook">
                <Image 
                    src={Facebook}
                    alt="Sign in with Google"
                    quality={100}
                    width={20}
                />
                <p>Sign Up with Google</p>
            </button>
        </>
    );
}

export default SignIn;
