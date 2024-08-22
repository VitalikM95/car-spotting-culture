import Social from '../assets/icons/Chat.svg'
import Chat from '../assets/icons/Chat2.svg'
import Trending from '../assets/icons/Trending-up.svg'
import Lock from '../assets/icons/Lock.svg'

const features = [
  {
    img: Social,
    text: 'Різноманітний фонд талантів: платформа має великий та різноманітний кадровий резерв українських цифрових спеціалістів. Ви можете зв’язуватися з професіоналами з різних сфер і галузей, гарантуючи, що знайдете ідеальний відповідник для своїх конкретних потреб проекту',
  },
  {
    img: Chat,
    text: 'Якісні можливості спілкування: користувачі отримують переваги від якісного спілкування з професіоналами-однодумцями, що дозволяє вам розширити своє професійне коло та співпрацювати над захоплюючими проектами. Design Connect створює атмосферу, керовану спільнотою, де можна встановити цінні зв’язки',
  },
  {
    img: Trending,
    text: 'Підвищення навичок і зростання: платформа пропонує можливості для підвищення та зростання навичок. Ви можете брати участь у семінарах, майстер-класах і програмах наставництва, які проводять досвідчені спеціалісти, що дозволить вам бути в курсі галузевих тенденцій і найкращих практик',
  },
  {
    img: Lock,
    text: 'Надійність платформ: Design Connect є надійним джерелом для професійних знайомств. Прозоре та безпечне середовище гарантує, що ви можете впевнено спілкуватися з іншими, зміцнюючи почуття довіри в спільноті',
  },
]

export const Features = () => {
  return (
    <section>
      <h3 className='text-center watt-font uppercase mb-20 text-5xl'>
        чому саме Design Connect
      </h3>
      <ul className='features'>
        {features.map((item, i) => (
          <li key={i} className='flex mt-[50px]'>
            <div className='min-w-[110px] flex items-center'>
              <img src={item.img} alt='social icon' />
            </div>
            <p className='max-w-[900px] bg-white p-10 rounded-[60px] text-md'>
              <span className='text-myblue font-semibold'>
                {item.text.split(':')[0]}:
              </span>{' '}
              {item.text.split(':')[1]}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
