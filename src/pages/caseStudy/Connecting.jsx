import connectingLogo from "../../assets/case-studies/connecting/connecting-logo.png";
import process from "../../assets/case-studies/connecting/process.png";
import mProcess from "../../assets/case-studies/connecting/m-process.png";
import analysis from "../../assets/case-studies/connecting/analysis.png";
import analysis2 from "../../assets/case-studies/connecting/analysis2.png";
import analysis3 from "../../assets/case-studies/connecting/analysis3.png";
import analysis4 from "../../assets/case-studies/connecting/analysis4.png";
import analysis5 from "../../assets/case-studies/connecting/analysis5.png";
import persona1 from "../../assets/case-studies/connecting/persona1.png";
import persona2 from "../../assets/case-studies/connecting/persona2.png";
import persona3 from "../../assets/case-studies/connecting/persona3.png";
import low from "../../assets/case-studies/connecting/low.png";
import high from "../../assets/case-studies/connecting/high.png";
import style from "../../assets/case-studies/connecting/style.png";
import ui from "../../assets/case-studies/connecting/ui.png";
import proto from "../../assets/case-studies/connecting/proto.png";
import flowChart from "../../assets/case-studies/connecting/flowchart.png";
import SectionNumber from "../../components/SectionNumber";
import ButtonProto from "../../components/ButtonProto";
// import connectingLogo from "../../assets/case-studies/connecting/connecting-logo.png";
// import connectingLogo from "../../assets/case-studies/connecting/connecting-logo.png";


