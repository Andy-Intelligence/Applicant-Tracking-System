import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-normal text-5xl">
        L<span>o</span>g<span>o</span>
      </h1>
    </Link>
  );
};

export default Logo;
