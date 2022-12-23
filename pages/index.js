/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Head from "next/head";


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
    <>
      <Head>
        <title>Home</title>
        <meta charset="UTF-8"></meta>
        <meta name="google-site-verification" content="MASSWORkfmy5SFNzZk-I_3Q-Km4HqpTB4A2ftWag--0" />
        <meta name="description" content="Hi, i am Vipin Soni full stack Developer. This is a home page. We using this Html, Css, Javascript, Boostrap, Tailwindcss, Rect Js, Next Js for Frontend Development and for backend development we using Express, Mongooes, MongoDB, Postgres SQL and Strapi (Strapi is a Handless CMS). we also work with git." />
        <meta name="keyword" content="Home, vipin soni, vipin soni mern stack developer" />
        <meta name="author" content="Vipin Soni"></meta>
      </Head>
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
              <Link href={"/contact"} >
                <button className="cyanSlideEffect"> Contact me! </button>
              </Link>
            </div>
          </div>

        </div>
        <Skills />
        <Projects />
        <About />
        <Contact />


      </div>

    </>
  )
}

