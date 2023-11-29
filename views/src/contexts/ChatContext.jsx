import { createContext, useCallback, useEffect, useState } from 'react';
import { findAllUserChats, getAllUser } from '../modules/fetch';
import { useNavigate } from 'react-router-dom';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [ChatFriendList, setChatFriendList] = useState([
    { username: 'Alex', status: 'online', friend: true, lastMessage: 'Hallo bro !!' },
    { username: 'Johnny', status: 'offline', friend: true, lastMessage: 'Aku sedang Diluar ini tolong chat nanti lagi ya' },
    { username: 'Irwan', status: 'offline', friend: false, lastMessage: 'Tgl 30 paling bisanya' },
  ]);

  const [user, setUser] = useState([]) // profile kita
  const [userChats, setUserChats] = useState() // seluruh data percakapan / data table chats
  const [potentialChats, setPotentialChats] = useState([]) // user lain yg belum ngobrol sama kita

  // console.log(user.unique_id)

  useEffect(() => {
    const getUsers = async () => {
      const response = await getAllUser(); // get semua user (none admin)
      if (response.error) {
        return console.log("Error fetch users", response)
      }
      const pChats = response.data.filter((u) => { // cari user mana saja yg pernah ngobrol dengan kita
        let isChatCreated = false
        if (user.unique_id == u.unique_id) return false
        if (userChats) { // cek jika pernah ngobrol
          isChatCreated = userChats?.some((chat) => {
            return chat.members[0] === u.unique_id || chat.members[1] === u.unique_id // cek jika ada unique_id kita di field members semua user 
          })
        }
        return !isChatCreated
      });
      setPotentialChats(pChats)
    }
    getUsers()
  }, [user])
  

  // const findOrCreateChat = useCallback( async (formData) => {
  //   const response = await findOrCreateChat(formData)
  //   if (response.error) {
  //     return console.log("Error creating chat", response)
  //   }
  //   setUserChats((prev) => [...prev, response])
  // })


  useEffect(() => {
    const getAllUserChat = async () => {
      try {
        const response = await findAllUserChats(); // get percakapan yg ada kitanya, berdasarkan unique_id hasil decoded token
        if (response.status[1] === 'Success') {
          setUserChats(response.data);
        }
      }
      catch (err) {
        // console.log(err)
      }
    }
    getAllUserChat()
  }, [navigate])

  return (
    <ChatContext.Provider value={{
      user, setUser,
      ChatFriendList,
      setChatFriendList,
      userChats,
      potentialChats, 
      // findOrCreateChat,
    }}>
      {children}
    </ChatContext.Provider>
  )
}



/* LIST STATE REACT CONTEXT */
// ChatFriendList | Menampung data yang dibutuhkan di Chat Box : masih data dummy
// userChats | /chats/find-all | Cari semua obrolan chat yang ada kitanya , untuk user box
