import SearchBar from "./SearchBar";
import WM from "../assets/logo/WM.png";

const Navbar = () => {
  return (
    <header className="bg-[#293f52]">
      <div className="flex md:flex-row flex-col justify-between items-center px-6 py-2 gap-2">
        <a href="/">
          <img
            src={WM}
            alt="logo"
            className="absloute inset-0 w-full h-14 px-2 bg-color-dark"
          />
        </a>
        <SearchBar />
      </div>
    </header>
  );
};

export default Navbar;
