import Head from 'next/head'
import Image from 'next/image'
import homer_image from '../public/main_content/homer.jpg'


export default function Home() {
  return (
      <div>
        <Head>
          <title>rd9911</title>
        </Head>
        <div className='main-image'>
          <Image src={homer_image} alt='welcoming image' />
        </div>
      </div>
  )
}
