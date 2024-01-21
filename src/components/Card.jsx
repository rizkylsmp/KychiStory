const Card = ({ all }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-1 pt-4">
      <div className="w-[100%]">
        <img
          src={all.images.jpg.image_url}
          alt=""
          className="w-[200px] h-[285px]"
        />
      </div>
      <div className="lg:text-[12px] md:text-[10px] text-[8px] font-medium pt-2">
        {all.title}
      </div>
      <div className="lg:text-[12px] md:text-[10px] text-[8px] font-bold">
        {all.rating}
      </div>
    </div>
  );
};

export default Card;
