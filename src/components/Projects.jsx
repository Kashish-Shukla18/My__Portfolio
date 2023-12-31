import React from 'react';
import LMS from '../assets/lms.png';
import YT from '../assets/Yt.png';
import FO from '../assets/FO.png';
import Chat from '../assets/chat.png';

const Projects = () => {
  return (
    <div id="ProjectsSection">
      <hr className='w-1/2 mt-10 border-b border-blue-500' />
      <div className='bg-black mt-10 shadow-md p-6 overflow-hidden'>
        <div className='grid justify-items-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl m-3'>
          <span className="text-transparent bg-clip-text bg-gradient-to-r p-3 to-blue-600 from-sky-200">Projects </span><br />
          <p className="text-transparent bg-clip-text bg-gradient-to-r p-3 to-blue-600 from-sky-200">View Some of my latest projects!</p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 p-5 border-gray-100">
            {/* Project 1 */}
            <div className="max-w-md mx-auto bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-md overflow-hidden hover:animate-pulse min-h-96">
              <div className="flex-col md:flex items-center h-full">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-lg text-indigo-500 font-extrabold">Library Management System</div>
                  <a href="#" className="text-blue-500 text-lg ">A complete Library Management System built using Java with a GUI based Frontend with a backend database connection for storage.</a>
                  <p className="mt-2 text-slate-500">
                    – User authentication and access control.<br />
                    – Real-time book availability updates.<br />
                    – Technology Used: Java, JFrames, SQL
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={LMS} alt="Project 1" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="max-w-md mx-auto bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-md overflow-hidden hover:animate-pulse min-h-96">
              <div className="flex-col md:flex items-center h-full">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-lg text-indigo-500 font-extrabold">Youtube Clone</div>
                  <a href="#" className="text-blue-500 text-lg ">Developed a React-based YouTube clone with API integration.</a>
                  <p className="mt-2 text-slate-500">
                    – Smooth video streaming through API integration.<br />
                    – Enhances performance by caching frequently accessed data and video content.<br />
                    – Technology Used: React, API
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={YT} alt="Project 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="max-w-md mx-auto bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-md overflow-hidden hover:animate-pulse min-h-96">
              <div className="flex-col md:flex items-center h-full">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-lg text-indigo-500 font-extrabold">Food ordering App</div>
                  <a href="#" className="text-blue-500 text-lg ">A react-based web application allowing users to see real-time restaurant data regarding their Locations and add it to their cart</a>
                  <p className="mt-2 text-slate-500">- A react-based web application allowing users to see real-time restaurant data regarding their Locations and add
                    it to their cart.<br />
                    - Allows users to view detailed information about menu items, including descriptions, prices, and images.<br />
                    - Technology Used: Reactjs, HTML, CSS, API, Tailwind
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={FO} alt="Project 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="max-w-md mx-auto bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-md overflow-hidden hover:animate-pulse min-h-96">
              <div className="flex-col md:flex items-center h-full">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-lg text-indigo-500 font-extrabold">Real Time Chat Application</div>
                  <a href="#" className="text-blue-500 text-lg">A React-driven web platform empowers users for instant communication. Seamlessly integrated with HTML, CSS, API, and Tailwind, it ensures real-time message exchange.</a>
                  <p className="mt-2 text-slate-500">
                    - API integration facilitates prompt data exchange, ensuring users receive and send messages without delay.<br />
                    - Technology Used: Reactjs, HTML, CSS, API, Tailwind
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={Chat} alt="Project 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
