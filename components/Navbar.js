import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Navbar = () => {

  const router = useRouter()
  
  const filepath = router.asPath
  
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
 ul()
}, [ul]);


 
  
  return (
    <div className='w-[15%] h-screen bg-[#181818]  '>
       <header className='bg-[#181818] '>
          <nav  className=''>
                  <div className="text-white flex flex-col h-52 justify-center items-center ">
                   
                      <Link href={'/'}><h1 className='hover:[transform:rotateY(180deg)] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 [text-shadow: 1px 33px 10px red] transition-all text-sha logo text-8xl font-extrabold'>V</h1></Link>
                
                    <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Web Developer</p>
                  </div>
            <ul  onClick={ul} className='ul  text-[#706e6e]  text-xl flex flex-col  text-center'>
                  <Link href="/skills"><a className='border-b hover:text-[cyan] border-t w-full py-3 inline-block'>Skills</a></Link>
                  <Link href="/projects"><a className='border-b hover:text-[cyan] w-full py-3 inline-block'>Projects</a></Link>
                  <Link href="about"><a className='border-b hover:text-[cyan] w-full py-3 inline-block'>About</a></Link>
                  <Link href="/contact"><a className='border-b hover:text-[cyan] w-full py-3 inline-block'>Contact</a></Link>
            </ul>         
          </nav>
       </header>
    </div>
  )
}

export default Navbar
