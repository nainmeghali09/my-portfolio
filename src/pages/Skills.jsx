
import ProgressBar from "../components/ProgressBar";
import ProgressBarMobile from "../components/ProgressBarMobile";


const Skills = () => {
  return (
    <div className="md:py-44 flex flex-col justify-center  py-16 px-8 h-screen bg-blue2 text-white md:px-14 lg:px-20">
      <div className="font-bold text-2xl mb-12 lg:text-4xl">
        <span className="border-b-4 transition-all ease-out duration-1000 border-orange-500">
          Sk
        </span>
        ills
      </div>
      <div className="skill-container   ">
        <ProgressBar width={1200} value={0.9} key={1} skill="Figma" />
<ProgressBarMobile  width={340} value={0.9} key={1} skill="Figma" />
        <ProgressBar width={1200} value={0.7} key={2} skill=" Framer" />
        <ProgressBarMobile  width={340} value={0.7} key={2} skill="Framer" />
        <ProgressBar width={1200} value={0.6} key={3} skill="Adobe XD" />
        <ProgressBarMobile  width={340} value={0.6} key={3} skill="Adobe XD" />
        <ProgressBar width={1200} value={0.9} key={3} skill="Balsamiq"/>
        <ProgressBarMobile  width={340} value={0.9} key={4} skill="Balsamiq" />
      </div>
    </div>
  );
};

export default Skills;
