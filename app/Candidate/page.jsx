'use client'
import ProfilePart from './profilePart';
import ProfileDetails from './profileDetails';
import CandidateHeader from './CandidateHeader'
const Page = () => {
    return (
        <div className="mainProfile">
            {/* <CandidateHeader />/ */}
            <ProfilePart />
            <ProfileDetails />
        </div>
    );
}

export default Page;
