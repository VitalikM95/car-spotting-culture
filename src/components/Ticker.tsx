import Arrow from '../assets/icons/Arrow-Rights.svg'
import { FC } from 'react'
import { IOpenModal } from '../types/models'

export const Ticker: FC<IOpenModal> = ({ setActive }) => {
  return (
    <div id='join' className='mt-[150px]'>
      <div className='h-1 min-w-full bg-white my-5'></div>
      <div className='watt-font uppercase text-white text-5xl animation-wrap'>
        <div className='animation-item animate-[scroll_20s_linear_infinite]'>
          <div>Спілкуйтеся з однодумцями</div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
          <div>Будьте в курсі та надихайтеся</div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
        </div>
        <div
          aria-hidden='true'
          className='animation-item animate-[scroll_20s_linear_infinite]'
        >
          <div>Спілкуйтеся з однодумцями</div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
          <div>Будьте в курсі та надихайтеся</div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
        </div>
      </div>
      <div className='h-1 min-w-full bg-white my-5'></div>
      <div className='watt-font uppercase text-white text-5xl animation-wrap'>
        <div className='animation-item animate-[scroll_20s_linear_infinite_reverse]'>
          <div>Mожливості співпраці </div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
          <div>Покажіть свою роботу</div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
          <div>Діліться знаннями</div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
        </div>
        <div
          aria-hidden='true'
          className='animation-item animate-[scroll_20s_linear_infinite_reverse] '
        >
          <div>Mожливості співпраці </div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
          <div>Покажіть свою роботу</div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
          <div>Діліться знаннями</div>
          <div>
            <img src={Arrow} alt='arrow right' />
          </div>
        </div>
      </div>
      <div className='h-1 min-w-full bg-white mt-5'></div>
      <div className='flex justify-center'>
        <button
          className='w-[187px] h-[52px] mt-20 bg-myblue rounded-[20px] text-white font-semibold hover:bg-myblue-light active:bg-myblue transition-all ease-in-out'
          onClick={() => setActive(true)}
        >
          Приєднатись
        </button>
      </div>
    </div>
  )
}
