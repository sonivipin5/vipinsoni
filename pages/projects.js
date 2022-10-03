
import Image from 'next/image'
import favico from '../public/favicon.ico'
import React, { useRef } from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import style from '../styles/Projects.module.css'

const Projects = (props) => {
  const ref = useRef();
  const mainDiv = useRef();
  const modal = () => {
    
    if (ref.current.classList.contains('modalBox')) {
        ref.current.classList.toggle('hidden')
    }
    let body = document.querySelector('body')
    body.style.overflow = "hidden";
};
const closeModal = () => {
    if (ref.current.classList.contains('modalBox')) {
        ref.current.classList.toggle('hidden')
    }
    let body = document.querySelector('body')
    body.style.overflow = "visible";
}
  return (
    <div ref={mainDiv} className="container m-auto relative ">
    <div className=' w-full min-h-screen overflow-hidden'>
      {/* Heading section */}
      <div className="m-auto">
      <h1 className='text-center text-7xl w-full text-gradient py-5 font-bold' data-aos='fade-down'>My Projects</h1>
      </div>

      {/* Projects section */}
      <div className='w-full text-white lg:count-3 text-center overflow-hidden m-auto  mt-5'>

          {/* MERN Projects */}
          {/* <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h2 className='text-3xl font-bold link'>MERN Projects</h2>

            <div className='card w-fit h-fit m-auto my-7'>
              <Image src={favico} width={200} height={200} alt="projects" />
            </div>
            
          </div> */}
          {/* NextJs + Wordpress */}
          {/* <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h3 className='text-3xl font-bold link'>NextJs + Wordpress</h3>

            <div className='card w-fit h-fit m-auto my-7'>
              <Image src={favico} width={200} height={200} alt="projects" />
            </div>

          </div> */}
          {/* NextJs + Strapi */}
          <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h4 className='text-3xl font-bold link'>NextJs + Strapi + PostgreSQL</h4>
            <div className='relative card w-fit h-fit m-auto my-7 p-5'>
              <Image onClick={modal} src={'/myblog.jpg'} width={500} height={300} alt="projects" />
            </div>

          </div>

          {/* <div className={`${style.flipcard} m-auto mt-10`} data-aos='zoom-in'>
            <div className={`${style.flipinner} relative w-full h-full text-center transition-all `}>
              <div className={`${style.front} grayscale-[100%]`}>
                 <Image onClick={modal} src={'/myblog.jpg'} width={1000} height={1000} />
              </div>
              <div className={`${style.back} flex items-center justify-center text-2xl text-gradient font-bold grayscale-0 `}>
              <h2>I develop this project with <br /><br />  NextJs + StrapiJs <br /> and  <br />  Postgresql <br />
              <span className='text-purple-500'><a href="https://my-strapi-blog.netlify.app/" target="_blank" rel="noreferrer">Visit</a></span>
              </h2>
              
              </div>
            </div>
          </div> */}
      </div>


      {/* Other project section */}
      {/* <div className=' w-full p-5 ' data-aos='fade-up'>
        <h5 className='text-3xl font-bold link text-center'> Other Projects</h5>
        
          <div className="flex justify-center flex-wrap">
          <div className='card mx-5 my-7' data-aos='zoom-in'>
                <Image src={favico} width={200} height={200} alt="projects" />
          </div>
          <div className='card mx-5 my-7' data-aos='zoom-in'>
                <Image src={favico} width={200} height={200} alt="projects" />
          </div>
          <div className='card mx-5 my-7' data-aos='zoom-in'>
                <Image src={favico} width={200} height={200} alt="projects" />
          </div>
          <div className='card mx-5 my-7' data-aos='zoom-in'>
                <Image src={favico} width={200} height={200} alt="projects" />
          </div>
          
          </div>
      </div> */}

    </div>
    <div ref={ref} className="modalBox transition-all hidden z-[20] fixed top-0 left-0 bg-[#1D1D1D]  min-w-[475px] w-full h-full">
        <div className="transition-all w-full h-full flex justify-center items-center ">
          <div className=" transition-all bg-white w-[90%] h-[90%] m-10 flex justify-center items-center">
            <span
              onClick={closeModal}
              className="fixed top-5 right-5 text-3xl cursor-pointer text-white"
            >
              <AiOutlineCloseSquare/>
            </span>
            <iframe className="w-full h-full transition-all" src='https://my-strapi-blog.netlify.app/' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

  
  