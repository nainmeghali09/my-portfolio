import linkedIn from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";

const Social = () => {
  return (
    <div className='flex space-x-6 justify-center my-4'>
     <a href="https://twitter.com/MeghaliNain"><img className='w-auto h-10'  src={twitter} alt='Twitter Link' /> 
     </a> 
     <a href="https://www.linkedin.com/in/meghali-nain-a6a9841a3/"> <img className='w-auto h-10' src={linkedIn} alt='Linkedin Link' /></a>
     <a href="https://t.co/PCtsGk4pA9"> <img className='w-auto h-10' src={github} alt='Github Link' /></a>
    </div>
  );
};

export default Social;
