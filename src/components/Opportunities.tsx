const blockInfo = [
  {
    num: '01',
    title: 'The website you are currently on',
    text: 'This is the initial version of the website, which was created mainly for acquaintance and as a foundation for further development. But here you can already register using Instagram and become a member of the project',
  },
  {
    num: '02',
    title: 'Implementation of AI',
    text: 'We plan to use AI extensively to improve content selection. AI will monitor social media pages and select the most interesting content to share. Of course, everything will be linked to you, so this is a good way to develop social media',
  },
  {
    num: '03',
    title: 'Adding interactivity',
    text: "Over time, we will add the ability to like and comment on your and other people's photos with cars, which will allow you to create a photo rating where the best car spotter will receive rewards. We also plan to use a map with marks where you took this or that photo",
  },
  {
    num: '04',
    title: 'Grow your social networks with us',
    text: 'The more participants in the movement, the larger the audience will be reached. Photos with your links will receive interest and clicks on the link, which means new subscribers and audience, and most importantly, it will all be your like-minded people who will appreciate your photos.',
  },
]

export const Opportunities = () => {
  return (
    <section id="howItWorks" className="mt-[150px]">
      <h3 className="text-center watt-font uppercase mb-10 text-5xl">
        Community development plan{' '}
      </h3>
      <div className="flex flex-wrap justify-center lg:justify-between">
        {blockInfo.map((item) => (
          <div key={item.num} className="w-[500px] mt-10">
            <div className="flex items-center mb-5">
              <div className="watt-font uppercase text-4xl text-myblue mr-[10px]">{item.num}.</div>
              <h5 className="watt-font uppercase text-2xl text-myblue">{item.title}</h5>
            </div>
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>
      <iframe
        id="guide"
        className="my-[150px]"
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/H6sC0iPFRgw?si=F9yeyhn63O7fagvA"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  )
}
