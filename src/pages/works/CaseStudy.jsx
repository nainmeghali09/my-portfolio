import caseStudyLogo from "../../assets/case-studies/comp-logo.png";
import connectingLogo from "../../assets/case-studies/connecting-logo.png";
import thoughtsLogo from "../../assets/case-studies/thoughts-logo.png";
import supperCubLogo from "../../assets/case-studies/supper-club-logo.png";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const studies = [
  {
    title: "Connecting",
    desc: "An app for selling, buying and adopting dogs.",
    path: "connecting",
    img: connectingLogo,
  },
  {
    title: "The Thoughts",
    desc: "Designed an app for medetation.",
    path: "thoughts",
    img: thoughtsLogo,
  },
  {
    title: "Superclub",
    desc: "A website design for a restaurant for customizable wrap.",
    path: "supper-club",
    img: supperCubLogo,
  },
];

const CaseStudy = () => {
  return (
    <div className="bg-blue2 md:h-screen text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12">
      <div className="text-center mb-6 pt-4 md:pt-16">
        <img
          src={caseStudyLogo}
          alt="logo for Case Studies"
          className="mx-auto"
        />
        <h2 className="text-3xl mt-8 font-semibold">UX Case Studies</h2>
      </div>
      <motion.div
        className="flex flex-col pt-8 space-y-8 gap-4 md:flex-row items-center justify-evenly"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
      >
        {studies.map((study, id) => (
          <Link key={id} to={study.path}>
            <Card work={study} />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default CaseStudy;
