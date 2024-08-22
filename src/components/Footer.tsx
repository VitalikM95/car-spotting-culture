import Logo from '../assets/Logo.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'
import { Link } from 'react-scroll'

export const Footer = () => {
  return (
    <footer id='contacts' className='h-[400px]'>
      <div className='h-1 min-w-full bg-white'></div>
      <div className='flex w-full max-w-[1192px] mx-auto px-2 py-[87px] justify-between'>
        <img src={Logo} width={200} alt='logo' />
        <ul className='my-auto ml-4 w-[140px] flex flex-col font-semibold gap-5'>
          <Link
            className='cursor-pointer hover:underline'
            to='join'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Стати учасником
          </Link>
          <Link
            className='cursor-pointer hover:underline'
            to='guide'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Гайд
          </Link>
          <Link
            className='cursor-pointer hover:underline'
            to='contacts'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Контакти
          </Link>
          <Link
            className='cursor-pointer hover:underline'
            to='howItWorks'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Підтримка
          </Link>
        </ul>
        <div className='flex w-[200px] justify-around '>
          <img src={facebook} width={40} alt='facebook icon' />
          <img src={twitter} width={40} alt='twitter icon' />
          <img src={instagram} width={40} alt='instagram icon' />
        </div>
      </div>
      <div className='text-center pb-10'>
        <span className='text-2xl'>©</span> Design connect copyright 2023
      </div>
    </footer>
  )
}
