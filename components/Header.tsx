import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      
      <div className="container header-wrapper flex items-center">
        
        {/* Logo */}
        <Link href="/">
          <Logo className="h-8 w-auto text-slate-900" />
          <p className="font-bold">KlickTrading</p>
        </Link>

        {/* Nav Items */}
        <nav className="hidden sm:block ml-10">
          <NavItems />
        </nav>

        {/* Push to right */}
        <div className="ml-auto">
          <UserDropdown />
        </div>

      </div>
    </header>
  );
};

export default Header;
