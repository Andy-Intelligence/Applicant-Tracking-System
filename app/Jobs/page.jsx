import Nav from "../comps/Nav";
import ListOfJobs from './ListOfJobs'
const Page = () => {
    return (
        <div>
        <Nav />
        <ListOfJobs 
            jobberTitle="Graphics Designer"
            jobber='We need a graphics designer who knows how to use corel draw, Figma and web design'
        />
        </div>
    );
}

export default Page;
