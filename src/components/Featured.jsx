import { getNovels } from "../libs/api-libs";

const novelsData = [
  { id: "omniscient-readers-viewpoint" },
  { id: "the-beginning-after-the-end-novel-id5" },
  { id: "trash-of-the-counts-family" },
  { id: "the-s-classes-that-i-raised" },
  { id: "lord-of-the-mysteries" },
];

const Featured = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-1 pt-4">
      {novelsData?.map(async (novel) => {
        const data = await getNovels(novel.id);

        return (
          <a
            key={novel.id}
            href={data.id}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
          >
            <img
              src={data.image}
              alt="..."
              width={300}
              height={480}
              className="object-cover max-h-[360px] w-full h-full overflow-hidden rounded-[10px] transition hover:scale-104 duration-300 ease-in-out"
            />
            <div className="lg:text-[12px] md:text-[10px] text-[8px] font-medium pt-2">
              {data.title}
            </div>
            <div className="lg:text-[12px] md:text-[10px] text-[8px] font-bold">
              {data.rating}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Featured;
