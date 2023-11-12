import Link from "next/link";
const ListOfJobs = ({jobber, jobberTitle}) => {
    return (
        <div className=" border-b-2 jobDiv">
            <h2 className=" text-2xl">{jobberTitle}</h2>
            <p className=" font-normal">{jobber}</p>
            <ul>
                <li>Remote</li>
                <li>Design Team</li>
                <li>2 years </li>
                <li>Nigeria</li>
            </ul>
            <p>Deadline</p>
            <p>Qualifications</p>
            <div className="degree">
                Bachelors degree
            </div>
            <button>Apply</button>
        </div>
    );
}

export default ListOfJobs;
