
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import navLogo from '../../../public/navLogo.svg'

import Link from "next/link";
import Image from "next/image";


const page = () => {

  return (
    <header className="bg-[#262626]">
      <div className="flex justify-between gap-6 items-center px-4 py-2 mx-auto max-w-screen-2xl">
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
          className="max-w-[30px] "
        />
      </Link>
      <Link href={`?shopCard=true`}>
        <ShoppingCartOutlinedIcon fontSize="large" className="text-white" />
      </Link>
      </div>
    </header>
  );
};

export default page;
