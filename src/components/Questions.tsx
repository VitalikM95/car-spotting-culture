import Arrow from '../assets/icons/accordeon-icon.svg'

const questions = [
  {
    question: 'Why register via Instagram?',
    answer:
      'We plan to implement maximum automation in our application. For this purpose, a bot is being created that will view the photos of cars you posted on Instagram and generate a post in our application with a link to your page',
  },
  {
    question: 'What will happen to this site in the future?',
    answer:
      'Of course, the website will continue to exist and develop, but it is not our ultimate goal. We are working on the development of a mobile application available on Google Play and Apple Store. It will have much more features and capabilities',
  },
  {
    question: 'What are these products with Car Spotting Culture symbols?',
    answer:
      "These are the gifts we plan to send to our participants who joined us at the very beginning of the project. Of course, there is a limited number of them, so don't waste your time, register and join us",
  },
]

export const Questions = () => {
  return (
    <section className="bg-myblue my-[150px] p-[30px]">
      <h3 className="text-center text-white watt-font uppercase mb-10 text-5xl">
        Do you have any questions?
      </h3>
      <div className="w-full max-w-[1192px] px-2 mx-auto">
        {questions.map((item, i) => (
          <div key={i}>
            <div className="h-[1px] min-w-full bg-white "></div>
            <details className="text-white">
              <summary className="font-semibold text-[20px] relative py-7 list-none cursor-pointer">
                <img className="arrow absolute right-0" src={Arrow} alt="#" />
                <div>{item.question}</div>
              </summary>
              <p className="text-white leading-6 pb-5">{item.answer}</p>
            </details>
          </div>
        ))}
        <div className="h-[1px] min-w-full bg-white "></div>
      </div>
    </section>
  )
}
