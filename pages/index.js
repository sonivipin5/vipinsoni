import Image from "next/image";
import Link from "next/link";


export default function Home() {

 
  return (
    <div className="w-full h-screen flex bg-[#1D1D1D] "> 

        <div className="home transition-all w-full h-[inherit] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-bl mt-16  from-[#05acff] to-[#08dcf8] text-7xl p-10 font-extrabold"><p>H!, <br /> 
          I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Vipin Soni</span>,<br /> 
          Web Developer</p>
          </div>
          <p className="text-gray-400 text-xl mx-14">{`Front End  Developer / MERN Stack Developer `}</p>
          <Link href={"/"} >
              <button className="z-10 relative mx-16 transition-all px-14 py-4 tracking-widest font font-bold text-lg my-10 border border-cyan-400 text-cyan-400 contact bg-transparent"><span></span> Contact me! </button>
            </Link>
        </div>
        <div className="">
          <Image src={"/vipin1.png"} width={1000} height={1000} />
        </div>
    </div>
  )
}

