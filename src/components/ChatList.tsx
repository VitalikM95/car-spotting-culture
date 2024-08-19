import { mainApi } from '../redux/main.api'

const ChatList = () => {
  const { data } = mainApi.useGetAllChatsQuery()
  console.log(data)

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="chat__container">
      <div className="chat__header">
        <div className="login">
          <div className="login__avatar">
            <img src="./src/assets/nomen.png" width={40} alt="avatar" />
          </div>
          <button className="login__button">Log in</button>
        </div>
        <div className="chat__search">
          <svg
            className="chat__search_icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            className="chat__search_field"
            type="text"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <div className="chat__list">
        <h3 className="chat__list_title">Chats</h3>
        {data?.map((chat) => {
          const lastMessage = chat.messages.slice(-1)[0] || {}
          return (
            <div key={chat._id} className="chat__list_item">
              <div className="chat__list_avatar">
                <img src="./src/assets/girl1.png" width={40} alt="avatar" />
              </div>
              <div className="chat__list_content">
                <div className="chat__list_name">
                  {chat.firstName} {chat.lastName}
                </div>
                <div className="chat__list_text">{lastMessage.content || ''}</div>
              </div>
              <div className="chat__list_date">{formatDate(chat.createdAt)}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChatList
