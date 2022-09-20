import React from "react";
import Link from "next/link";
import {  RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiMailLine, RiMapPinFill, RiPhoneFill, RiTwitterLine } from "react-icons/ri";
import FiInstagram from 'react-icons/fi'

const Contact = () => {
  return (
    <div className="container m-auto">
      <div className=" w-full min-h-screen  ">
        <div className=" text-center p-10" data-aos='fade-down'>
          <h1 className=" text-gradient text-6xl font-semibold ">
            Contact Us
          </h1>
          <p className="text-white my-2">Any one want to contact me. Just write us a message!</p>
        </div>

        {/* Contact card */}
       <div className="flex justify-center" data-aos='fade-up'>
          <div className="card w-3/4 h-fit rounded-xl lg:count-2">

            <div className="contactInfo lg:w-[40%] p-5 text-white">
              <div className="bg-[#1f0a4e] h-full flex flex-col justify-between p-5 rounded-xl blue-gradient">
                <h2 className="text-2xl text-white font-semibold">Contact Information</h2>

                <div className="my-10 font-semibold ">
                <div><RiPhoneFill className="inline-block text-cyan-500 bg-white rounded-full p-1 text-2xl shadow-2xl"/><p className="inline-block px-3">9669507012</p></div><br />
                <div><RiMailLine className="inline-block text-cyan-500  bg-white rounded-full p-1 text-2xl" /><p className="inline-block px-3"> sonivipin@gmail.com</p></div><br />
                <div className="inline-flex"><RiMapPinFill className="inline-block text-cyan-500  bg-white rounded-full p-1 text-2xl" /><p className="inline w-full px-3"> Home, W83J+3QG, NH 44, Dabra </p></div><br />
                </div>
                <div className=" text-center  space-x-3">
                <RiFacebookLine className="text-3xl transition-all inline-block cursor-pointer hover:text-blue-600 hover:bg-white hover:rounded-full p-[2px]"/>
                <RiTwitterLine className="text-3xl transition-all inline-block cursor-pointer hover:text-[#1DA1F2] hover:bg-white hover:rounded-full p-[2px]"/>
                <RiInstagramLine className="text-3xl transition-all inline-block cursor-pointer hover:text-[#8a3ab9] hover:bg-white hover:rounded-full p-[2px]"/>
                <RiLinkedinLine className="text-3xl transition-all inline-block cursor-pointer hover:text-[#0A66C2] hover:bg-white hover:rounded-full p-[2px]"/>
                </div>
              </div>
            </div>

            {/* contactForm */}
            <div className="contactForm lg:w-[60%] p-5">

              <form action="#" className="contactUs w-full">

                <div className='lg:count-2 gap-4'>
                  <input type="text" name="name" id="name" placeholder="Name" className=".name" />
                  <label htmlFor="name"><span></span></label>

                  <input type="email" name="email" id="name" placeholder="Email" />
                </div>

                <input type="text" name="subject" id="name" placeholder="Subject" />

                <textarea type="text"  rows="5" name="message" id="name" placeholder="Message" />

                <button className='cyanSlideEffect w-[40%]'> Send message!</button>

              </form>

            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Contact;
