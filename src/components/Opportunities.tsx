const blockInfo = [
  {
    num: '01',
    title: 'Спілкуйтеся з однодумцями',
    text: 'Знайдіть та спілкуйтеся з колегами-дизайнерами по всій Україні, які поділяють вашу пристрасть і прагнення до досконалості. Розширюйте свою професійну мережу та розвивайте цінні зв’язки, які можуть призвести до нової співпраці та кар’єрного зростання',
  },
  {
    num: '02',
    title: 'Продемонструйте своє портфоліо',
    text: 'Покажіть свою творчу роботу візуально привабливо та впорядковано. Поділіться своїми проектами, тематичними дослідженнями та досвідом дизайну, щоб справити враження на потенційних клієнтів і роботодавців. Нехай ваше портфоліо говорить само за себе та залучає цікаві можливості',
  },
  {
    num: '03',
    title: 'Співпрацюйте над проектами',
    text: 'Досліджуйте можливості співпраці з іншими дизайнерами в нашій спільноті. Незалежно від того, чи шукаєте ви ко-дизайнера, відгуки про свою роботу чи когось, щоб об’єднатися в проекті, Design Connect надає сприятливе середовище для співпраці та творчого обміну',
  },
  {
    num: '04',
    title: 'Будьте в курсі та надихайтеся',
    text: 'Отримуйте доступ до великої кількості галузевих ідей, тенденцій і ресурсів, які сприятимуть вашому професійному зростанню. Беріть участь в обговореннях, діліться знаннями та навчайтеся у експертів галузі, щоб покращити свої навички та залишатися в авангарді галузі',
  },
]

export const Opportunities = () => {
  return (
    <section id='howItWorks' className='mt-[150px]'>
      <h3 className='text-center watt-font uppercase mb-10 text-5xl'>
        що тут можна робити
      </h3>
      <div className='flex flex-wrap justify-center lg:justify-between'>
        {blockInfo.map(item => (
          <div key={item.num} className='w-[500px] mt-10'>
            <div className='flex items-center mb-5'>
              <div className='watt-font uppercase text-4xl text-myblue mr-[10px]'>
                {item.num}.
              </div>
              <h5 className='watt-font uppercase text-2xl text-myblue'>
                {item.title}
              </h5>
            </div>
            <p className='text-lg'>{item.text}</p>
          </div>
        ))}
      </div>
      <iframe
        id='guide'
        className='my-[150px]'
        width='100%'
        height='300'
        src='https://www.youtube.com/embed/NpEaa2P7qZI'
        title='YouTube video player'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </section>
  )
}
