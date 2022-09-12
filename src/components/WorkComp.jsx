import compLogo from "../assets/comp-logo.png";
import cssLogo from "../assets/css-logo.png";
import responsiveLogo from "../assets/responsive-logo.png";
import figmaLogo from "../assets/figma-logo.svg";
import Card from "./Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const works = [
  {
    title: "UX Case Study",
    desc: "A collection of projects with user research, wireframes and prototypes.",
    path: "case-study",
    img: compLogo,
  },
  {
    title: "CSS Art",
    desc: "This project contains a list of illustrations that I have made using pure HTML and CSS",
    path: "cssarts",
    img: cssLogo,
  },
  {
    title: "UI Designs",
    desc: "Here’s a list of illustrations that I have made completey in Figma.",
    path: "designs",
    img: responsiveLogo,
  },
  {
    title: "Illustration",
    desc: "A list of UI designes for both app and website. Designed in Figma.",
    path: "illustration",
    img: figmaLogo,
  },
];

const WorkComp = ({ link }) => {
  return (
    <>
      <motion.div className='px-8 py-8 md:px-24 space-y-16 bg-blue1 md:h-screen  text-white lg:py-16' initial={{ width: 0 }}
             animate={{ width: "100%" }}
             exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}>
        <div className='text-2xl font-bold lg:text-4xl'>
          {" "}
          <span className='border-b-4 border-orange-500'>Wo</span>rk
        </div>
        <div className='grid justify-center items-center grid-cols-1 gap-3 md:grid-cols-2 md:px-14 md:space-y-0 md:gap-6 lg:grid-cols-4 lg:py-28 lg:px-2' >
             
          {works.map((work, id) => (
            <Link
              key={id}
              to={`${link === "work" ? work.path : "work/" + work.path}`}
            >
              <Card key={id} work={work} />
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default WorkComp;
