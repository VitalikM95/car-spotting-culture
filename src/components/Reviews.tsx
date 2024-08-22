import Avatar from '../assets/avatars/Photo.png'
import Alex from '../assets/avatars/Alex.png'
import Andriy from '../assets/avatars/Andriy.png'
import Dmytro from '../assets/avatars/Dmytro.png'
import Ivan from '../assets/avatars/Ivan.png'
import Olha from '../assets/avatars/Olha.png'
import Serhiy from '../assets/avatars/Serhiy.png'
import Pattern from '../assets/Pattern.svg'

const reviews = [
  {
    avarar: Avatar,
    name: 'Ганна',
    text: 'Design Connect змінив правила для мене як для UI дизайнера. Я спілкувась з талановитими професіоналами, співпрацювала над захоплюючими проектами та отримала нові можливості роботи.',
  },
  {
    avarar: Ivan,
    name: 'Іван К.',
    text: 'Настійно рекомендую цю платформу всім, хто працює в індустрії цифрового дизайну!',
  },
  {
    avarar: Avatar,
    name: 'Марія С.',
    text: 'Нарешті мережева платформа, яка розуміє потреби дизайнерів в Україні! Це безцінний ресурс для професійного зростання',
  },
  {
    avarar: Olha,
    name: 'Ольга Т.',
    text: 'Design Connect дозволив мені продемонструвати своє портфоліо, спілкуватися з колегами-дизайнерами та знайти позаштатні концерти, які ідеально відповідають моїм навичкам.',
  },
  {
    avarar: Alex,
    name: 'Алекс',
    text: 'Платформа допомогла мені знайти виняткових дизайнерів для моїх проектів, зробивши процес співпраці безперебійним та ефективним. Дуже рекомендую як для дизайнерів, так і для тих, хто шукає дизайнерські послуги!',
  },
  {
    avarar: Avatar,
    name: 'Юлія',
    text: 'Design Connect революціонізував спосіб спілкування та співпраці дизайнерів. Інтуїтивно зрозумілий інтерфейс платформи, широкі можливості та активна спільнота для всіх, хто серйозно ставиться до своєї дизайнерської кар’єри.',
  },
  {
    avarar: Serhiy,
    name: 'Сергій',
    text: 'Design Connect справді розуміє потреби цифрових дизайнерів. Платформа пропонує повний набір інструментів і ресурсів, починаючи від пошуку можливостей роботи та спілкуючись із колегами. Це стало невід’ємною частиною мого професійного шляху',
  },
  {
    avarar: Andriy,
    name: 'Андрій Д.',
    text: 'Функції платформи для спільної роботи та доступ до галузевих ідей підвищили мої навички та відкрили двері для захоплюючих перспектив кар’єри. Це ідеальне місце для зростання та успіху цифрових спеціалістів!',
  },
  {
    avarar: Avatar,
    name: 'Наталія К.',
    text: 'Я ціную фокус платформи на українській дизайнерській спільноті, що дозволяє мені знаходити місцеві проекти, які відповідають моїм знанням. Бути частиною цієї платформи однозначно варто!',
  },
  {
    avarar: Dmytro,
    name: 'Дмитро С.',
    text: 'Design Connect зіграв важливу роль у розширенні моєї професійної мережі. Я зв’язався з дизайнерами, які надали цінні відгуки про мою роботу, що допомогло мені вдосконалити свої навички. Акцент платформи на співпраці та зростанні є освіжаючим!',
  },
]

export const Reviews = () => {
  return (
    <section className='mt-[150px] px-2'>
      <h3 className='text-center watt-font uppercase mb-10 text-5xl'>
        Реальні люди <br />
        <span className='text-myblue'>реальні</span> відгуки
      </h3>
      <ul className='reviews mt-20 flex review2:flex-row flex-col flex-wrap justify-evenly pr-4 review2:items-start items-center'>
        {reviews.map((item, i) => (
          <li
            key={i}
            className='w-[350px] review1:w-[270px] h-[550px] bg-white pl-[25px] mb-5 mx-2 rounded-[60px] overflow-hidden flex justify-between'
          >
            <div className='flex'>
              <div className='flex flex-col'>
                <img
                  className='rounded-[50%] mb-[50px] mt-[25px]'
                  width={85}
                  src={item.avarar}
                  alt='avatar'
                />
                <p className='leading-5 flex-auto'>{item.text}</p>
                <div className='text-xl font-semibold mb-[88px]'>
                  {item.name}
                </div>
              </div>
              <img src={Pattern} alt='#' />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
