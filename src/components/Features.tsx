import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import shirt from '../assets/gifts/t-shirt.jpg'
import sticker from '../assets/gifts/sticker.jpg'
import bedge from '../assets/gifts/bedge.jpg'
import hoodie from '../assets/gifts/hoodie.jpg'

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
        <img className="max-w-[600px] " src={shirt} />
        <img className="max-w-[600px]" src={sticker} />
        <img className="max-w-[600px] " src={bedge} />
        <img className="max-w-[600px]" src={hoodie} />
      </Slider>
    </section>
  )
}
