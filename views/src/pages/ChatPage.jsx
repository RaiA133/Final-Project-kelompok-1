import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatFriendContext } from '../App'

function ChatPage() {
  const navigate = useNavigate()
  // const status = "online"
  const { ChatFriendList, setChatFriendList } = useContext(ChatFriendContext)

  return (
    <>
      <div className="px-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* USER BOX */}
          <div className='col-span-1'>
            <div role="tablist" className="tabs tabs-lifted mt-5">

              <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold w-44" aria-label="Friend" defaultChecked />
              <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-5 h-96 overflow-auto">

                {ChatFriendList
                  .filter(friend => friend.friend === true)
                  .map(filteredFriend => (
                    <div className="col-span-1 py-2 px-5 bg-base-200 card shadow mt-2" key={filteredFriend.username}>
                      <div className='join'>
                        <div className={`avatar ${filteredFriend.status === 'online' ? 'online' : 'offline'}`}>
                          <div className="w-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
                          </div>
                        </div>
                        <div className='ms-4 overflow-hidden'>
                          <p className='font-bold'>{filteredFriend.username}</p>
                          <p className='h-6'>{filteredFriend.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}

              </div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold w-44" aria-label="Direct Message" />
              <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-5 h-96 overflow-auto">

              {ChatFriendList
                  .filter(friend => friend.friend === false)
                  .map(filteredFriend => (
                    <div className="col-span-1 py-2 px-5 bg-base-200 card shadow mt-2" key={filteredFriend.username}>
                      <div className='join'>
                        <div className={`avatar ${filteredFriend.status === 'online' ? 'online' : 'offline'}`}>
                          <div className="w-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
                          </div>
                        </div>
                        <div className='ms-4 overflow-hidden'>
                          <p className='font-bold'>{filteredFriend.username}</p>
                          <p className='h-6'>{filteredFriend.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}


              </div>

            </div>
          </div>

          {/* CHAT BOX */}
          <div className="col-span-2 bg-base-100 card shadow-md md:ms-5 mt-5 h-[40rem]">

            {ChatFriendList.length > 0 ? (
              <>
                <div>
                  <div className="col-span-1 py-2 px-5 bg-base-200 card shadow mt-0">
                    <div className='join'>
                      <div className="avatar online">
                        <div className="w-12 rounded-full">
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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

        </div>
      </div>
    </>
  )
}

export default ChatPage