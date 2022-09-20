
import Image from 'next/image'
import favico from '../public/favicon.ico'
import React from 'react'

const Projects = () => {
  return (
    <div className="container m-auto ">
    <div className=' w-full min-h-screen overflow-hidden'>
      {/* Heading section */}
      <div className="m-auto">
      <h1 className='text-center text-7xl w-full text-gradient py-5 font-bold' data-aos='fade-down'>My Projects</h1>
      </div>

      {/* Projects section */}
      <div className='w-full text-white lg:count-3 text-center overflow-hidden m-auto  mt-5'>

          {/* MERN Projects */}
          <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h2 className='text-3xl font-bold link'>MERN Projects</h2>

            <div className='card w-fit h-fit m-auto my-7'>
              <Image src={favico} width={200} height={200} alt="projects" />
            </div>
            
          </div>

          {/* NextJs + Wordpress */}
          <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h3 className='text-3xl font-bold link'>NextJs + Wordpress</h3>

            <div className='card w-fit h-fit m-auto my-7'>
              <Image src={favico} width={200} height={200} alt="projects" />
            </div>

          </div>
          {/* NextJs + Strapi */}
          <div className=' w-[95%] m-auto lg:mx-10' data-aos='zoom-in'>
            <h4 className='text-3xl font-bold link'>NextJs + Strapi</h4>

            <div className='card w-fit h-fit m-auto my-7'>
              <Image src={favico} width={200} height={200} alt="projects" />
            </div>

          </div>
      </div>

      {/* Other project section */}
      <div className=' w-full p-5 ' data-aos='fade-up'>
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
      </div>

    </div>
    </div>
  )
}

export default Projects

  
  