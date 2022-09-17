import face from "../assets/face.png";
import Button from "../components/Button";
import Skills from "./Skills";
import Contact from "./Contact";
import WorkComp from "../components/WorkComp";
import SectionNumber from "../components/SectionNumber";

import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import React from "react";
import { motion } from "framer-motion";
import ButtonProto from "../components/ButtonProto";


const Home = () => {
  return (
    <motion.div
      className="bg-blue2 text-white"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}
    >
      <div className="py-24  relative md:-left-16 md:justify-between px-9 mb-16 md:flex md:flex-row-reverse md:space-x-4 lg:space-x-4 lg:px-16">
        <div>
          {" "}
          <img
            src={face}
            alt="Painting of a girl's face"
            className="w-auto h-47 mx-auto md:h-52 md:mt-8 md:ml-8 lg:h-72 xl:h-96"
          />
        </div>
        
        <div className="mt-6  md:w-2/3   lg:mt-12 lg:px-12 xl:px-24">
          <div className="text-center font-bold text-2xl md:text-left md:text-3xl">
         Hii,
          </div>
          <div className="text-center font-bold text-2xl md:text-left md:text-3xl lg:mt-4">
                  
<Typewriter
    options={{
      strings: " My name is Meghali Nain",
      autoStart: true,
      loop: true,
      deleteSpeed: 70,
      wrapperClassName: 'head_tags'
    }}
  />
          </div>
          <div className="mt-4 text-justify  lg:mt-8">
          I am a self taught UI/UX Designer. I currenlty work as a freelancer
                UI Designer and illustrator. I aim to simplify the overall process
                as a UX Designer in order to construct better and more practical
                user interfaces.
          </div>
          <div className="text-center mt-6 md:text-left">
            <ButtonProto
              title="mailto:nainmegha16@gmail.com"
              title2="Contact Me"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <SectionNumber number="01" />
        <WorkComp link={"home"} />
      </div>

      <div className="relative">
        <SectionNumber number="02" />
        <Skills />
      </div>
      <div className="relative">
        <SectionNumber number="03" />
        <Contact />
      </div>
    
    </motion.div>

  
  );
};

export default Home;
