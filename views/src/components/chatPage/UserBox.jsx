import { useContext } from "react"
import { ChatContext } from "../../contexts/ChatContext"
import { UserContext } from "../../contexts/UserContext"
import UserBoxModal from "./components/UserBoxModal"
import UserBoxChat from "./components/UserBoxChat";

function UserBox() {
  const { ChatFriendList, userChats } = useContext(ChatContext)
  const { userState } = useContext(UserContext)
  // console.log('table user unique_id', userState.unique_id)
  // console.log('table chat', userChats)

  return (
    <div className='col-span-1'>
      <div role="tablist" className="tabs tabs-lifted mt-5">

        <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold w-20 xl:w-40" aria-label="Friend" defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-5 h-96 overflow-auto">

          {/* FRIEND BOX */}
          {userChats?.map((chat, index) => (
            <div key={index}>
              <UserBoxChat chat={chat} user={userState} />
            </div>
          ))}

        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold w-44" aria-label="Direct Message" />
        <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-5 h-96 overflow-auto">

          {ChatFriendList
            .filter(friend => friend.friend === false)
            .map(filteredFriend => (
              <div className="indicator w-full col-span-1 py-2 px-3 bg-base-200 card shadow mt-2" key={filteredFriend.username}>
                <span className="indicator-item badge badge-success"></span> 
                <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                  <div className="flex items-center">
                    <img className="rounded-full items-start flex-shrink-0 mr-3" src={import.meta.env.VITE_PROFILE_DEFAULT} width="32" height="32" alt="Byrne McKenzie" />
                    <div className="overflow-hidden w-full">
                      <h4 className="text-sm font-semibold text-gray-900 truncate ...">
                        <span>{filteredFriend.username}</span>
                      </h4>
                      <div className="text-[13px] flex justify-between">
                        <span className="truncate">{filteredFriend.lastMessage}</span>
                        <span className="ms-2">14/12/2021</span>
                      </div>
                    </div>
                    <div className="avatar placeholder ms-2">
                      <div className="bg-neutral text-neutral-content rounded-full w-6">
                        <span className="text-xs">1</span>
                      </div>
                    </div>
                  </div>
                </button>
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