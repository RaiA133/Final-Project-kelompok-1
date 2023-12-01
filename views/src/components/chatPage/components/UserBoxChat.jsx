import { useContext } from "react"
import { useFetchRecipientUser } from "../../../hooks/useFetchRecipient"
import { ChatContext } from "../../../contexts/ChatContext"

const UserBoxChat = ({ chat, user }) => { // seluruh percakapan yg ada kitanya (sudah di map, tinggal taro dibawah langsung keforeach), profilekita
  const recipientUser = useFetchRecipientUser(chat, user) // profile user yg ngobrol sama kita (hooks)
  const otherUserData = recipientUser[0] || ''
  const otherUserPic = `${import.meta.env.VITE_BACKEND_BASEURL}/profile/picture/${otherUserData.img_profile}`
  const { onlineUsers } = useContext(ChatContext)

  // console.log('otherUserData', otherUserData)
  
  return (
    <div className="w-full indicator col-span-1 py-2 px-3 bg-base-200 card shadow mt-2" title={otherUserData.name}>
      {onlineUsers?.some((user) => user?.userUniqueId === otherUserData.unique_id) && <span className="indicator-item badge badge-success" />}
      {/* {otherUserData.status == "online" ? (<span className="indicator-item badge badge-success" /> ) : (<></>)} */}
      <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
        <div className="flex items-center">
          <img className="rounded-full items-start flex-shrink-0 mr-3 w-10 h-10" src={otherUserPic} alt="Byrne McKenzie" />
          <div className="overflow-hidden w-full">
            <h4 className="text-sm font-semibold text-gray-900 truncate ...">
              <span>{otherUserData.username || 'Deleted User'}</span>
            </h4>
            <div className="text-[13px] flex justify-between">
              <span className="truncate">{chat.last_message || 'Belum ada pesan'}</span>
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