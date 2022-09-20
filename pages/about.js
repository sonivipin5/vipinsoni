import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import allLangImage from '../public/all-language-image.png'
import vipin from '../public/vipin1.png'

const About = () => {
  return (
    <div className="container m-auto">
    <div className='  m-auto aboutPage lg:count-2 w-full min-h-screen '>

    {/* About my self */}
    <div className=" mx-10 lg:w-[50%]" data-aos='fade-right'>

      <div className="m-auto text-center">
      <Image src={vipin} width={300}  height={300} alt="vipin Soni" className=' w-2/5' />
      </div>

      <h1 className='text-7xl p-5 font-bold text-gradient w-full text-center'>Me, Myself & I</h1><br />

      <div className="text-white text-xl text-justify">

      <p className='indent-16'>
      Hi, my name is Vipin Soni and I am fresher MERN stack developer. I have 1.5 year self experience because i create some 
      <Link href="/projects"><a className='link'> projects</a></Link> with MERN technology, NextJs + Strapi and NextJs + Wordpress. 
      </p><br />

      
      <p className=' text-center'>
      Visit my <Link href="#"><a className="text-[#05acff] text-gradient">Linkedin</a></Link> profile for more details or just <Link href={'/contact'} ><a className="text-[#05acff] text-gradient">contact</a></Link> me.
      </p>
      </div>
    </div>

    {/* Image section */}
    <div className="m-auto lg:mr-16 my-16 rounded-md w-[65%] lg:w-[50%] h-full bg-white "  data-aos='fade-left'>
      <Image src={allLangImage }/>
      {/* <Image src="/all-language-image.png" alt="skills" className='w-full ' /> */}
    </div>
    
  </div>
    </div>
  )
}

export default About
