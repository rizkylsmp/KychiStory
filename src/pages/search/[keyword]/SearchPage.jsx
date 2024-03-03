import Header from "../../../components/novel/Header";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);

  return (
    <>
      <section className="px-8">
        <Header title={`Pencarian untuk ${decodeKeyword}...`} />
      </section>
    </>
  );
};

export default SearchPage;
