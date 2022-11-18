
import Image from 'next/image'
import favico from '../public/favicon.ico'
import React, { useRef } from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import style from '../styles/Projects.module.css'
import Link from 'next/link'

const Projects = (props) => {
  const ref = useRef();
  const mainDiv = useRef();
//   const modal = () => {
    
//     if (ref.current.classList.contains('modalBox')) {
//         ref.current.classList.toggle('hidden')
//     }
//     let body = document.querySelector('body')
//     body.style.overflow = "hidden";
// };
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

       
          <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h4 className='text-3xl font-bold link h-20'>NextJs + Strapi + PostgreSQL</h4>
            <div className='relative card w-fit h-fit m-auto my-7 p-5'>
              <Link href={'https://mybblog.ga'} ><a target='_blank' referrerPolicy='no-referrer'><Image src={'/myblog.jpg'} width={500} height={300} alt="projects" /></a></Link>
            </div>

          </div>
          {/* MERN project */}
          <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h4 className='text-3xl font-bold link h-20'>MERN Application</h4>
            <div className='relative card w-fit h-fit m-auto my-7 p-5'>
              <Link href={'https://mynotebook.ga'} ><a target='_blank' referrerPolicy='no-referrer'><Image src={'/mynotebook.jpg'} width={500} height={300} alt="projects" /></a></Link>
            </div>

          </div>

      
      </div>
      <div className='w-full text-white lg:count-3 text-center overflow-hidden m-auto  mt-5'>

       
          
          {/* ReactJs project */}
          <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h4 className='text-3xl font-bold link h-20'>ReactJs Application</h4>
            <div className='relative card w-fit h-fit m-auto my-7 p-5'>
              <Link href={'https://textmodifier.ga'} ><a target='_blank' referrerPolicy='no-referrer'><Image src={'/textmodifier.jpg'} width={500} height={300} alt="projects" /></a></Link>
            </div>

          </div>
          {/* ReactJs project */}
          <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h4 className='text-3xl font-bold link h-20'>ReactJs Application</h4>
            <div className='relative card w-fit h-fit m-auto my-7 p-5'>
              <Link href={'https://bloggerone.ga'} ><a target='_blank' referrerPolicy='no-referrer'><Image src={'/bloggerone.jpg'} width={500} height={300} alt="projects" /></a></Link>
            </div>

          </div>

      
      </div>

    </div>
   
    </div>
  )
}

export default Projects

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
  