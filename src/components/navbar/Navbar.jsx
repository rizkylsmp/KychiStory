import SearchBar from "./SearchBar";
import WM from "../../assets/logo/WM.png";
import { UserCircle, List, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0c131be7] bg">
      <div className="flex md:flex-row flex-col justify-between items-center px-6 py-2 gap-3">
        <div className="flex items-center text-white gap-8">
          {/* LOGO */}
          <Link to="/" className="flex-shrink-0">
            <img src={WM} alt="logo" className="h-14 px-2 bg-color-dark" />
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 cursor-pointer md:hidden"
          >
            {open ? (
              <List size={36} color="#f1f8fe" weight="bold" />
            ) : (
              <X size={36} color="#f1f8fe" weight="bold" />
            )}
          </div>

          {/* MENU */}
          <div className="hidden md:flex bg-[#37404a] p-1 rounded-[10px] gap-2">
            <Link to="/anime" className="hover:bg-[#5c718a] p-2 rounded-[8px]">
              Anime
            </Link>
            <Link to="/novel" className="hover:bg-[#5c718a] p-2 rounded-[8px]">
              Light Novel
            </Link>
          </div>
        </div>

        {/* SEARCH BAR & LOGIN */}
        <div className="hidden md:flex gap-5 mb-2">
          <SearchBar />
          <UserCircle
            size={39}
            color="#f1f8fe"
            weight="fill"
            className="self-center"
          />
        </div>

        {/* RESPONSIVE */}
      </div>
    </header>
  );
};

export default Navbar;
