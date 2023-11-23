import { useFetchRecipientUser } from "../../../hooks/useFetchRecipient"
import { ChatContext } from "../../../contexts/ChatContext"
import { useContext } from "react"

const UserBoxChat = ({ chat, user }) => {
  const recipientUser = useFetchRecipientUser(chat, user)
  const otherUserData = recipientUser[0] || ''
  const { userChats } = useContext(ChatContext)
  const otherUserPic = import.meta.env.VITE_BACKEND_BASEURL + '/profile/picture/' + otherUserData.img_profile
  // console.log('table chat', userChats)
  // console.log('other', otherUserData)

  return (
    <div className="w-full indicator col-span-1 py-2 px-3 bg-base-200 card shadow mt-2">
      <span className="indicator-item badge badge-success"></span> 
      <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
        <div className="flex items-center">
          <img className="rounded-full items-start flex-shrink-0 mr-3" src={otherUserPic} width="32" height="32" alt="Byrne McKenzie" />
          <div className="overflow-hidden w-full">
            <h4 className="text-sm font-semibold text-gray-900 truncate ...">
              <span>{otherUserData.username}</span>
            </h4>
            <div className="text-[13px] flex justify-between">
              <span className="truncate">last Message</span>
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
  )
}

export default UserBoxChat