import PhoneScreen from '../assets/PhoneScreen.svg'

export const Join = () => {
  return (
    <section className='mt-[130px]  bg-myblue py-11'>
      <div className='max-w-[1190px] px-2 h-full mx-auto flex flex-col md:flex-row justify-between'>
        <div>
          <h3 className='watt-font uppercase text-white text-5xl mb-[10px]'>
            Приєднуйтесь до Design Connect сьогодні та відкрийте безмежні
            можливості для вашої дизайнерської кар’єри
          </h3>
          <p className='text-white max-w-[476px] text-xl leading-6'>
            Давайте разом формувати майбутнє цифрового дизайну теперішній в
            Україні
          </p>
        </div>
        <div className='min-w-full md:min-w-[174px] w-full md:w-fit relative'>
          <img
            className='static mx-auto mt-5 md:m-0 md:absolute z-10 left-0 bottom-[-45px]'
            src={PhoneScreen}
            alt='phone'
          />
        </div>
      </div>
    </section>
  )
}
