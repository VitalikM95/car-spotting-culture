import Lamp from '../assets/icons/Lamp.svg'

export const About = () => {
  return (
    <div
      id='about'
      className=' mt-[150px] flex flex-col lg:flex-row justify-between items-center'
    >
      <div className='w-fit md:w-[400px] relative p-2'>
        <img className='absolute z-10' src={Lamp} alt='lamp icon' />
        <p className=' leading-[1.1rem] bg-white px-[50px] mt-[35px] py-[30px] rounded-[60px]'>
          Наша мета - об’єднати українських фахівців культурної та креативної
          сфери. Тому ми розробили нетворкінгову онлайн платформу в Figma, щоб
          ви мали змогу знайти однодумців, або навіть друзів.
        </p>
      </div>
      <div className='w-fit md:w-[700px] mt-4 p-2'>
        <h3 className='watt-font uppercase text-5xl mb-2'>
          Для кого ми <br />
          створили платформу
        </h3>
        <p className='leading-[1.1rem]'>
          Design Connect створено дизайнерами, для дизайнерів. Наша місія
          полягає в тому, щоб розширити можливості та об’єднати спільноту
          цифрового дизайну в Україні, сприяючи процвітаючій екосистемі
          творчості, інновацій та співпраці.
        </p>
      </div>
    </div>
  )
}
