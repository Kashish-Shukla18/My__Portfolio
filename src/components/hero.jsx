import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaGithub, FaGit } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import ProfileImg from '../assets/profileimg.png';

import DownloadCV from './downloadCV'; // Make sure the file name is correct

const Hero = () => {
  return (
    <>
      <section className='h-full bg-gradient-to-r from-[#000000] via-[#000000] to-[#2F80ED] flex justify-around items-center p-10 pb-0 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 w-full text-white'>
        {/* 1 */}
        <div className='lg:w-1/2 ssm:w-fit'>
          <div className='mt-28 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] backdrop-filter backdrop-blur-md bg-opacity-50 bg-gray-700 bg-blur-1 rounded-md shadow-inner-md p-10 transform transition-transform duration-300 ease sm:w-full hover:scale-105 mb-4'>
            <p className='text-4xl mb-5 text-slate-300'>Kashish Shukla</p>
            <div className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl m-3'>
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-200 pb-4">Programmer<br /><span className='ml-[10.5rem] ssm:ml-[5.5rem]'>&</span><br />Web Developer</span>
            </div>
          </div>
          <div>
            <DownloadCV />
          </div>
        </div>
        {/* 2 */}
        <div className='h-4/5 w--3/5 p-10 pb-0 items-center lg:w-1/2 ssm:w-fit'>
          <img
            src={ProfileImg}
            alt=''
            className='max-w-full mb-0 pb-0 max-h-full mx-auto'
          />
        </div>
      </section>
      <section className='h-48 flex flex-col items-center mt-10 p-0 justify-center'>
        <p className='text-4xl mb-5 p-10 text-slate-300 font-bold'>Find Me On:</p>
        <div className="flex space-x-4 p-10">
          <a href='https://github.com/Kashish-Shukla18' target="_blank" rel="noopener noreferrer">
            <BsGithub size={40} className="text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out" />
          </a> 
          <a href='https://m.facebook.com/profile.php/?id=100082691581480&name=xhp_nt_fbaction_open_user' target="_blank" rel="noopener noreferrer">
            <BsFacebook size={40} className="text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out" />
          </a>          
          <a href='https://www.instagram.com/kashish1812_?igsh=MXVtN3R6MXNydzJ6bg==' target="_blank" rel="noopener noreferrer">
            <BsInstagram size={40} className="text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out" />
          </a>         
          <a href=' https://www.linkedin.com/in/kashish-shukla-a0b336212/' target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={40} className="text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out" />
          </a>
          
        </div>
      </section>
      <hr className='w-1/2 mt-10 ml-auto border-b border-blue-500' />

      <section id='AboutSection' className=' h-full mb-10 overflow-x-hidden'>
        <div className='flex flex-row justify-center items-center lg:flex-row ssm:flex-col w-full'>
          <div className='flex flex-col lg:w-1/3 ssm:w-4/5'>
            <h1 className='text-4xl text-center m-8 pb-8 pl-6 text-slate-300 font-bold border-b border-sky-100' style={{ textShadow: ' #3b82f6 3px 8px 4px' }}>
              ABOUT ME:
            </h1>
          </div>

          <p className='m-10 w-1/2 p-8 text-xl text-slate-300 font-sans ssm:w-full text-center'>I am a dedicated and aspiring software developer, currently pursuing a Bachelor of Technology in Computer Science and Engineering at Dr. Ram Manohar Lohia Avadh University. With a passion for technology and a strong educational foundation, I am committed to developing innovative software solutions that address real-world needs. My goal is to contribute my skills and knowledge to a dynamic team, where I can continue to learn and grow while making a positive impact in the world of technology.</p>
        </div>


        <div className='flex flex-row justify-center text-center items-center lg:flex-row ssm:flex-col mb-5 w-full'>
          <div className='flex flex-col lg:w-1/3 ssm:w-4/5'>
            <h1 className='text-4xl m-8 pb-8 pl-6 text-slate-300 font-bold border-b border-sky-100' style={{ textShadow: ' #3b82f6 3px 8px 4px' }}>
              EDUCATION:
            </h1>
          </div>

          <div className='w-1/2 font-semibold mb-3 flex flex-col ssm:flex-col'>
          <div className='rounded-lg mb-4 text-white p-3 ssm:mb-5 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-95' style={{boxShadow:"#3b82f6 8px 9px 9px"}}>

              <h1>B.tech Computer Science</h1>
              <h2>Dr Ram Manohar Lohia Awadh University</h2>
              <p>Year:2020-2024</p>
              <p>CGPA: 8.4</p>
            </div>
            <div className='rounded-lg mb-4 text-white p-3 ssm:mb-5 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-95' style={{boxShadow:"#3b82f6 8px 9px 9px"}}>
              <h1>Intermediate</h1>
              <h2>Pt. Deen Dayal Upadhaya Sanatan Dharma Vidyalaya, Kanpur</h2>
              <p>Year: 2019-2020</p>
              <p>Percentage: 90</p>
            </div>
            <div className='rounded-lg mb-4 text-white p-3 ssm:mb-5 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-95' style={{boxShadow:"#3b82f6 8px 9px 9px"}}>
              <h1>High School</h1>
              <h2>Fatima Convent School
              </h2>
              <p>Year:2017-2018</p>
              <p>Percentage: 88</p>
            </div>
          </div>
        </div>
      </section>

      <hr className=' flex justify-end w-1/2 mt-10 border-b border-blue-500' />

      <section id='SkillsSection' className=' h-full mb-10 overflow-x-hidden text-white'>
        <div className='flex flex-col mb-6'>
          <div className='grid justify-items-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl m-3'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r p-3 to-blue-600 from-sky-200">My Skills</span>
          </div>
          <div className="flex flex-wrap  justify-evenly px-10 py-3">
            <div className="transform transition-transform duration-300 ease hover:scale-105 backdrop-filter backdrop-blur-md bg-black bg-opacity-80 border border-white border-opacity-20 rounded-lg mt-5 p-4 w-60" style={{ boxShadow: ' #3b82f6 8px 9px 9px' }}>
              <p className='text-3xl text-blue-600 font-bold'>Languages</p>
              <ul className='p-3 pb-4 l list-disc text-xl'>
                <li><p>C</p></li>
                <li><p>C++</p></li>
                <li><p>Java</p></li>
                <li><p>HTML</p></li>
                <li><p>CSS</p></li>
                <li><p>JavaScript</p></li>
                <li><p>SQL</p></li>
              </ul>
            </div>
            <div className="transform transition-transform duration-300 ease hover:scale-105 backdrop-filter backdrop-blur-md bg-black bg-opacity-80 border border-white border-opacity-20 rounded-lg mt-5 p-4 w-60" style={{ boxShadow: ' #3b82f6 8px 9px 9px' }}>
              <p className='text-3xl text-blue-600 font-bold'>Tools and Technologies</p>
              <ul className='p-3 pb-4 l list-disc text-xl'>
              <li><p>Gith</p></li>
                <li><p>Github</p></li>
                <li><p>MongoDB</p></li>
                <li><p>NetBeans</p></li>
              </ul>
            </div>
            <div className="transform transition-transform duration-300 ease hover:scale-105 backdrop-filter backdrop-blur-md bg-black bg-opacity-80 border border-white border-opacity-20 rounded-lg mt-5 p-4 w-60" style={{ boxShadow: '#3b82f6 8px 9px 9px' }}>
              <p className='text-3xl text-blue-600 font-bold'>Framework</p>
              <ul className='p-3 pb-4 l list-disc text-xl'>
                <li><img /><p>React JS</p></li>
                <li><img /><p>Tailwind CSS</p></li>
                <li><img /><p>Redux</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
