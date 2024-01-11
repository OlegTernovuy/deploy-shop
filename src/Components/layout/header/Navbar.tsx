"use client";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import navLogo from "../../../../public/navLogo.svg";

import SearchField from "./SearchField";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="bg-gray-900">
      <div className="max-w-screen-xl px-4 mx-auto w-full">
        <div className="flex flex-row items-center w-full h-16">
          <button className="mr-6">
            <MenuIcon
              sx={{
                width: 48,
                height: 48,
                color: "#ffffff",
              }}
            />
          </button>
          <Link href="/" className="mr-6">
            <Image
              src={navLogo}
              alt="logo"
              width={30}
              height={32}
              priority={true}
              className="max-w-[30px] "
            />
          </Link>
          <SearchField />
          <Link href={`${pathname}?shopCard=true`}>
            <ShoppingCartOutlinedIcon
              fontSize="large"
              sx={{ color: "#ffffff" }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
