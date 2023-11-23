import { useEffect, useState } from "react"
import { getUserByUniqueId } from "../modules/fetch/index"

export const useFetchRecipientUser = (chat, our_unique_id) => {
  const [recipientUser, setRecipientUser] = useState('')
  console.log('percakapan yg ada sayanya : ', chat.chat) 
  console.log('percakapan yg ada sayanya : ', chat.our_unique_id) 

    const getRecipientUniqueId = () => {
      const { userone_unique_id, usertwo_unique_id } = chat.chat;
      if (userone_unique_id && usertwo_unique_id) {
        return userone_unique_id === our_unique_id ? usertwo_unique_id : userone_unique_id;
      }
      return null;
    };

    useEffect(() => {
      const fetchRecipientUser = async () => {
        const recipientUniqueId = getRecipientUniqueId();
        console.log(recipientUniqueId)
        return
        
        if (recipientUniqueId) {
          const response = await getUserByUniqueId(recipientUniqueId);
          setRecipientUser(response);
        }
      };
  
      fetchRecipientUser();
    }, [chat, our_unique_id]);

  
  return recipientUser
}