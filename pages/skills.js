import React, { useEffect, useState, useCallback } from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import Link from 'next/link'

const Skills = () => {
  
  return (
    <div className="container m-auto">
    <div className=' lg:count-2 w-full min-h-screen m-auto overflow-hidden'>

      {/* Skills & Experience */}
      <div  className="skill lg:w-[50%] p-5 m-auto"  data-aos="fade-right">
        <h1 className='text-7xl p-3 font-bold text-gradient w-full '>Skills & <br /> Experience</h1><br />

        <div className="text-white text-xl text-justify">

        <p>
        My web development journey began as a hobby 1.5 years ago, and I completed HTML, CSS, Scss, and JavaScript in the previous year. After that, I started a new learning journey with ReactJs, NextJs, MongoDB, Express, NodeJs, and Strapi(headless CMS) that I have completed in the last 6 months.
        </p><br />

        <p>
        I create successful responsive websites that are fast, easy to use, and built with best practices. The main areas of my expertise are front-end development; HTML, CSS, JS, and NextJS; building small and medium web apps layouts.
       </p><br />
        <p>
        I also have full-stack developer experience with popular open-source CMS like WordPress and Strapi. 
        </p><br />
        <p>
        Visit my <Link href="#"><a className="text-[#05acff] text-gradient">Linkedin</a></Link> profile for more details or just <Link href={'/contact'} ><a className="text-[#05acff] text-gradient">contact</a></Link> me.
        </p>
        </div>
      </div>

      {/* Skill Bar Section */}
      <div className="   lg:w-[50%] p-5 m-auto" data-aos='fade-left'>
        <p className='text-white text-2xl font-bold py-2'>Front-end</p>
        <ProgressBar bgColor='#08dcf8' baseBgColor='#2b2b2b' width={`lg:w-[40vw]`} height='3px' isLabelVisible={false} completed={90} /><br />

        <p className='text-white text-2xl font-bold py-2'>NextJs</p>
        <ProgressBar bgColor='#05acff' baseBgColor='#2b2b2b' width={`${"lg:w-[40vw]?"}`} height='3px' isLabelVisible={false} completed={75} /><br />

        <p className='text-white text-2xl font-bold py-2'>ReactJs</p>
        <ProgressBar bgColor='#800080' baseBgColor='#2b2b2b' width={`${"lg:w-[40vw]?"}`} height='3px' isLabelVisible={false} completed={70} /><br />

        <p className='text-white text-2xl font-bold py-2'>Back-end</p>
        <ProgressBar bgColor='#FF2253' baseBgColor='#2b2b2b' width={`${"lg:w-[40vw]?"}`} height='3px' isLabelVisible={false} completed={60} /><br />

        <div className='col-span-2 inline-flex gap-5 text-white  w-full '>
          <div className="w-2/4 bg-[#2b2b2b]">
            <h3 className='text-2xl font-extrabold text-center pt-5'>Front-end development</h3>
            <p className='btc font-bold tracking-tight leading-6 text-lg p-5'>I am using in front-end development - Html, Css, Scss, JavaScript, ReactJs and NextJs.</p>
          </div>
          <div className="w-2/4 bg-[#2b2b2b]">
            <h3 className='text-2xl font-extrabold text-center pt-5'>Back-end development</h3>
            <p className='btc font-bold tracking-tight leading-6 text-lg p-5'>I am using in Back-end development - MongoDb, Express, NodeJs and open source CMS WordPress and Strapi .</p>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Skills

  