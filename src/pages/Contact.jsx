import Form from "../components/Form";
import Social from "../components/Social";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div id="contact" className='py-16 px-8 bg-blue1 text-white lg:px-20'
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
      <div className='font-bold text-2xl mb-12 lg:text-4xl'>
        <span className='border-b-4 border-orange-500'>Co</span>ntact Me
      </div>
      <div className='text-center'>
        <div className='text-xl font-semibold lg:text-2xl'>Say 
      Hi!</div>
        <div>Contact me through an email or via any one the network below</div>
        <Social />
      </div>
      <Form />
    </motion.div>
  );
};

export default Contact;
