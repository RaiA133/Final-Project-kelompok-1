import { useContext } from "react"
import { ChatContext } from "../../contexts/ChatContext"

function ChatBox() {
  const { ChatFriendList } = useContext(ChatContext)

  return (
    <div className="col-span-2 bg-base-100 card shadow-md md:ms-5 mt-5 h-[40rem]">

      {ChatFriendList.length > 0 ? (
        <>
          <div>
            <div className="col-span-1 py-2 px-5 bg-base-200 card shadow mt-0">
              <div className='join'>
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src={import.meta.env.VITE_PROFILE_DEFAULT} />
                  </div>
                </div>
                <div className='ms-4'>
                  <p className='font-bold'>Username</p>
                  <p className=''>online</p>
                </div>
              </div>
            </div>
          </div>

          <div className='p-5 h-[32rem]'>
            <div className="chat chat-start">
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">
                <span className=''> Delivered </span>
                <time className="text-xs opacity-50 ms-2">12:45</time>
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">
                <span className=''> Read </span>
                <time className="text-xs opacity-50 ms-2">12:46</time>
              </div>
            </div>
          </div>

          <div className="join mx-2">
            <div className='form-control w-full'>
              <input className="input input-bordered join-item" name='chat-box' placeholder="Chat..." />
            </div>
            <button className="btn join-item">Send</button>
          </div>
        </>
      ) : (
        <div className='flex justify-center items-center h-screen'>
          <div className='text-lg font-bold'>Tidak ada teman</div>
        </div>
      )}

    </div>
  )
}

export default ChatBox