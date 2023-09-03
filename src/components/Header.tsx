import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/" className="text-3xl font-bold">
        {"BBBlog"}
      </Link>
      <nav className="flex gap-3">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/posts">POSTS</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
};

export default Header;
