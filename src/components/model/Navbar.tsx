import Link from "./Link";

const links = [
  { href: "/model/portfolio", label: "Portfolio" },
  { href: "/model/runway", label: "Runway" },
  { href: "/model/company-card", label: "Compcard" },
  { href: "/model/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-2 items-center">
      <ul className="flex flex-row items-center gap-4">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
