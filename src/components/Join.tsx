export const Join = () => {
  return (
    <section className="mt-[130px] bg-[url('./src/assets/car-bg.jpg')] bg-cover bg-bottom py-11">
      <div className="max-w-[1190px] px-2 h-full mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="watt-font uppercase text-myblack bg-slate-300 bg-opacity-75 rounded-xl p-2 text-5xl mb-[10px]">
            Join Car Spotting Culture and become a member of a large friendly community of car
            spotters
          </h3>
          <p className="text-myblack bg-slate-300 bg-opacity-75 rounded-xl p-2 max-w-[476px] text-xl leading-6">
            There are some benefits for participants who joined at the initial stage, but more on
            that below
          </p>
        </div>
        <div className="min-w-full md:min-w-[174px] w-full md:w-fit relative">
          <img
            className="static mx-auto mt-5 md:m-0 md:absolute z-10 left-0 bottom-[-45px]"
            src="./src/assets/PhoneScreen.png"
            alt="phone"
          />
        </div>
      </div>
    </section>
  )
}
