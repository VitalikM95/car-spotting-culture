import Lamp from '../assets/icons/Lamp.svg'

export const About = () => {
  return (
    <div id="about" className=" mt-[50px] flex flex-col lg:flex-row justify-between items-center">
      <div className="w-fit md:w-[400px] relative p-2">
        <img className="absolute z-10" src={Lamp} alt="lamp icon" />
        <p className=" leading-[1.1rem] bg-white px-[50px] mt-[35px] py-[30px] rounded-[60px]">
          Our goal is to unite ordinary people who appreciate the beauty of cars, love to take
          pictures of them and share their photos with others. Therefore, we have developed an
          online platform so that you could find like-minded people, or even friends.
        </p>
      </div>
      <div className="w-fit md:w-[700px] mt-4 p-2">
        <h3 className="watt-font uppercase text-5xl mb-2">
          Who we built <br />
          the platform for?
        </h3>
        <p className="leading-[1.1rem]">
          Car Spotting Culture was created for everyone who wants to join, but at the initial stage
          of development we will will select and invite participants ourselves. As it was said, this
          is only the first stage of the project's existence, and there are still many interesting
          things ahead
        </p>
      </div>
    </div>
  )
}
