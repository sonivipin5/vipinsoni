import Link from "next/link";
import { useRouter} from "next/router";
import React, { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const filepath = router.asPath;

  const hamToggel = (e) => {
    let ham = document.querySelector('.ham')
    let cover1 = document.querySelector('.cover1')
    let cover2 = document.querySelector('.cover2')
    let cover3 = document.querySelector('.cover3')
    let cover4 = document.querySelector('.cover4')
    cover1.classList.toggle('active1');
    cover1.classList.toggle('-translate-x-full');
    cover2.classList.toggle('active2');
    cover2.classList.toggle('-translate-x-full');
    cover3.classList.toggle('active3');
    cover3.classList.toggle('-translate-x-full');
    cover4.classList.toggle('active4');
    cover4.classList.toggle('-translate-x-full');
    ham.classList.toggle('ham-active')
    
  }



  return (
    <div className=" ">
      
      <div className="cover1 w-[40%] z-[10] top-0 left-0 transition-[all_easy-in-out_500ms] -translate-x-full  fixed "></div>

      <div className="cover2 w-[40%] z-[9] top-0 left-0 transition-[all_easy-in-out_400ms] -translate-x-full fixed "></div>
      <div className="cover3 w-[40%] z-[8] top-0 left-0 transition-[all_easy-in-out_300ms] -translate-x-full fixed "></div>

      <div className="cover4 w-[40%] z-[11] top-0 left-0 transition-[all_easy-in-out_200ms] -translate-x-full   fixed ">
        <header className="bg-[#181818] ">
          <nav className="w-full ">
            <div className="text-white flex  flex-col  justify-center items-center ">
              <Link href={"/"}>
                <h1 onClick={hamToggel}className={` bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 cursor-pointer   text-sha logo text-8xl font-extrabold mt-5 `}>
                  V
                </h1>
              </Link>

              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-5 text-2xl">
                Web Developer
              </p>
            </div>
            <ul className="ul  text-[#706e6e]  text-xl flex flex-col  text-center">
              <Link href="/skills">
                <a onClick={hamToggel}className={`${router.pathname==='/skills' && 'text-[cyan]'} hover:text-[cyan] w-full py-3 inline-block`}>
                  Skills
                </a>
              </Link>
              <Link href="/projects">
                <a onClick={hamToggel}className={`${router.pathname==='/projects' && 'text-[cyan]'} hover:text-[cyan] w-full py-3 inline-block`}>
                  Projects
                </a>
              </Link>
              <Link href="about">
                <a onClick={hamToggel}className={`${router.pathname==='/about' && 'text-[cyan]'} hover:text-[cyan] w-full py-3 inline-block`}>
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a onClick={hamToggel}className={`${router.pathname==='/contact' && 'text-[cyan]'} hover:text-[cyan] w-full py-3 inline-block`}>
                  Contact
                </a>
              </Link>
              <Link href="/">
                <a onClick={hamToggel}className=" hover:text-[cyan] w-full py-3 inline-block h-screen">
                  
                </a>
              </Link>
            </ul>

          </nav>
        </header>
      </div>

      <div onClick={hamToggel} className="ham ">
      </div>
        <span onClick={hamToggel} className="hamBack"></span>
    </div>
  );
};

export default Navbar;
