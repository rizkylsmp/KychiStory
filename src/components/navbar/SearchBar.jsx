import { MagnifyingGlass } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const SearchBar = () => {
  const searchRef = useRef();
  const router = useNavigate();
  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="w-full px-2 py-2 rounded-md bg-[#0c131b] text-white"
        ref={searchRef}
      />
      <button className="absolute top-1 end-1" onClick={handleSearch}>
        <MagnifyingGlass size={30} weight="bold" className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
