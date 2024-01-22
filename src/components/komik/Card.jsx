const Card = ({ all }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-white">
        <img
          src={all.images.jpg.image_url}
          alt=""
          className="w-fit max-h-[250px] object-cover rounded-xl"
        />
        <div className="lg:text-[12px] md:text-[10px] text-[8px] font-medium pt-2 text-center">
          {all.title}
        </div>
      </div>
    </div>
  );
};

export default Card;
