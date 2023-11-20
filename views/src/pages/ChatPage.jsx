import { useNavigate } from 'react-router-dom';

function ChatPage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="px-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* USER BOX */}
          <div className='col-span-1'>
            <div role="tablist" className="tabs tabs-lifted mt-5">

              <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold" aria-label="Friend" checked />
              <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-5 h-96 overflow-auto">

                <div className="col-span-1 p-3 px-5 bg-base-200 card shadow mt-2 pb-1">
                  <div>
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 p-3 px-5 bg-base-200 card shadow mt-2 pb-1">
                  <div>
                    <div className="avatar offline">
                      <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold" aria-label="Direct Message" />
              <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-5 h-96 overflow-auto">
                <div className="col-span-1 p-3 px-5 bg-base-200 card shadow mt-2 pb-1">
                  <div>
                    <div className="avatar offline">
                      <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CHAT BOX */}
          <div className="col-span-2 bg-base-100 card shadow-md md:ms-5 mt-5 h-[40rem]">

            <div>
              <div className="col-span-1 p-3 px-5 bg-base-200 card shadow mt-0 pb-1">
                <div>
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
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

          </div>

        </div>
      </div>
    </>
  )
}

export default ChatPage