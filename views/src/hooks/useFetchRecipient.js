import { useEffect, useState } from "react"
import { getUserByUniqueIdChat } from "../modules/fetch/index"

export const useFetchRecipientUser = (chat, user) => { // seluruh percakapan yg ada kitanya, profilekita
  const [recipientUser, setRecipientUser] = useState(null) // data user lain yg ngobrol sama kita
  const [error, setError] = useState('')

  const recipientUniqueId = chat?.members.filter((chat_unique_id) => chat_unique_id !== user?.unique_id)
  // console.log('recipientUniqueId : ', recipientUniqueId)
  useEffect(() => {
    const getUser = async () => {
      if(!recipientUniqueId) return null
      const response = await getUserByUniqueIdChat(recipientUniqueId); // get semua user (none admin)
      if (response.error) {
        return setError(response)
      }
      setRecipientUser(response.data)
    }
    getUser()
  }, [user])

  
  return [recipientUser, error]
}