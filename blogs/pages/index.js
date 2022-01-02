import Head from 'next/head'
import Image from 'next/image'
import homer_image from '../public/main_content/homer.jpg'
import github_image from '../public/main_content/github.png'
import twitter_image from '../public/main_content/twitter.png'
import linkedin_image from '../public/main_content/linkedin.png'


export default function Home() {
  return (
      <div>
        <Head>
          <title>rd9911</title>
        </Head>
        <div className='intro'>
          <div className='intro-image'>
            <Image src={homer_image} alt='welcoming image' />
          </div>
          <div className='intro-text'>
            <h1>I am Avaz, a full-stack developer in Helsinki, Finland who is specialized React.js and Node.js.</h1>
            <div className='social-links'>
              <a className='link' type='button' href='https://github.com/rd9911'><Image src={github_image} alt='github logo' width={58} height={30} /></a>
              <a className='link' type='button' href='https://www.linkedin.com/in/avazjonyusufjonov1/'><Image src={linkedin_image} alt='github logo' width={30} height={30} /></a>
              <a className='link' type='button' href='https://twitter.com/brodsky9911'><Image src={twitter_image} alt='github logo' width={35} height={35} /></a>
            </div>
          </div>
        </div>
      </div>
  )
}
