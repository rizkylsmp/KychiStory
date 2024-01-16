import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import WM from "@/img/WM.png";

const Navbar = () => {
  return (
    <header className="bg-color-dark2">
      <div className="flex md:flex-row flex-col justify-between items-center px-6 py-2 gap-2">
        <Link href="/" className="font-bold text-color-secondary text-2xl">
          <Image
            src={WM}
            alt="logo"
            className="absloute inset-0 w-full h-14 px-2 bg-color-dark"
          />
        </Link>
        <SearchBar />
      </div>
    </header>
  );
};

export default Navbar;
