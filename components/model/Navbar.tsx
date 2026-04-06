import Link from "next/link";
import InstagramIcon from "./Instagram";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-2 items-center">
      <ul className="flex flex-row items-center gap-4">
        <li>
          <Link href="/model">Portfolio</Link>
        </li>
        <li>
          <Link href="/model/runway">Runway</Link>
        </li>
        <li>
          <Link href="/model/company-card">Compcard</Link>
        </li>
        <li>
          <Link href="/model/contact">Contact</Link>
        </li>
      </ul>
      <Link
        href="https://www.instagram.com/wwwillgunnn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </Link>
    </nav>
  );
}
