import "./bar.css";

const ProgressBar = ({ width, value, skill }) => {
  const progress = width * value;

  return (
    <>
      <div className="flex-col hidden md:flex    py-8 items-start justify-center">
        <h1 className="text-white">{skill}</h1>
        <div
          className="progress-bar-wrapper  w-full bg-white h-5 "
          style={{ width: width }}
        >
          <div
            className="progress-bar h-full  sm:w-20"
            style={{ width: progress }}
          >
            <div className="bar"></div>
          </div>
        </div>
         
      </div>
    </>
  );
};

export default ProgressBar;
