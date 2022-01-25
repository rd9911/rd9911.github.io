import Image from 'next/image'
import homer_image from '../public/main_content/homer.jpg'
import github_image from '../public/main_content/github.png'
import twitter_image from '../public/main_content/twitter.png'
import linkedin_image from '../public/main_content/linkedin.png'
import telegram_image from '../public/main_content/telegram.png'
import mail_image from '../public/main_content/mail.png'



export default function Home() {
  return (
      <div>
        <div className='intro'>
          <div className='intro-image'>
            <Image src={homer_image} alt='welcoming image' />
          </div>
          <div className='intro-text'>
            <h1>I am Avaz, a full-stack developer in Helsinki, Finland who is specialized React.js and Node.js.</h1>
            <div>
              <div className='contact-info'>
                <h1>You can contact me through:</h1>
              </div>
              <div className='social-links'>
                <a className='link' type='button' href='https://github.com/rd9911'><Image src={github_image} alt='github-logo' width={58} height={30} /></a>
                <a className='link' type='button' href='https://www.linkedin.com/in/avazjonyusufjonov1/'><Image src={linkedin_image} alt='linkedin-logo' width={30} height={30} /></a>
                <a className='link' type='button' href='https://twitter.com/brodsky9911'><Image src={twitter_image} alt='twitter-logo' width={35} height={35} /></a>
                <a className='link' type='button' href='https://t.me/rd9911'><Image src={telegram_image} alt='telegram-logo' width={50} height={28} /></a>
                <a className='link' type='button' href='mailto:avazjonyusufjonov@mail.ru'><Image src={mail_image} alt='mail-logo' width={40} height={30} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}