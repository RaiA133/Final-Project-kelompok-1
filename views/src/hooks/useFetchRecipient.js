import { useEffect, useState } from "react"
import { getUserByUniqueId } from "../modules/fetch/index"

export const useFetchRecipientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null)
  const [error, setError] = useState('')

  const recipientUniqueId = chat?.members.find((chat_unique_id) => chat_unique_id !==user?.unique_id)
  console.log(user)
  useEffect(() => {
    const getUser = async () => {
      if(!recipientUniqueId) return null
      const response = await getUserByUniqueId(recipientUniqueId);
      if (response.error) {
        return setError(response)
      }
      setRecipientUser(response.data)
    }
    getUser()
  }, [])

  
  return [recipientUser, error]
}