import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import MyLottieComponent from './LottieElement';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t6xixin', 'template_o1922mm', form.current, 'U3ae-h1r8w7Qzs7C4')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contactUsSection">
    <hr className='w-1/2 mt-10 ml-auto border-b border-blue-500' />
    
    <section className='py-16'>
      <div className='max-w-6xl mx-auto p-4 md:p-16 xl:p-20'>
        <div className='lg:w-2/3 space-y-5 text-center mx-auto'>
          <div className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl m-3'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-200">Get in touch</span>
          </div>
          <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
          <p className='text-gray-400 dark:text-gray-300 text-base leading-6'> </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16'>
          <div>
          <MyLottieComponent/>
          </div>
          <div className='lg:col-span-1 mt-[83px]'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <label htmlFor="user_name" className='sr-only'>Name</label>
                  <input className='border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:bg-zinc-700/50 dark:bg-zinc-300/50 dark:bg-zinc-300/50' type="text" name="user_name" placeholder='Enter your Name here' />

                  <label htmlFor="user_email" className='sr-only'>Email</label>
                  <input className='border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:bg-zinc-700/50 dark:bg-zinc-300/50 dark:bg-zinc-300/50' type="text" name="user_email" placeholder='Enter your E-mail' />
                </div>

                <label className='sr-only'>Subject</label>
                <input className='border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:bg-zinc-700/50 dark:bg-zinc-300/50 dark:bg-zinc-300/50' type="text" name="message" placeholder='Enter the Subject' rows="3" />

                <div className='grid grid-cols-1 gap-6'>
                  <label htmlFor="message" className='sr-only'>Message</label>
                  <textarea className='resize-none border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:bg-zinc-700/50 dark:bg-zinc-300/50 dark:bg-zinc-300/50' name="message" placeholder='Enter your Message' rows="3" />
                </div>
                <button className='inline-block text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-4 w-1/3'>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactUs;
