import { FC } from 'react'
import Picture from '../assets/Picture.svg'
import { IOpenModal } from '../types/models'

export const Hero: FC<IOpenModal> = ({ setActive }) => {
  return (
    <section
      id='start'
      className='flex flex-col md:flex-row h-fit md:h-[567px] mt-[30px]'
    >
      <div className='flex w-fit md:w-[699px] flex-col justify-center'>
        <h1 className='watt-font uppercase text-center md:text-left leading-[5.5rem] text-6xl sm:text-7xl lg:text-[95px] my-5'>
          design connect community
        </h1>
        <p className='w-full md:w-80 text-xl text-center md:text-left leading-5 mb-16'>
          Професійна онлайн спільнота, що об’єднує українських фахівців
          культурної та креативної сфери
        </p>
        <button
          className='w-[244px] h-[72px] mx-auto md:mx-0 bg-myblue rounded-[20px] text-white font-semibold hover:bg-myblue-light active:bg-myblue transition-all ease-in-out'
          onClick={() => setActive(true)}
        >
          Давай знайомитись
        </button>
      </div>
      <div className='w-auto md:w-[511px] overflow-hidden flex justify-center'>
        <img className='min-w-[567px]' src={Picture} alt='big logo' />
      </div>
    </section>
  )
}
