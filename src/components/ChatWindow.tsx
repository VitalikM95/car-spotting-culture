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
      </div>
      <div className="dialog__footer"></div>
    </div>
  )
}

export default ChatWindow
