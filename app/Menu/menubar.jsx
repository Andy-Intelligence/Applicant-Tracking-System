import Link from "next/link";
const Menubar = () => {
  return (
    <div>
      <ul>
        <li>Overview</li>
        <li>Mailbox</li>
        <li>
          <Link href="../Jobs">Jobs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
