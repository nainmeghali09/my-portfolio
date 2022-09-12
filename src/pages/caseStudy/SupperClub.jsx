import React from "react";
import SectionNumber from "../../components/SectionNumber";
import superclub from "../../assets/case-studies/superclub/superclub.png"
import process from "../../assets/case-studies/superclub/process.png";
import processM from "../../assets/case-studies/superclub/processM.png";
import flow from "../../assets/case-studies/superclub/flow.png"
import low from "../../assets/case-studies/superclub/low.png"
import mid from "../../assets/case-studies/superclub/mid.png"
import style from "../../assets/case-studies/superclub/style.png"
import ui from "../../assets/case-studies/superclub/ui.png"
import ButtonProto from "../../components/ButtonProto";

const SupperClub = () => {
  return (
    <section>
<main className='bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <div className='text-center mb-6 pt-4'>
          <img src={superclub} alt='thought Logo' className='mx-auto my-2' />
          <h1 className='text-3xl  font-bold'>Supperclub</h1>
          <p className='text-lg'>
     A website for a restaurant!
          </p>
        </div>
        <div className='md:px-2 lg:px-10'>
          <div className='mb-4'>
            <p className='text-xl text-orange-500'>The Challange : </p>
            <p className='text-lg'>
            This project was carried out based on a fictional brief, as a part of four week course on User Experience Design.
The main challenge was to design a digital product foa a concept restaurant, through which users can customize, order food and pay.
            </p>
            </div>
            <div className='mb-4 '>
            <p className='text-xl text-orange-500'>The Goal :</p>
            <p className='text-lg'>
            
            The goal was to create a website for a restaurant through which users can customize the menu,order food and pay.
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


        <section className='relative bg-blue1 text-white pt-16 pb-4 px-4 md:px-12 md:pb-8 lg:px-16 lg:pb-12'>
        <SectionNumber number='01' />
        <p className='text-xl text-orange-500 mb-3'>The Process :</p>
        <img src={processM} alt='process chart' className=' md:hidden' />
        <img src={process} alt='process chart' className='hidden md:block mx-auto' />
        <div className='my-4'>
          <p className='text-xl text-orange-500'>Responsibility :</p>
          <p className='text-lg'>
          Discover</p>
       <p className="text-lg">User Research</p>
      <p className="text-lg"> Wireframing</p>
      <p className="text-lg">Branding</p>
      <p className="text-lg">Prototyping</p> 
          
        </div>

        <div className='my-4'>
          <p className='text-xl text-orange-500'>Target Audience :</p>
          <p className='text-lg'>  1.  Early risers</p>
          <p className='text-lg'>  2. College Students</p>
          <p className='text-lg'>  3. Tech and office workers looking for something delicious and quick during their lunch break. </p>
        </div>
</section>

<section className='relative bg-blue2 text-white pt-16 pb-4 px-4 md:px-12 md:pb-8 lg:px-16 lg:pb-12'>
        <SectionNumber number='02' />
       
        <div className='my-4'>
          <p className='text-xl text-orange-500'>Demographics :</p>

          <p className='text-lg'>  1. Male-Female-Other</p>
          <p className='text-lg'>  2.  Education - University Studies</p>
          <p className='text-lg'>  3. Single/ Married </p>
          <p className='text-lg'>  4. Age - 18-30 years old </p>
        </div>

        <div className='my-4'>
          <p className='text-xl text-orange-500'>User Needs :</p>
          <p className='text-lg'>  1.   Find out if restaurant is open and if it delivers to their area</p>
          <p className='text-lg'>  2. Customize orders according to preferences.</p>
          <p className='text-lg'>  3. Get price with delivery free. </p>
          <p className='text-lg'>  4. Get a time estimate of delivery.</p>
          <p className='text-lg'>   5. Save past orders and preferences for future orders.</p>
          <p className='text-lg'>   6. Contact someone if there are issues/ questions. </p>
        </div>

        <div className='my-4'>
          <p className='text-xl text-orange-500'>Client Needs :</p>
          <p className='text-lg'>  1.   To set up a customizable online ordering system.</p>
          <p className='text-lg'>  2. Receive payments in the website.</p>
          <p className='text-lg'>  3. Provide a delivery service to customers.</p>
          <p className='text-lg'>  4. Create appealing website for corporate audience.</p>
          <p className='text-lg'>   5. Communication channel between customer and company.</p>
        
        </div>
        

</section>

<section className='relative bg-blue1 text-white pt-16 pb-4 px-4 md:px-12 md:pb-8 lg:px-16 lg:pb-12'>
        <SectionNumber number='03' />
       
        <div className='my-4'>
          <p className='text-xl text-orange-500'>Outline of Scope :</p>

          <p className='text-lg'>  In building a website, we are concerned about what type of information or actions that customer might want to see and do when they visit.</p>
   
        </div>

        <div className='my-4'>
          <p className='text-xl text-orange-500'>Content Requirements :</p>

          <ul>
        <li className="list-disc">Food menu</li>
        <p className="px-6">Customizable wrap</p>
        <li className="list-disc">Text that emphassizes that the restaurant is only for delivery in Delhi, India.</li>
        <li className="list-disc">About Us </li>
        <li className="list-disc">Reviews</li>
        <li className="list-disc">Contact</li>
        <li className="list-disc">FAQ</li>
        <p className="px-6"> Where do you deliver?</p>
        <p className="px-6">  Is there a delivery charge?</p>
        <p className="px-6"> How long does it take to deliver the food?</p>
        <p className="px-6"> Can I order in advance for catering?  </p>

          </ul>
   
        </div>

</section>

<section className='bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>

        <p className='text-xl  text-orange-500 mb-4'>Sitemap : </p>
        <p className='text-xl text-white mb-4'>  Now that I have outlined the scope of my restaurant’s website, I can now organize the content in such a way that shows me what goes where.
</p>
        <img src={flow} className='md:px-24' alt='flow chart' />
      </section>


      <section className='relative bg-blue1 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
 
        <p className='text-xl text-orange-500 mb-4'>Sketching and Wireframing : </p>
        <p className='text-xl text-white mb-4'>I began drawing my initial layouts on paper before moving them to the digital wireframes. </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-4 md:flex-row justify-center'>
          <img   src={low} alt='People Persona' />
          <img   src={mid} alt='People Persona' />
      
        </div>
      </section>



      <section className='relative bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <SectionNumber number='05' />
        <p className='text-xl text-orange-500 mb-4'>UI Style Guide: </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-10 md:flex-row justify-center'>
          <img   src={style} alt='style guide' />
      
        </div>
      </section>

      <section className='relative bg-blue2 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
        <SectionNumber number='06' />
        <p className='text-xl text-orange-500 mb-4'>High-Fidelity Wireframes: </p>
        <p className='text-xl text-white mb-4'>After finishing the low-fidelity wireframes and style guide, I began developing the final design in Figma. </p>
        <div className='flex flex-col items-center gap-3 flex-wrap my-10 md:flex-row justify-center'>
          <img   src={ui} alt='high-fidelity wireframes' />
      
        </div>
        <div className="text-center">
        <ButtonProto title={"https://www.figma.com/proto/U5DK9m0pa69m3DFupskPGB/dog-app?page-id=0%3A1&node-id=1%3A2&viewport=243%2C48%2C0.09&scaling=scale-down&starting-point-node-id=1%3A2"} title2="View Prototype" />
       </div>  
       
  
      </section>
    </section>
  )
};

export default SupperClub;
