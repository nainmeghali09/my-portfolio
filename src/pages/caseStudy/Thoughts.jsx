import React from "react";
import process from "../../assets/case-studies/thoughts/process.png";
import processM from "../../assets/case-studies/superclub/processM.png";
import thought from "../../assets/case-studies/thoughts/thought.png";
import SectionNumber from "../../components/SectionNumber";
import analysis1 from "../../assets/case-studies/thoughts/analysis1.png";
import analysis2 from "../../assets/case-studies/thoughts/analysis2.png";
import analysis3 from "../../assets/case-studies/thoughts/analysis3.png";
import analysis5 from "../../assets/case-studies/thoughts/analysis5.png";
import analysis6 from "../../assets/case-studies/thoughts/analysis6.png";
import analysis7 from "../../assets/case-studies/thoughts/analysis7.png";
import persona1 from "../../assets/case-studies/thoughts/persona1.png";
import persona2 from "../../assets/case-studies/thoughts/persona2.png";
import flowChart from "../../assets/case-studies/thoughts/flowChart.png";
import mid from "../../assets/case-studies/thoughts/mid.png";
import style from "../../assets/case-studies/thoughts/style.png";
import ui from "../../assets/case-studies/thoughts/ui.png";
import proto from "../../assets/case-studies/thoughts/proto.png";
import ButtonProto from "../../components/ButtonProto";

const Thoughts = () => {
  return (

  
  <section>
      <main className='bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <div className='text-center mb-6 pt-4'>
          <img src={thought} alt='thought Logo' className='mx-auto my-2' />
          <h1 className='text-3xl  font-bold'>The Thought</h1>
          <p className='text-lg'>
          An app for meditation.
          </p>
        </div>

        <div className='md:px-2 lg:px-10'>
          <div className='mb-4'>
            <p className='text-xl text-orange-500'>The Problem : </p>
            <p className='text-lg'>
            Due to Covid-19, people were really stressed and people use more than one type of meditation app to practice it.
            </p>
            </div>
        
          <div className='mb-4 '>
            <p className='text-xl text-orange-500'>The Goal :</p>
            <p className='text-lg'>
            So, I decided to design a meditation app where people can meditate through youtube sessions, songs and they can even consult with an expert.
            </p>
          </div> 

          <div className='mb-4'>
            <p className='text-xl text-orange-500'>My Role :</p>
            <p className='text-lg'>For this project, my role was :</p>
            <p className='text-lg'>
            UI/UX Design, performing user research, persona development, low and mid fidelity wireframes, high fidelity wireframes and prototyping. 
            </p>
          </div>
          </div>

        </main>

        <section className='relative  bg-blue1 text-white pt-16 pb-4 px-4 md:px-12 md:pb-8 lg:px-16 lg:pb-12'>
        <SectionNumber number='01' />
        <p className='text-xl text-orange-500 mb-3'>The Process :</p>
        <img src={processM} alt='process chart' className=' md:hidden' />
        <img src={process} alt='process chart' className='hidden md:block mx-auto' />
        <div className='my-4'>
          <p className='text-xl text-orange-500'>Responsibility :</p>
          <p className='text-lg'>
            Foundational Research, User Research, Wireframing, Branding,
            Prototyping.
          </p>
        </div>

        <div className='my-4'>
          <p className='text-xl text-orange-500'>Discover :</p>
          <p className='text-lg'>
          I started off my process with secondary research to better understand meditation and mental health.
          </p>
        </div>
        </section>

        <section className='relative bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <SectionNumber number='02' />
        <div>
          <p className='text-xl text-orange-500'>Competitor's Analysis :</p>
          <p className='text-lg mt-6'>
            For competitiors analysis, I checked the play store reviews for
            different pet adoption/buying apps.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4  gap-2 my-10 justify-center'>
          <img className="md:h-96 review"  src={analysis1} alt='People reviews' />
          <div className='flex flex-col  gap-2'>
            <img   src={analysis2} alt='People reviews' />
            <img  src={analysis3} alt='People reviews' />
          </div>
          <img  className="review" src={analysis5} alt='People reviews' />
          <div className='flex flex-col  gap-2'>
            <img   src={analysis6} alt='People reviews' />
            <img  src={analysis7} alt='People reviews' />
          </div>

        </div>
        <div>
          <p className='text-xl text-orange-500'>User Pain Points :</p>
          <ol className='text-lg list-decimal ml-8'>
            <li>Some people are asked to pay money for adopting pets</li>
            <li>Communication Gap (Due to email only feature).</li>
          </ol>
        </div>
        </section>

        <section className='relative bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <SectionNumber number='03' />
        <p className='text-xl text-orange-500 mb-4'>User Persona : </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-4 md:flex-row justify-center'>
          <img  className='md:w-1/4 ' src={persona1} alt='People Persona' />
          <img  className='md:w-1/4 ' src={persona2} alt='People persona' />
       
        </div>
      </section>

      <section className='bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <p className='text-xl text-orange-500 mb-4'>User Flow Chart : </p>
        <img className="md:mx-20" src={flowChart} alt='flow chart' />
      </section>

      <section className='relative bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
      
        <p className='text-xl text-orange-500 mb-4'>Mid-Fidelity Wireframe : </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-10 md:flex-row justify-center'>
          <img   src={mid} alt='mid-fidelity' />
      
        </div>
      </section>
      <section className='relative bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
      
        <p className='text-xl text-orange-500 mb-4'>UI Style Guide : </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-10 md:flex-row justify-center'>
          <img   src={style} alt='style guide' />
      
        </div>
      </section>
      <section className='relative bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
      <SectionNumber number= '05' />
      <p className='text-xl text-orange-500 mb-4'>High-Fidelity Wireframe : </p>
      <div className='flex flex-col items-center gap-3 flex-wrap my-10 md:flex-row justify-center'>
        <img   src={ui} alt='mid-fidelity' />
    
      </div>
    </section>

    <section className='relative bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
      
        <p className='text-xl text-orange-500 mb-4'>Prototype :  </p>
        <div className='grid justify-items-center justify-center grid-cols-1  gap-3  my-10 md:grid-cols-2'>
         <div className="flex justify-center space-y-4 md:space-y-4 flex-col ">
          <h1 className="text-center text-2xl md:text-6xl ">Happy Mind, Happy Life</h1>
          <div className="text-center">
        <ButtonProto title={"https://framer.com/share/the-thought--9VOZqwse1ZHvavAjA0Ny/acDlXrrHVmUUoouhHGDbP9-1%3A20v6rcqhgkh7"} title2="View Prototype" />
       </div>  
  
         </div>
         
          <img src={proto} alt='high-fidelity' />
      
        </div>
      </section>
        </section>
  )
 
};

export default Thoughts;
