import { createContext, useContext, useEffect, useState } from 'react';
import { findAllUserChats, getAllUser } from '../modules/fetch';
import { useNavigate } from 'react-router-dom';
// import { UserContext } from './UserContext';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [ChatFriendList, setChatFriendList] = useState([
    { username: 'Alex', status: 'online', friend: true, lastMessage: 'Hallo bro !!' },
    { username: 'Johnny', status: 'offline', friend: true, lastMessage: 'Aku sedang Diluar ini tolong chat nanti lagi ya' },
    { username: 'Irwan', status: 'offline', friend: false, lastMessage: 'Tgl 30 paling bisanya' },
  ]);

  const [user, setUser] = useState([]) // profile kita
  // console.log('user profile di chat kontext', user) 

  const [userChats, setUserChats] = useState() // seluruh data percakapan / data table chats
  const [potentialChats, setPotentialChats] = useState([]) // user lain yg belum ngobrol sama kita
  // console.log(userChats)

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await getAllUser();
  //     if (response.error) {
  //       return console.log("Error fetch users", response)
  //     }
  //     const pChats = response.filter((u) => {
  //       let isChatCreated = false
  //       if (user.unique_id)
  //     })
  //   }
  //   getUsers()
  // }, [])


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
    }}>
      {children}
    </ChatContext.Provider>
  )
}



/* LIST STATE REACT CONTEXT */
// ChatFriendList | Menampung data yang dibutuhkan di Chat Box : masih data dummy
// userChats | /chats/find-all | Cari semua obrolan chat yang ada kitanya , untuk user box
