import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/waul">About Me</Link>
    <Link href="/contact">Contact</Link>
  </nav>
);

export default Navbar;
