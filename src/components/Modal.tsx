import { FC, useState } from 'react'
import Close from '../assets/icons/close.svg'
import Back from '../assets/icons/back.svg'
import Logo from '../assets/Logo.svg'
import Team from '../assets/team.svg'
import { Auth } from './Auth'

interface IProps {
  active: boolean
  setActive: (arg: boolean) => void
}

export const Modal: FC<IProps> = ({ active, setActive }) => {
  active
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible')
  active
    ? (document.body.style.paddingRight = '15px')
    : (document.body.style.paddingRight = '0px')

  const clearState = () => {
    setActive(false)
    setTimeout(() => {
      setIsAuth(false)
      setIsLogin(false)
    }, 500)
  }
  const [isAuth, setIsAuth] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div
      className={` ${
        active
          ? 'opacity-100 pointer-events-auto '
          : 'opacity-0 pointer-events-none '
      } h-screen w-screen bg-black/70 fixed top-0 left-0 z-50 flex justify-center items-center transition-all duration-300 ease-out`}
      onClick={clearState}
    >
      <div
        className={` ${
          active ? 'scale-100' : 'scale-50 '
        }p-2 rounded-xl bg-mywhite w-full max-w-[1192px] h-full max-h-screen flex flex-col justify-between transition-all duration-300 ease-out`}
        onClick={e => e.stopPropagation()}
      >
        <div className='flex justify-between m-4'>
          <img
            className='cursor-pointer hover:scale-125 transition-all'
            onClick={() => {
              setIsAuth(false)
              setIsLogin(false)
            }}
            src={Back}
            width={40}
            alt='back icon'
          />
          <img
            className='cursor-pointer hover:rotate-90 hover:scale-125 transition-all'
            onClick={clearState}
            src={Close}
            width={40}
            alt='close icon'
          />
        </div>
        <div className='flex-grow flex flex-col justify-between pb-10 px-5'>
          <img className='mx-auto' src={Logo} width={180} alt='logo' />
          {isAuth ? (
            <Auth closeModal={setActive} isLogin={isLogin} />
          ) : (
            <div className='flex flex-grow flex-col justify-between items-center'>
              <img
                className='flex-grow w-[170px] md:w-[240px]'
                src={Team}
                // width={250}
                alt='team'
              />
              <div className='text-center  md:text-2xl font-semibold mb-2'>
                Професійна онлайн спільнота
              </div>
              <p className='text-center text-sm md:text-lg mb-2 font-light'>
                Об’єднуємо українських digital-спеціалістів, сприяючи
                процвітаючій екосистемі творчості, інновацій та співпраці
              </p>
              <div className='flex mt-[70px] flex-wrap justify-center'>
                <button
                  className='w-[345px] h-[52px] bg-myblue rounded-[20px] text-white font-semibold hover:bg-myblue-light active:bg-myblue transition-all ease-in-out m-2'
                  onClick={() => {
                    setIsLogin(!isLogin)
                    setIsAuth(!isAuth)
                  }}
                >
                  Увійти
                </button>
                <button
                  className='w-[345px] h-[52px] bg-mywhite rounded-[20px] text-myblack border-myblue border-2 font-semibold hover:bg-white active:bg-mywhite transition-all ease-in-out m-2'
                  onClick={() => setIsAuth(!isAuth)}
                >
                  Зареєструватись
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
