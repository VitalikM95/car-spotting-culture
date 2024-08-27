import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Features = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }
  return (
    <section>
      <h3 className="text-center watt-font uppercase mb-20 text-5xl">
        Soon to be available gifts from Car Spotting Culture
      </h3>
      <Slider className="max-w-[600px] mx-auto" {...settings}>
        <img className="max-w-[600px] " src="./src/assets/gifts/t-shirt.jpg" />
        <img className="max-w-[600px]" src="./src/assets/gifts/sticker.jpg" />
        <img className="max-w-[600px] " src="./src/assets/gifts/bedge.jpg" />
        <img className="max-w-[600px]" src="./src/assets/gifts/hoodie.jpg" />
      </Slider>
    </section>
  )
}
