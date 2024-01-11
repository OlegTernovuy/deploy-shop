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
    <div className="bg-gray-900">
      <header>
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex flex-row items-center ">
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
                style={{maxWidth: '30px'}}
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
    </div>
  );
};

export default Navbar;
