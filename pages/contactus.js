import React from 'react'
import Link from 'next/link'


const Contact = () => {
  return (
    <div className="container m-auto">
    <div className=" w-full min-h-screen flex  items-center "> 
  
    <div className="home m-auto transition-all w-3/4 ">
      <h1 className="text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl  ml-3 inline font-extrabold text-gradient">
        Contact Us
        </h1>

        <p className='text-white w-2/4  pt-5 ml-10 text-xl'>
        I'm a fresher MERN stack developer and I am interested to get a job. If you are finding a MERN stack web developer then you can use the form for contacting me and you can email me, at this  <Link href=""><a className='link'>sonivipin5@gmail.com</a></Link> email address.
        </p>

      <form action="#" className="contactUs">

        <div className='lg:count-2 gap-4'>
        <input type="text" name="name" id="name" placeholder="Name" className='top-ltrb'/>

        <input type="email" name="email" id="name" placeholder="Email" />
        </div>

        <input type="text" name="subject" id="name" placeholder="Subject" />

        <textarea type="text"  rows="5" name="message" id="name" placeholder="Message" />

        <button className='cyanSlideEffect w-[40%]'> Send message!</button>

      </form>

    </div>
    </div>
    </div>
  )
}

export default Contact

  
  