import { useContext, useEffect } from 'react';
import { DecodedTokenContext } from '../components/PrivateRoute';
import toast, { Toaster } from 'react-hot-toast';
import socket from '../modules/socket';
import { ChatContext } from '../contexts/ChatContext';

function ChatPage() {
  const { ChatFriendList, setChatFriendList } = useContext(ChatContext)
  const { decodedTokenState, setDecodedTokenState } = useContext(DecodedTokenContext)

  // useEffect(() => {
  //   console.log(decodedTokenState)
  // }, [])

  async function AddFriend(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    console.log(formDataObject)
    return
    socket.emit("add_friend", formDataObject.friendName, ({ errMsg, done }) => {
      if (done) {
        toast.success('Berhasil Menambahkan Pesan', {
          duration: 2500,
        });
      }
      toast.error(errMsg, {
        duration: 2500,
      });
    })
  }

  return (
    <>
      <div className="px-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3">

          <Toaster
            toastOptions={{
              style: {
                maxWidth: '600px'
              }
            }}
          />

          {/* USER BOX */}
          <div className='col-span-1'>
            <div role="tablist" className="tabs tabs-lifted mt-5">

              <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold w-20 xl:w-40" aria-label="Friend" defaultChecked />
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

            {/* MODAL ADD FRIENDs */}
            <div className='flex justify-end mt-2'>
              <button className="btn btn-primary btn-sm" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add Friend</button>
              <dialog id="my_modal_5" className="modal modal-top sm:modal-middle">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-lg">Insert Username !</h3>
                  <div className="divider mt-0"></div>                   

                  <form method="dialog" onSubmit={AddFriend}>
                    <div className="form-control w-full">
                      <input 
                        type="text" 
                        placeholder="Type here" 
                        className="input input-bordered w-full" 
                        name='searchUserToChat'
                        autoComplete='off'
                        />
                      {/* <label className="label">
                        <span className="label-text-alt text-red-600">Username not found</span>
                      </label> */}
                    </div>

                    <div className="modal-action">
                      <button className="btn btn-secondary btn-sm text-white" type='submit'>Submit</button>
                    </div>
                  </form>

                </div>
              </dialog>
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