import Header from '../components/Header'
import Head from 'next/head'
import '../styles/globals.scss'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>rd9911</title>
      </Head>
      <Header />
      <main>
        <div className='container'>
          <nav className='nav-bar'>
            <Link className='nav-btn' href='/' passHref>Home</Link>
            <Link className='nav-btn' href='/blogs' passHref>Essays</Link>
            <Link className='nav-btn' href='/projects' passHref>Projects</Link>
            <Link className='nav-btn' href='/bookshelf' passHref>Bookshelf</Link>
            <Link className='nav-btn' href='/bio' passHref>About me</Link>
            <div className='dot'></div>
          </nav>
        </div>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
