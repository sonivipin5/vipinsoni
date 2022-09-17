import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();

  const filepath = router.asPath;

  const ul = (e) => {
    let ul = document.querySelectorAll(".ul a");
    ul.forEach((e, i) => {
      let a = e.href.split("http://localhost:3000")[1];
      if (a == filepath) {
        e.classList.add("text-[cyan]");
      } else {
        e.classList.remove("text-[cyan]");
      }
    });
  };

  useEffect(() => {
    ul();
  }, [ul]);


  const hamToggel = (e) => {
    let ham = document.querySelector('.ham')
    let hamburger = document.querySelector('.cover')
    hamburger.classList.toggle('hamburger-active');
    ham.classList.toggle('ham-active')
    
  }



  return (
    <>
      <div className="hidden xl:block w-[15%]  h-screen bg-[#181818]  ">
        <header className="bg-[#181818] ">
          <nav className="w-full">
            <div className="text-white flex w-full flex-col h-52 justify-center items-center ">
              <Link href={"/"}>
                <h1 className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  transition-all text-sha logo text-8xl font-extrabold">
                  V
                </h1>
              </Link>

              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Web Developer
              </p>
            </div>
            <ul onClick={ul} className="ul  text-[#706e6e]  text-xl flex flex-col  text-center">
              <Link href="/skills">
                <a className="border-b hover:text-[cyan] border-t w-full py-3 inline-block">
                  Skills
                </a>
              </Link>
              <Link href="/projects">
                <a className="border-b hover:text-[cyan] w-full py-3 inline-block">
                  Projects
                </a>
              </Link>
              <Link href="about">
                <a className="border-b hover:text-[cyan] w-full py-3 inline-block">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="border-b hover:text-[cyan] w-full py-3 inline-block">
                  Contact
                </a>
              </Link>
            </ul>

          </nav>
        </header>
      </div>
      <div  className="cover absolute bg-[#181818] invisible xl:hidden z-[11]">

      <div className="min-w-[320px] w-full h-[1000px] fixed bg-[#181818] ">
        <header className="bg-[#181818] ">
          <nav className="w-full ">
            <div className="text-white flex  flex-col  justify-center items-center ">
              <Link href={"/"}>
                <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 cursor-pointer   text-sha logo text-8xl font-extrabold mt-5">
                  V
                </h1>
              </Link>

              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-5 text-2xl">
                Web Developer
              </p>
            </div>
            <ul onClick={ul} className="ul  text-[#706e6e]  text-xl flex flex-col  text-center">
              <Link href="/skills">
                <a className="border-b hover:text-[cyan] border-t w-full py-3 inline-block">
                  Skills
                </a>
              </Link>
              <Link href="/projects">
                <a className="border-b hover:text-[cyan] w-full py-3 inline-block">
                  Projects
                </a>
              </Link>
              <Link href="about">
                <a className="border-b hover:text-[cyan] w-full py-3 inline-block">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="border-b hover:text-[cyan] w-full py-3 inline-block">
                  Contact
                </a>
              </Link>
            </ul>

          </nav>
        </header>
      </div>

      </div>
      <div onClick={hamToggel} className="xl:hidden z-[13] w-10 h-10 top-6 left-[10px] absolute">
      </div>
      <span  className="ham z-[12] xl:hidden"></span>
    </>
  );
};

export default Navbar;
