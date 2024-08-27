import Logo from '../assets/Logo.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'
import { Link } from 'react-scroll'

export const Footer = () => {
  return (
    <footer id="contacts" className="h-[400px]">
      <div className="h-1 min-w-full bg-white"></div>
      <div className="flex w-full max-w-[1192px] mx-auto px-2 py-[87px] justify-between">
        <img src={Logo} width={200} alt="logo" />
        <ul className="my-auto ml-4 w-[140px] flex flex-col font-semibold gap-5">
          <Link
            className="cursor-pointer hover:underline"
            to="join"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Join us{' '}
          </Link>
          <Link
            className="cursor-pointer hover:underline"
            to="guide"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Video
          </Link>
          <Link
            className="cursor-pointer hover:underline"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contacts
          </Link>
          <Link
            className="cursor-pointer hover:underline"
            to="howItWorks"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Development plan
          </Link>
        </ul>
        <div className="flex w-[200px] justify-around ">
          <a href="https://www.tiktok.com/@fgs.carspoting">
            <img src={twitter} width={40} alt="twitter icon" />
          </a>
          <a href="https://www.instagram.com/car_spot_cult/?hl=uk">
            <img src={instagram} width={40} alt="instagram icon" />
          </a>
        </div>
      </div>
      <div className="text-center pb-10">
        <span className="text-2xl">©</span> Car Spotting Culture 2024
      </div>
    </footer>
  )
}
