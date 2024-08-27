import { FC, useState } from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/Logo.svg'
import Burger from '../assets/icons/burger.svg'
import { IOpenModal } from '../types/models'

export const Header: FC<IOpenModal> = ({ setActive }) => {
  const [isOpened, setIsOpened] = useState(false)

  const hadleCloseNav = () => {
    setIsOpened(false)
  }
  return (
    <>
      <header className="w-full h-[100px] flex items-center z-40 bg-mywhite sticky top-[-30px] mx-auto">
        <div className="flex w-full max-w-[1192px] justify-between items-center h-[70px] px-2 mx-auto sticky top-0">
          <img
            className="block md:hidden"
            src={Burger}
            width={40}
            alt="menu icon"
            onClick={() => setIsOpened(!isOpened)}
          />
          <Link to="start" spy={true} smooth={true} offset={-150} duration={500}>
            <img
              className="md:block hidden cursor-pointer mt-10"
              src={Logo}
              width={110}
              alt="logo"
              onClick={hadleCloseNav}
            />
          </Link>
          <ul className="flex justify-end items-center">
            <nav className="hidden md:flex mx-5 ">
              <li className="uppercase mx-5 navlink-effects">
                <Link
                  to="about"
                  activeClass="navlink-active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
              <li className="uppercase mx-5  navlink-effects">
                <Link
                  to="howItWorks"
                  activeClass="navlink-active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  How it works
                </Link>
              </li>
              <li className="uppercase mx-5  navlink-effects">
                <Link
                  to="contacts"
                  activeClass="navlink-active"
                  spy={true}
                  smooth={true}
                  offset={-335}
                  duration={500}
                >
                  Contacts
                </Link>
              </li>
            </nav>
            <button
              onClick={() => {
                setActive(true)
              }}
              className="w-[150px] sm:w-[180px] h-[52px] bg-white text-myblue rounded-[15px] font-semibold button-effects"
            >
              Become a member
            </button>
          </ul>
        </div>
      </header>

      <div
        className={` ${
          isOpened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } h-screen w-screen bg-black/70 fixed md:hidden top-0 z-30 left-0 transition-all duration-300 ease-out`}
        onClick={hadleCloseNav}
      >
        <div
          className={` ${
            isOpened ? 'scale-y-100' : 'scale-y-50'
          } w-full h-fit bg-mywhite fixed top-0 pt-[100px] shadow-lg transition-all duration-300 ease-out`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col justify-between items-center">
            <li className="uppercase mt-4 mx-2 navlink-effects">
              <Link
                onClick={hadleCloseNav}
                to="about"
                activeClass="navlink-active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <div className="h-1 mt-4 min-w-full bg-white"></div>
            <li className="uppercase mt-4 mx-2 navlink-effects">
              <Link
                onClick={hadleCloseNav}
                to="howItWorks"
                activeClass="navlink-active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                How it works
              </Link>
            </li>
            <div className="h-1 mt-4 min-w-full bg-white"></div>
            <li className="uppercase mt-4 mx-2 navlink-effects">
              <Link
                onClick={hadleCloseNav}
                to="contacts"
                activeClass="navlink-active"
                spy={true}
                smooth={true}
                offset={-335}
                duration={500}
              >
                Contacts
              </Link>
            </li>
            <div className="h-1 mt-4 min-w-full bg-white"></div>
          </ul>
        </div>
      </div>
    </>
  )
}
