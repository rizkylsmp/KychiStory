import Featured from "@/components/Featured";
import Header from "@/components/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?q=${keyword}`
  );
  const searchNovel = await response.json();

  return (
    <>
      <section className="px-8">
        <Header title={`Pencarian untuk ${decodeKeyword}...`} />
        <Featured api={searchNovel} />
      </section>
    </>
  );
};

export default Page;
