
const Button = ({title1 , title2}) => {
  return <a  href={title1}  className="relative inline-flex items-center justify-start inline-block px-5 py-4 overflow-hidden font-bold  group">
  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-myorange opacity-[3%]"></span>
  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-myorange opacity-100 group-hover:-translate-x-8"></span>
  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900"></span>
  <span className="absolute inset-0 border-2 border-myorange"></span> {title2}
</a>
};

export default Button;
