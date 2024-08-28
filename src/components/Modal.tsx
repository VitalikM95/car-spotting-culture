import { FC, useState } from 'react'
import Close from '../assets/icons/close.svg'
import Back from '../assets/icons/back.svg'
import Team from '../assets/team.svg'
import { Auth } from './Auth'
import axios from 'axios'

interface IProps {
  active: boolean
  setActive: (arg: boolean) => void
}

export const Modal: FC<IProps> = ({ active, setActive }) => {
  active ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'visible')
  active ? (document.body.style.paddingRight = '15px') : (document.body.style.paddingRight = '0px')
  const [authData, setAuthData] = useState({ name: '', mail: '', hiddenText: '' })
  const [errors, setErrors] = useState({ name: '', mail: '', hiddenText: '' })

  const validate = () => {
    const newErrors = { name: '', mail: '', hiddenText: '' }

    if (!authData.name.trim()) newErrors.name = 'Name is required'

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!authData.mail.trim()) newErrors.mail = 'Email is required'
    else if (!emailPattern.test(authData.mail)) newErrors.mail = 'Email is not valid'

    if (!authData.hiddenText.trim()) newErrors.hiddenText = 'Password is required'
    else if (authData.hiddenText.length < 5)
      newErrors.hiddenText = 'Password must be at least 5 characters long'

    setErrors(newErrors)

    return !newErrors.name && !newErrors.mail && !newErrors.hiddenText
  }

  const [buttonState, setButtonState] = useState({
    disabled: false,
    text: 'Register',
    color: 'bg-myblue text-mywhite border-myblue hover:bg-blue-500 active:bg-myblue',
  })

  const handleClick = () => {
    if (validate()) {
      setButtonState({
        disabled: true,
        text: 'Loading...',
        color: 'bg-gray-400 text-mywhite border-gray-400',
      })

      setTimeout(() => {
        setIsAuth(!isAuth)
        onSubmit()
        setButtonState({
          disabled: false,
          text: 'Register',
          color: 'bg-myblue text-mywhite border-myblue hover:bg-blue-500 active:bg-myblue',
        })
      }, 2500)
    }
  }

  const onSubmit = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}`, authData)

      setAuthData({ name: '', mail: '', hiddenText: '' })
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }

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
        active ? 'opacity-100 pointer-events-auto ' : 'opacity-0 pointer-events-none '
      } h-screen w-screen bg-black/70 fixed top-0 left-0 z-50 flex justify-center items-center transition-all duration-300 ease-out`}
      onClick={clearState}
    >
      <div
        className={` ${
          active ? 'scale-100' : 'scale-50 '
        }p-2 rounded-xl bg-mywhite w-full max-w-[1192px] h-full max-h-screen flex flex-col justify-between transition-all duration-300 ease-out`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between m-4">
          <img
            className="cursor-pointer hover:scale-125 transition-all"
            onClick={() => {
              setIsAuth(false)
              setIsLogin(false)
            }}
            src={Back}
            width={40}
            alt="back icon"
          />
          <img
            className="cursor-pointer hover:rotate-90 hover:scale-125 transition-all"
            onClick={clearState}
            src={Close}
            width={40}
            alt="close icon"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between pb-10 px-5">
          {isAuth ? (
            <Auth closeModal={setActive} isLogin={isLogin} />
          ) : (
            <div className="flex flex-grow flex-col justify-between items-center">
              <img className="flex-grow w-[200px]" src={Team} alt="team" />
              <div className="text-center  md:text-2xl font-semibold mb-2">Welcome Car Spotter</div>
              <p className="text-center text-sm md:text-lg mb-2 font-light">Enter your details</p>
              <div className="flex mt-2 flex-wrap justify-center">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="w-full mb-3">
                    <label className="block uppercase text-xs font-bold mb-2">Name</label>
                    <input
                      type="text"
                      value={authData.name}
                      onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
                      className="border-0 p-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="w-full mb-3">
                    <label className="block uppercase text-xs font-bold mb-2">Email</label>
                    <input
                      type="text"
                      value={authData.mail}
                      onChange={(e) => setAuthData({ ...authData, mail: e.target.value })}
                      className="border-0 p-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                    {errors.mail && <p className="text-red-500 text-xs mt-1">{errors.mail}</p>}
                  </div>

                  <div className="w-full mb-3 ">
                    <label className="block uppercase text-xs font-bold mb-2">Password</label>
                    <input
                      type="text"
                      value={authData.hiddenText}
                      onChange={(e) => setAuthData({ ...authData, hiddenText: e.target.value })}
                      className="password-input border-0 p-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                    {errors.hiddenText && (
                      <p className="text-red-500 text-xs mt-1">{errors.hiddenText}</p>
                    )}
                  </div>
                  <button
                    onClick={handleClick}
                    disabled={buttonState.disabled}
                    className={`w-[345px] h-[52px] rounded-[20px] border-2 font-semibold transition-all ease-in-out m-2 ${buttonState.color}`}
                  >
                    {buttonState.text}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
