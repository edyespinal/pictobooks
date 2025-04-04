import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import { NavItem } from "./nav-item";

function Header() {
    return (
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 xl:px-0 border-b">
            <Image src="/assets/images/logo.png" alt="Pictobooks" width={185} height={38} />
            <div className="flex gap-24 items-center">
                <div className="flex gap-18 items-center">
                    <NavItem href="/" label="Nosotros" />
                    <NavItem href="/" label="Libros" />
                    <NavItem href="/" label="Merchandising" />
                    <NavItem href="/" label="Blog" />
                </div>
                <div className="flex gap-6 items-center">
                    <Image src="/assets/images/flag_es.svg" alt="España" width={20} height={20} />
                    <SearchIcon className="size-5" />
                    <ShoppingCartIcon className="size-5" />
                </div>
            </div>
        </nav>
    )
}

export { Header };