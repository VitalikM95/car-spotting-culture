const reviews = [
  {
    name: 'carspotter_malta',
    image: 'https://i.ibb.co/12rFCqr/382276609-617301790567581-5138156460253188726-n.jpg',
    link: 'https://www.instagram.com/p/Cxncw21IBw_/?img_index=1',
    car: 'Mercedes Benz SLC 450 1972',
  },
  {
    name: 'jamies.media',
    image: 'https://i.ibb.co/5Rwg4nR/431590835-18017513879477331-1572153743232436929-n.jpg',
    link: 'https://www.instagram.com/p/C4qmZ4Ko7xd/?img_index=1',
    car: 'Ferrari f40',
  },
  {
    name: 'carspotter_malta',
    image: 'https://i.ibb.co/8XRpbkN/376790382-868054225026551-3055784452961358431-n.jpg',
    link: 'https://www.instagram.com/p/CxDxtmsNIcR/?img_index=1',
    car: 'Ferrari Portofino',
  },
  {
    name: 'jamies.media',
    image: 'https://i.ibb.co/1rVRKxb/449612950-493515266443533-3015123741037632526-n.jpg',
    link: 'https://www.instagram.com/p/C85ApkToyod/?img_index=1',
    car: 'Porsche 911 DLS',
  },
  {
    name: 'carspotter_malta',
    image: 'https://i.ibb.co/zQywC7m/374556384-263197009923993-2126853127366226577-n.jpg',
    link: 'https://www.instagram.com/p/CwvaT2Ft8-1/?img_index=1',
    car: 'Daimler Double Six',
  },
  {
    name: 'tom_hdr',
    image: 'https://i.ibb.co/Ch7cXKY/456609778-1523330978279848-5079848669796080694-n.jpg',
    link: 'https://www.instagram.com/p/C_DxlLlMKrl/?hl=uk&g=5&img_index=1',
    car: 'Ferrari Daytona SP3',
  },
  {
    name: '992st.registry',
    image: 'https://i.ibb.co/55gtcZ4/456599823-997837608757176-900579355889038608-n.jpg',
    link: 'https://www.instagram.com/p/C_DveeTIHhC/?hl=uk&g=5&img_index=1',
    car: 'Porsche 992ST',
  },
  {
    name: 'tom_hdr',
    image: 'https://i.ibb.co/SwsL0VT/457026231-1199487594716137-1809503574993775508-n.jpg',
    link: 'https://www.instagram.com/p/C_GVsY1MFQ5/?hl=uk&g=5&img_index=1',
    car: 'Mercedes E320 Convertible',
  },
  {
    name: 'tom_hdr',
    image: 'https://i.ibb.co/TmGBrRt/435246303-1116892766224918-8105749500209057174-n.jpg',
    link: 'https://www.instagram.com/p/C5Q-oELM7vB/?hl=uk&g=5&img_index=1',
    car: 'Mercedes 300 SL',
  },
  {
    name: 'tom_hdr',
    image: 'https://i.ibb.co/yn4bKh8/429319704-7273608876025993-5867272202848897043-n.jpg',
    link: 'https://www.instagram.com/p/C3spiKXs5px/?hl=uk&g=5&img_index=1',
    car: 'Venturi 260 APC ',
  },
]

export const Reviews = () => {
  return (
    <section className="mt-[150px] px-2">
      <h3 className="text-center watt-font uppercase mb-10 text-5xl">
        Some of our <br />
        <span className="text-myblue">car</span> spotters
      </h3>
      <ul className="mt-20 flex flex-row  flex-wrap justify-evenly pr-4 items-center">
        {reviews.map((item, i) => (
          <li
            key={i}
            className="w-[350px] h-fit bg-white mb-5 mx-2 rounded-lg overflow-hidden flex justify-between"
          >
            <a target="_blank" href={item.link}>
              <div className="flex">
                <div className="flex flex-col items-center">
                  <p className="text-xl py-2 font-semibold text-myblue">{item.car}</p>
                  <img className="w-fit rounded-lg" src={item.image} />
                  <div className="text-sm font-semibold text-gray-400">inst: @{item.name}</div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
