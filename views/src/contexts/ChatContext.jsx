import { createContext, useEffect, useState } from 'react';
import { findAllUserChats } from '../modules/fetch';
import { useNavigate } from 'react-router-dom';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [ChatFriendList, setChatFriendList] = useState([
    { username: 'Alex', status: 'online', friend: true, lastMessage: 'Hallo bro !!' },
    { username: 'Johnny', status: 'offline', friend: true, lastMessage: 'Aku sedang Diluar ini tolong chat nanti lagi ya' },
    { username: 'Irwan', status: 'offline', friend: false, lastMessage: 'Tgl 30 paling bisanya' },
  ]);

  const [useChats, setUserChats] = useState()

  useEffect(() => {
    const getAllUserChat = async () => {
      try {
        const response = await findAllUserChats();
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
    <ChatContext.Provider value={{ ChatFriendList, setChatFriendList, useChats }}>
      {children}
    </ChatContext.Provider>
  )
}



/* LIST STATE REACT CONTEXT */
// ChatFriendList | Menampung data yang dibutuhkan di Chat Box : masih data dummy
// useChats | /chats/find-all | Cari semua obrolan chat yang ada kitanya , untuk user box
