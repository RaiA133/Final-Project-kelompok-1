import { useFetchRecipientUser } from "../../../hooks/useFetchRecipient"

const UserBoxChat = (chat, our_unique_id) => {
  const recipientUser = useFetchRecipientUser(chat, our_unique_id)
  // console.log(recipientUser)

  /* CHECKPOINT ||| SUDAH BISA GET PROFILE KITA DAN DATA SIAPA YG PERNAH NGOBROL AMA KITA, TAPI ANEHNYA HANYA 1 USER SAJA */

  return (
    <div className="col-span-1 py-2 px-5 bg-base-200 card shadow mt-2">
      <div className='join'>
        <div className={`avatar online`}>
          <div className="w-12 rounded-full">
            <img src={import.meta.env.VITE_PROFILE_DEFAULT} alt="avatar" />
          </div>
        </div>
        <div className='ms-4 overflow-hidden'>
          <p className='font-bold'>username</p>
          <p className='h-6'>lastMessage</p>
        </div>
      </div>
    </div>
  )
}

export default UserBoxChat