import Link from "next/link";

const Header = ({ title, lhref }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="flex text-2xl font-bold text-color-primary">
        <div className="bg-color-accent w-1 h-6 rounded-sm mr-1.5 self-center"></div>
        {title}
      </h1>
      {lhref ? (
        <Link
          href={lhref}
          className="md:text-xs text-xs underline text-color-primary hover:text-color-accent transition-all"
        >
          SEE ALL
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
