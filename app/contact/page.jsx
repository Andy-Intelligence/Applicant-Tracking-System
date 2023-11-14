import Footer from '../comps/Footer/Footer';
import Nav from '../comps/Nav';
import ContactHeader from './ContactHeader'
import Faqs from './Faqs';
const Page = () => {
    return (
        <div>
            <Nav />
            <ContactHeader />
            <div>
            <h2>FAQs</h2>
            <Faqs 
                params='How do i create an account on (company Name)?'
            />
            <Faqs 
                params='How can i update my profile information?'
            />

            <Faqs 
                params='What should i do if i forgot my password?'
            />
            <Faqs 
                params='How to onboard a recruiter'
            />
            <Faqs 
                params='How do i  create and post jobs?'
            />

            </div>
            <Footer />
        </div>
    );
}

export default Page;
