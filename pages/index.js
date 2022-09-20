import Link from "next/link";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 400,
      // easing: 'ease-in-sine',
      delay: 100,
    })
   }, [])
   
  
  return (
    <div className="container m-auto">
    <div className=" w-full min-h-screen flex flex-col lg:flex-row  items-center bg-[#1D1D1D] "> 

        <div className="home m-auto order-2  transition-all flex items-center ">
          <div className="  ">
          <div data-aos="zoom-in" className="min-w-[350px] text-gradient text-6xl sm:text-7xl md:text-8xl font-extrabold py-[10px]">
            <h1>H!, <br /> 
          I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Vipin Soni</span>,<br /> 
          Web Developer</h1>
          
        
          </div>
          <p className=" text-gray-400 text-xl mt-3 ">Front End  Developer / MERN Stack Developer </p>
          <Link href={"/"} >
              <button className="cyanSlideEffect"> Contact me! </button>
            </Link>
          </div>
        </div>
        
    </div>
    <Skills/>
    <Projects/>
    <About/>
   <Contact/>
    

    </div>
  )
}

