import Header from '../components/Header'
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container'>
        <nav className='nav-bar'>
          <Link className='nav-btn' href='/' passHref>Home</Link>
          <Link className='nav-btn' href='/blogs' passHref>Essays</Link>
          <Link className='nav-btn' href='/projects' passHref>Projects</Link>
          <Link className='nav-btn' href='/bio' passHref>About me</Link>
          <Link className='nav-btn' href='/contact' passHref>Contact</Link>
          <div className='dot'></div>
        </nav>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
