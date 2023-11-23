import { useContext } from "react"
import { ChatContext } from "../../contexts/ChatContext"
import { UserContext } from "../../contexts/UserContext"
import UserBoxModal from "./components/UserBoxModal"
import UserBoxChat from "./components/UserBoxChat";

function UserBox() {
  const { ChatFriendList, useChats } = useContext(ChatContext)
  const { userState } = useContext(UserContext)
  // console.log('table user unique_id', userState.unique_id)
  // console.log('table chat', useChats)

  return (
    <div className='col-span-1'>
      <div role="tablist" className="tabs tabs-lifted mt-5">

        <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold w-20 xl:w-40" aria-label="Friend" defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-5 h-96 overflow-auto">

          {/* FRIEND BOX */}
          {useChats?.map((chat, index) => (
            <div key={index}>
              <UserBoxChat chat={chat} our_unique_id={userState.unique_id}/>
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
                      <img src={import.meta.env.VITE_PROFILE_DEFAULT} alt="avatar" />
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
      <UserBoxModal />

    </div>
  )
}


export default UserBox