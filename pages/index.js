import Image from "next/image";
import Link from "next/link";
import Contact from "./contact";




export default function Home() {

 
  return (
    <div className="home">
    <div className=" w-screen min-h-screen flex flex-col lg:flex-row  items-center bg-[#1D1D1D] "> 

        <div className="home m-auto ml-5 lg:ml-52  order-2 w-screen transition-all flex items-center ">
          <div className=" sm:ml-16 lg:ml-0 xl:ml-10 ">
          <div className="min-w-[350px] text-gradient  text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl font-extrabold py-[10px]">
            <p>H!, <br /> 
          I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Vipin Soni</span>,<br /> 
          Web Developer</p>
          </div>
          <p className=" text-gray-400 text-xl mt-3 ">Front End  Developer / MERN Stack Developer </p>
          <Link href={"/"} >
              <button className="cyanSlideEffect"> Contact me! </button>
            </Link>
          </div>
        </div>
        
    </div>

   <Contact/>
    

    </div>
  )
}

