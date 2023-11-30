import { useContext, useState } from "react"
import { ChatContext } from "../../contexts/ChatContext"
import ChatBoxMessage from "./components/ChatBoxMessage"
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient"
import InputEmoji from "react-input-emoji";

function ChatBox() {
  const { user, currentChat, sendTextMessage } = useContext(ChatContext) // profile kita dari chatContext | Obrolan yg mana | Pesan Obrolan di userBox yg kita klik
  const recipientUser = useFetchRecipientUser(currentChat, user) // get data orang yg ngobrol dengan kita dari userBox yg kita klik
  const otherUserData = recipientUser[0] || ''
  const otherUserPic = `${import.meta.env.VITE_BACKEND_BASEURL}/profile/picture/${otherUserData.img_profile}`
  const [textMessage, setTextMessage] = useState("");

  function handleOnEnter(textMessage) {
    sendTextMessage(textMessage, currentChat.chat_unique_id, setTextMessage)
  }

  return (
    <div className="col-span-2 bg-base-100 card shadow-md md:ms-5 mt-5 h-[40rem]">

      <div>
        <div className="col-span-1 py-2 px-5 bg-base-200 card shadow mt-0">
          <div className='join'>
            <div className="avatar">
              <div className="w-12 rounded-full">
                {recipientUser[0] && (
                  <img src={otherUserPic} />
                )}
              </div>
            </div>
            <div className='ms-4 w-full'>
              <p className='font-bold'>{otherUserData.username}</p>
              <div className="flex justify-between w-full">
                <p className=''>{otherUserData.status}</p>
                <p className="text-sm">{otherUserData.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5 h-[32rem] overflow-auto'>

        <ChatBoxMessage />

      </div>

      {otherUserData && (
        <div className="join mx-2 mt-2">
          <InputEmoji
            value={textMessage}
            onChange={setTextMessage}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
            theme="light"
          />
          <button className="btn me-2" onClick={() => sendTextMessage(textMessage, currentChat.chat_unique_id, setTextMessage)}>Send</button>
        </div>
      )}

    </div>
  )
}

export default ChatBox