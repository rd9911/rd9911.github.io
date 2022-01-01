import Head from 'next/head'
import Image from 'next/image'
import homer_image from '../public/main_content/homer.jpg'


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
          </div>
        </div>
      </div>
  )
}
