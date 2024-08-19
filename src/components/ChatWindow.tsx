import React from 'react'

const ChatWindow = () => {
  return (
    <div className="dialog__container">
      <div className="dialog__header">
        <div className="dialog__avatar">
          <img src="./src/assets/girl1.png" width={40} alt="avatar" />
        </div>
        <div className="dialog__name">Alice Freeman</div>
      </div>
      <div className="dialog__view">
        <div className="dialog__massage">
          <div className="dialog__massage_avatar">
            <img src="./src/assets/girl1.png" width={30} alt="avatar" />
          </div>
          <div className="dialog__massage_content">
            <div className="dialog__massage_text">Hi, how are you?</div>
            <div className="dialog__massage_date">8/17/2022, 7:43AM</div>
          </div>
        </div>
        <div className="dialog__massage--right">
          <div className="dialog__massage_text--right">Not bad what about you?</div>
          <div className="dialog__massage_date">8/17/2022, 7:43AM</div>
        </div>
        <div className="dialog__massage--right">
          <div className="dialog__massage_text--right">How was your meeting?</div>
          <div className="dialog__massage_date">8/17/2022, 7:43AM</div>
        </div>
      </div>
      <div className="dialog__footer">
        <div className="dialog__footer_input">
          <input className="dialog__footer_field" type="text" placeholder="Type your massage" />
          <svg
            className="dialog__footer_button"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
