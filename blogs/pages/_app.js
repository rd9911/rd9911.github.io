import Header from '../components/Header'
import Head from 'next/head'
import '../styles/globals.scss'
import Link from 'next/link'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
     <meta name="viewport" content="width=device-width, initial-scale=2.0"/> 
      <Head>
          <title>rd9911</title>
      </Head>
      <Header />
      <main>
        <div className='container'>
          <Navbar />
        </div>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
