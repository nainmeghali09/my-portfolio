
const ButtonProto = ({title,title2}) => {
  return (
    <a href={title} className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold  group">
<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-myorange opacity-[3%]"></span>
<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-myorange opacity-100 group-hover:-translate-x-8"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">{title2}</span>
<span className="absolute inset-0 border-2 border-myorange"></span>
</a>
)
};

export default ButtonProto;

//<a className='bg-myorange w-fit  px-3 py-1 text-lg ' href={title} > View Prototype</a><a href= {title} class="relative w-fit inline-flex items-center justify-center px-5 py-2 text-sm font-medium tracking-tighter text-white bg-myorange rounded-sm group">
   /* <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-white rounded-sm group-hover:mt-0 group-hover:ml-0"></span>
    <span class="absolute inset-0 w-full h-full  rounded-md "></span>
    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-myorange rounded-sm opacity-0 group-hover:opacity-100 "></span>
    <span class="relative text-myorange transition-colors duration-200 ease-in-out delay-100 mt-2  group-hover:text-white">View Prototype</span>
    </a>*/