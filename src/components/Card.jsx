const Card = ({ work }) => {
  return (
    <div>
      <div className='flex text-justify md:h-60  flex-col items-center w-52  border-2 border-orange-500 rounded-md mx-auto px-3 py-4 md:w-60 md:p-6 lg:px-2 md:transform md:transition md:duration-500 md:hover:scale-125 ' >
        <img src={work.img} alt={work.title} />
        <div className='font-bold text-lg my-2'>{work.title}</div>
        <div>{work.desc}</div>
      </div>
    </div>
  );
};

export default Card;
