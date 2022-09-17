import Image from "next/image";
import Link from "next/link";


export default function Home() {

 
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row  items-center bg-[#1D1D1D] "> 

        <div className="home order-2 w-full transition-all flex  items-center ">
          <div className=" w-full sm:ml-16 lg:ml-0 xl:ml-10 ">
          <div className="py-2 mx-5  bg-clip-text text-transparent bg-gradient-to-bl   from-[#05acff] to-[#08dcf8]  text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl font-extrabold "><p>H!, <br /> 
          I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Vipin Soni</span>,<br /> 
          Web Developer</p>
          </div>
          <p className="text-gray-400 text-xl p-5 ">{`Front End  Developer / MERN Stack Developer `}</p>
          <Link href={"/"} >
              <button className="mx-5 text-center z-10 relative transition-all px-14 py-4 tracking-widest font font-bold text-lg my-10 border border-cyan-400 text-cyan-400 contact bg-transparent"><span></span> Contact me! </button>
            </Link>
          </div>
        </div>
        <div className="m-5 max-w-lg lg:ml-10 flex xl:ml-20 xl:-mt-5 ">
          <Image src={"/vipin1.png"} width={1000} height={1000} />
        </div>
    </div>
  )
}

