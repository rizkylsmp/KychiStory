import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";

const SearchBar = () => {
  const searchRef = useRef();
  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="w-full px-2 py-2 rounded-md bg-[#0c131b] "
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1 end-1" onClick={handleSearch}>
        <MagnifyingGlass size={30} weight="bold" className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
