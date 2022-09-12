import "./App.css";
import Navbar from "./components/Navbar";


import Footer from "./components/Footer"
import AnimatedRouter from "./components/AnimatedRoutes";


function App() {
  return (
    <div className='app relative'>

      <Navbar />
     
<AnimatedRouter />
   
 
      <Footer />
    </div>
  );
}

export default App;
