import Image from 'next/image'
import github_image from '../public/main_content/github.png'
import twitter_image from '../public/main_content/twitter.png'
import linkedin_image from '../public/main_content/linkedin.png'
import telegram_image from '../public/main_content/telegram.png'
import mail_image from '../public/main_content/mail.png'



export default function Home() {
  return (
      <div className='container'>
          <div className='intro'>
            <div className='intro-text'>
              <h1>I am Avaz, a full-stack developer, and financial analyst based on Helsinki. Primary technologies that I work with are React.js, Node.js, Numpy, and Pandas. <br/> You can contact me through:</h1>
              <div>
                <div className='social-links'>
                  <a className='link' type='button' href='https://github.com/rd9911' target='_blank' rel='noreferrer' ><Image src={github_image} alt='github-logo' width={58} height={30} /></a>
                  <a className='link' type='button' href='https://www.linkedin.com/in/avazjonyusufjonov1/' target='_blank' rel='noreferrer' ><Image src={linkedin_image} alt='linkedin-logo' width={30} height={30} /></a>
                  <a className='link' type='button' href='https://twitter.com/brodsky9911' target='_blank' rel='noreferrer' ><Image src={twitter_image} alt='twitter-logo' width={35} height={35} /></a>
                  <a className='link' type='button' href='https://t.me/rd9911' target='_blank' rel='noreferrer' ><Image src={telegram_image} alt='telegram-logo' width={50} height={28} /></a>
                  <a className='link' type='button' href='mailto:avazjonyusufjonov@mail.ru' target='_blank' rel='noreferrer' ><Image src={mail_image} alt='mail-logo' width={40} height={30} /></a>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}