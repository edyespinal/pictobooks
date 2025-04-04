import Link from "next/link";

function NavItem(props: { href: string, label: string }) {
  return (
    <Link href={props.href} className="text-sm font-medium">
      {props.label}
    </Link>
  )
}

export { NavItem };