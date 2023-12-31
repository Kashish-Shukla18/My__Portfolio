import React from 'react';

const Experience = () => {
  return (
    <div id='ExperienceSection'>
    <hr className='w-1/2 mt-10 ml-auto border-b border-blue-500' />

      <div className='grid justify-items-center mt-28 mb-[4rem] text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl m-3'>
        <span className="text-transparent bg-clip-text bg-gradient-to-r p-3 to-blue-600 from-sky-200">My Experience</span>
      </div>
      {/* Big Flexbox */}
      <div className='flex items-center mt-4 sm:flex-col ssm:flex-col'>
        <div className="flex  flex-col items-center m-3 mb-5 justify-center w-4/5 h-full bg-black text-white" style={{ boxShadow: '10px 8px 10px #54556661' }}>
          <div className='text-3xl font-bold'><h1 className='text-blue-600'>InfoSys SpringBoard</h1></div>
          <div className='text-2xl font-semibold'><h1>Web Development Training</h1></div>
          <div className='text-base  font-semibold p-4'><p>∗ Fullstack Development Bootcamp Learned about industry-relevant practices.<br></br>
            ∗ Learned about technologies portfolio building and project planning.<br></br>
            ∗ In-depth understanding of HTML, CSS, JavaScript, React, JQuery, Bootstrap, and PHP<br></br>
            
            </p></div>

        </div>
        <div className="flex  flex-col items-center m-3 mb-5 justify-center w-4/5 h-full bg-black text-white" style={{ boxShadow: '10px 8px 10px #54556661' }}>
          <div className='text-3xl font-bold'><h1 className='text-blue-600'>Internshala</h1></div>
          <div className='text-2xl font-semibold'><h1>Web Development Training</h1></div>
          <div className='text-base  font-semibold p-4'><p>∗ Fullstack Development Bootcamp Learned about industry-relevant practices.<br></br>
            ∗ Learned about technologies portfolio building and project planning.<br></br>
            ∗ In-depth understanding of HTML, CSS, JavaScript, React, JQuery, Bootstrap, and PHP</p></div>

        </div>
        <div className="flex  flex-col items-center m-3 mb-5 justify-center w-4/5 h-full bg-black text-white" style={{ boxShadow: '10px 8px 10px #54556661' }}>
          <div className='text-3xl font-bold'><h1 className='text-blue-600'>IBM SkillBuild</h1></div>
          <div className='text-2xl font-semibold'><h1>Web Development Training</h1></div>
          <div className='text-base  font-semibold p-4'><p>* Applied hands-on experience in implementing AI/ML techniques.<br></br>
* Developed and utilized a chatbot as part of practical applications.<br></br>
* Leveraged IBM Watson Studio to predict data correctness,<br></br> showcasing proficiency in advanced analytics and machine learning technologies.





</p></div>

        </div>
      </div>
    </div>
  );
}
export default Experience;