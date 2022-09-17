import React from 'react'


const Contact = () => {
  return (
    <div className=" w-screen h-screen flex  items-center "> 
  
    <div className="home xl:ml-56 transition-all w-screen ">
      <p className="text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl  ml-3  font-extrabold text-gradient">
        Contact Us
        </p>

        <p className='text-white w-2/4  pt-5 ml-10 text-xl'>
          I'm fresher MERN stack developer field and i interested to get job. If you are finding a MERN stack web developer then you can use the form for contact me and you can do email of my this sonivipin5@gmail.com email address.
        </p>

      <form action="#" className="contactUs">

        <div>
        <input type="text" name="name" id="name" placeholder="Name" />

        <input type="email" name="email" id="name" placeholder="Email" />
        </div>

        <input type="text" name="subject" id="name" placeholder="Subject" />

        <textarea type="text"  rows="5" name="message" id="name" placeholder="Message" />

        <button className='cyanSlideEffect w-[40%]'> Send message!</button>

      </form>

    </div>
</div>
  )
}

export default Contact

  
  