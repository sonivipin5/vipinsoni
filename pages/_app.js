import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <div className='flex min-w-[320px]'>
          <Head>
            <title>Vipin Soni</title>
            <meta name="description" content="Hi, i am Vipin Soni full stack Developer. we using this Html, Css, Javascript, Boostrap, Tailwindcss, Rect Js, Next Js for Frontend Development and for backend development we using Express, Mongooes, MongoDB, Postgres SQL and Strapi (Strapi is a Handless CMS). we also work with git." />
          </Head>
          <Navbar/>
          <Component {...pageProps} />
        </div>
}

export default MyApp
