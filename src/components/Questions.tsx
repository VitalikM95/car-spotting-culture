import Arrow from '../assets/icons/accordeon-icon.svg'

const questions = [
  {
    question: 'Як створити профіль на Design Connect?',
    answer:
      'Створити профіль на DesignConnectUA просто! Просто натисніть кнопку «Зареєструватися» та заповніть необхідну інформацію. Ви зможете продемонструвати своє портфоліо, навички та професійний досвід, щоб зв’язатися з іншими цифровими фахівцями.',
  },
  {
    question:
      'Чи можу я використовувати Design Connect, якщо я не перебуваю в Україні?',
    answer:
      'Абсолютно! Незважаючи на те, що Design Connect було створенно з акцентом на українську дзайнерську спільноту, до неї запрошуються цифрові спеціалісти з усього світу. Наша платорма надає можливості для спілкування, співпраці та перспектив незалежно від вашого місцезнаходження.',
  },
  {
    question: 'Як я можу зв’язатися з іншими професіоналами на Design Connect?',
    answer:
      'Спілкуватися з професіоналами на Design Connect легко. Ви можете шукати певні навички, галузі чи посади, щоб знайти відповідні профілі. Коли ви знайдете людину, з якою хочете зв’язатися, просто надішліть їй запит на з’єднання. Це чудовий спосіб розширити вашу професійну мережу!',
  },
  {
    question: 'Чи потрібно платити членство за використання Design Connect?',
    answer:
      'Ні, Design Connect є безкоштовним для використання для всіх цифрових спеціалістів. Ми віримо в надання доступної платформи для професійного спілкування та зростання. Немає прихованих комісій чи платежів, тому ви можете зосередитися на підключенні та співпраці з колегами-фахівцями.',
  },
  {
    question: 'Чи можу я знайти вакансії на Design Connect?',
    answer:
      'Звичайно! Design Connect дошку вакансій, де компанії та клієнти можуть публікувати вакансії спеціально для цифрових спеціалістів. Ви можете переглядати списки, подаватись на вакансії та навіть демонструвати своє портфоліо, щоб залучити потенційних роботодавців.',
  },
]

export const Questions = () => {
  return (
    <section className='bg-myblue my-[150px] p-[30px]'>
      <h3 className='text-center text-white watt-font uppercase mb-10 text-5xl'>
        Маєте питання?
      </h3>
      <div className='w-full max-w-[1192px] px-2 mx-auto'>
        {questions.map((item, i) => (
          <div key={i}>
            <div className='h-[1px] min-w-full bg-white '></div>
            <details className='text-white'>
              <summary className='font-semibold text-[20px] relative py-7 list-none cursor-pointer'>
                <img className='arrow absolute right-0' src={Arrow} alt='#' />
                <div>{item.question}</div>
              </summary>
              <p className='text-white leading-6 pb-5'>{item.answer}</p>
            </details>
          </div>
        ))}
        <div className='h-[1px] min-w-full bg-white '></div>
      </div>
    </section>
  )
}
