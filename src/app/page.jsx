import Carousel from "@/components/Carousel";
import Featured from "@/components/Featured";
import Header from "@/components/Header";

const Page = async () => {
  

  return (
    <>
      {/* FEATURED */}
      <section className="m-10 p-5 bg-color-dark2 rounded-[10px]">
        <Header title={"FEATURED"} lhref={"/featured"} />
        <Featured/>
      </section>
    </>
  );
};

export default Page;
