import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  className,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
