import { FC, useState } from 'react'

interface IProps {
  isLogin: boolean
  closeModal: (arg: boolean) => void
}

export const Auth: FC<IProps> = ({ isLogin, closeModal }) => {
  const [authData, setAuthData] = useState({ name: '', mail: '', password: '' })

  const onSubmit = () => {
    console.log(authData)
    closeModal(false)
    setAuthData({ name: '', mail: '', password: '' })
  }

  return (
    <div className='flex flex-col p-4 w-full'>
      <div className='text-center my-5 '>
        {isLogin ? (
          <h5 className='text-xl mb-4 uppercase font-bold'>Вхід</h5>
        ) : (
          <h5 className='text-xl mb-4 uppercase font-bold'>Реєстрація</h5>
        )}
        <div className='h-1 min-w-full bg-white'></div>
      </div>
      <form onSubmit={e => e.preventDefault()}>
        {!isLogin && (
          <div className='w-full mb-3'>
            <label className='block uppercase text-xs font-bold mb-2'>
              Name
            </label>
            <input
              type='text'
              value={authData.name}
              onChange={e => setAuthData({ ...authData, name: e.target.value })}
              className='border-0 p-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
              placeholder='Name'
            />
          </div>
        )}
        <div className='w-full mb-3'>
          <label className='block uppercase text-xs font-bold mb-2'>
            Email
          </label>
          <input
            type='text'
            value={authData.mail}
            onChange={e => setAuthData({ ...authData, mail: e.target.value })}
            className='border-0 p-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            placeholder='Email'
          />
        </div>

        <div className='w-full mb-3 '>
          <label className='block uppercase text-xs font-bold mb-2'>
            Password
          </label>
          <input
            type='password'
            value={authData.password}
            onChange={e =>
              setAuthData({ ...authData, password: e.target.value })
            }
            className='border-0 p-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            placeholder='Password'
          />
        </div>
        {isLogin ? (
          <button
            onClick={onSubmit}
            className='w-full h-[52px] mt-8 bg-myblue rounded-[20px] text-white font-semibold hover:bg-myblue-light active:bg-myblue transition-all ease-in-out '
          >
            Увійти
          </button>
        ) : (
          <button
            onClick={onSubmit}
            className='w-full h-[52px] mt-8 bg-mywhite rounded-[20px] text-myblack border-myblue border-2 font-semibold hover:bg-white active:bg-mywhite transition-all ease-in-out'
          >
            Зареєструватись
          </button>
        )}
      </form>
    </div>
  )
}