const Connecting = () => {
  return (
    <section>
      <main className='bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <div className='text-center mb-6 pt-4'>
          <img src={connectingLogo} alt='Connecting Logo' className='mx-auto' />
          <h1 className='text-4xl font-bold'>Connecting</h1>
          <p className='text-lg'>
            An app for selling, buying and adopting dogs.
          </p>
        </div>
        <div className='md:px-6 lg:px-10'>
          <div className='mb-4'>
            <p className='text-xl text-orange-500'>The Challange : </p>
            <p className='text-lg'>
              Due to Covid-19, it might be a risk to travel in search of pet and
              might put themselves at risk by leaving their homes.
            </p>
          </div>
          <div className='mb-4'>
            <p className='text-xl text-orange-500'>The Goal :</p>
            <p className='text-lg'>
              So, I designed an app to connect pet owners to the one who wants
              to buy or adopt them.
            </p>
          </div>
          <div className='mb-4'>
            <p className='text-xl text-orange-500'>My Role :</p>
            <p className='text-lg'>For this project, my role was :</p>
            <p className='text-lg'>
              UI/UX Design, performing user research, persona development, low
              and mid fidelity wireframes, high fidelity wireframes and
              prototyping.
            </p>
          </div>
        </div>
      </main>

      <section className='relative bg-blue1 text-white pt-16 pb-4 px-4 md:px-12 md:pb-8 lg:px-16 lg:pb-12'>
        <SectionNumber number='01' />
        <p className='text-xl text-orange-500 mb-3'>The Process :</p>
        <img src={mProcess} alt='process chart' className=' md:hidden' />
        <img src={process} alt='process chart' className='hidden md:block mx-auto' />
        <div className='my-4'>
          <p className='text-xl text-orange-500'>Responsibility :</p>
          <p className='text-lg'>
            Foundational Research, User Research, Wireframing, Branding,
            Prototyping.
          </p>
        </div>
        <div className='mb-4'>
          <p className='text-xl text-orange-500'>Foundational Reasearch :</p>
          <p className='text-lg'>
            I started looking for the ways to buy/adopt dogs by asking my
            friends and searched on Internet
          </p>
          <ul>
            <p className='text-xl'>Few ways of adopting/ buying pets :</p>
            <li className='ml-4'>Friend/Relative</li>
            <li className='ml-4'>Stray Animals</li>
            <li className='ml-4'>Social Media</li>
            <li className='ml-4'>Adoption Center </li>
          </ul>
        </div>
      </section>

      <section className='relative bg-blue2  text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <SectionNumber number='02' />
        <div>
          <p className='text-xl text-orange-500'>Competitor's Analysis :</p>
          <p className='text-lg'>
            For competitiors analysis, I checked the play store reviews for
            different pet adoption/buying apps.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4  gap-2 my-10 justify-center'>
          <img  src={analysis} alt='People reviews' />
          <img className="md:h-96  review"  src={analysis2} alt='People reviews' />
          <div className='flex flex-col  gap-2'>
            <img  src={analysis3} alt='People reviews' />
            <img  src={analysis4} alt='People reviews' />
          </div>
          <img className="review "   src={analysis5} alt='People reviews' />
        </div>
        <div>
          <p className='text-xl text-orange-500'>User Pain Points :</p>
          <ol className='text-lg list-decimal ml-8'>
            <li>Some people are asked to pay money for adopting pets</li>
            <li>Communication Gap (Due to email only feature).</li>
          </ol>
        </div>
        <div>
          <p className='text-xl text-orange-500'>Demographics :</p>
          <ol className='text-lg list-decimal ml-8'>
            <li>Gender - Male-Female-Othes</li>
            <li>Age - Above 18</li>
            <li>Location- Delhi (India)</li>
          </ol>
        </div>
      </section>

      <section className='relative bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <SectionNumber number='03' />
        <p className='text-xl text-orange-500 mb-4'>User Persona : </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-4 md:flex-row justify-center'>
          <img  className='md:w-1/4 ' src={persona1} alt='People Persona' />
          <img  className='md:w-1/4' src={persona2} alt='People persona' />
          <img  className='md:w-1/4 ' src={persona3} alt='People persona' />
        </div>
      </section>
      <section className='bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <p className='text-xl text-orange-500 mb-4'>User Flow Chart : </p>
        <img src={flowChart} alt='flow chart' />
      </section>

      <section className='relative bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <SectionNumber number='04' />
        <p className='text-xl text-orange-500 mb-4'>Low-Fidelity Wireframe : </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-4 md:flex-row justify-center'>
          <img   src={low} alt='People Persona' />
      
        </div>
      </section>

      <section className='relative bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
      
        <p className='text-xl text-orange-500 mb-4'>Mid-Fidelity Wireframe : </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-10 md:flex-row justify-center'>
          <img   src={high} alt='People Persona' />
      
        </div>
      </section>

      <section className='relative bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <SectionNumber number='05' />
        <p className='text-xl text-orange-500 mb-4'>UI Style Guide: </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-10 md:flex-row justify-center'>
          <img   src={style} alt='style guide' />
      
        </div>
      </section>

      <section className='relative bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>

        <p className='text-xl text-orange-500 mb-4'>High-Fidelity Wireframe : </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-10 md:flex-row justify-center'>
          <img   src={ui} alt='high-fidelity' />
      
        </div>
      </section>


      <section className='relative bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <SectionNumber number='06' />
        <p className='text-xl text-orange-500 mb-4 '>Prototype : </p>
        <div className=' grid justify-center justify-items-center grid-cols-1  gap-3  my-10 md:grid-cols-2'>
         <div className=" flex flex-col justify-center space-y-4   ">
          <h1 className="text-center text-2xl md:text-6xl ">Choose Your Buddy</h1>
<div className="text-center">
        <ButtonProto title={"https://www.figma.com/proto/U5DK9m0pa69m3DFupskPGB/dog-app?page-id=0%3A1&node-id=1%3A2&viewport=243%2C48%2C0.09&scaling=scale-down&starting-point-node-id=1%3A2"} title2="View Prototype" />
       </div>  
         </div>
         
          <img src={proto} alt='high-fidelity' />
      
        </div>
      </section>
     
    </section>
  );
};

export default Connecting;
