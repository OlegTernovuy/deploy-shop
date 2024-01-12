"use client";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import navLogo from "../../../../public/navLogo.svg";

import SearchField from "./SearchField";
import Link from "next/link";
import Image from "next/image";

import style from "./style.module.css";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header>
      <div className={style.header}>
        <div className={style.headerWrapper}>
          <button>
            <MenuIcon
              sx={{
                width: 48,
                height: 48,
                color: "#ffffff",
              }}
            />
          </button>
          <Link href="/">
            <Image
              src={navLogo}
              alt="logo"
              width={30}
              height={32}
              priority={true}
              style={{ maxWidth: "30px" }}
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
