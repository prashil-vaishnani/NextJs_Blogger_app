import Link from "next/link";

type MyComponentProps = React.PropsWithChildren<{}>;

const Layout = ({ children }: MyComponentProps) => {
  return (
    <>
      <nav className="bg-primary px-5 py-1 text-end text-uppercase">
        <Link href="/">
          <a className="text-white fw-bold ">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-white fw-bold px-3">about</a>
        </Link>
        <Link href="/blog">
          <a className="text-white fw-bold">blog</a>
        </Link>
      </nav>
      <div>{children}</div>
    </>
  );
};
export default Layout;
