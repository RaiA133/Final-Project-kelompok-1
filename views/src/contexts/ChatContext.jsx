import { createContext, useCallback, useEffect, useState } from 'react';
import { createUserMessage, deleteAllMessageByUniqueId, deleteUserChatByUniqueId, findAllUserChats, findAllUserChatsByChatUniqueId, getAllUser } from '../modules/fetch';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

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
  const [currentChat, setCurrentChat] = useState(null) // state penampung ketika user di userbox di klik, menyimpan percakapan/chat
  const [userOrMessageDel, setUserOrMessageDel] = useState(null) // untuk merefresh get data chat / messages dibawah
  const [messages, setMessages] = useState(null)
  const [sendTextMessageError, setSendTextMessageError] = useState(null)
  const [newMessage, setNewMessage] = useState(null)
  

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
  

  useEffect(() => {
    const getAllUserChat = async () => {
      const response = await findAllUserChats(); // get percakapan yg ada kitanya, berdasarkan unique_id hasil decoded token
      if (response.status[1] === 'Success') {
        setUserChats(response.data);
      }
    }
    getAllUserChat()
  }, [navigate, userOrMessageDel])

  
  useEffect(() => {
    const getMessages = async () => {
      if (currentChat?.chat_unique_id) {
        const response = await findAllUserChatsByChatUniqueId(currentChat.chat_unique_id); 
        if (response.status[1] === 'Success') {
          setMessages(response.data);
        }
      }
    }
    getMessages()
  }, [currentChat, userOrMessageDel])


  // kirim pesan di chatBox | before : textMessage, sender, currentChatId, setTextMessage
  const sendTextMessage = useCallback( async(textMessage, chat_unique_id, setTextMessage) => {
    if (!textMessage) return console.log("Tulis sesuatu...")
    const response = await createUserMessage(textMessage, chat_unique_id, setTextMessage);
    if (response.error) {
      return setSendTextMessageError(response.message)
    }
    setNewMessage(response.data)
    setMessages((prev) => [...prev, response.data])
    setTextMessage("")
  }, [])

  // hapus semua riwayat pesan / message by chat_unique_id
  const deleteAllMessage = useCallback( async(chat_unique_id, setTextMessage) => {
    const response = await deleteAllMessageByUniqueId(chat_unique_id, setTextMessage);
    if (response.error) {
      return console.error("Error delete all messages")
    }
    const toastMessage = response.message
    setMessages(null)
    setUserOrMessageDel(true)
    toast.success(toastMessage, {
      duration: 2500,
    });
  }, [])

  // hapus semua riwayat pesan / message by chat_unique_id
  const deleteUserChat = useCallback( async(chat_unique_id, setTextMessage) => {
    console.log('asdasdsdsds', chat_unique_id)
    const response = await deleteUserChatByUniqueId(chat_unique_id, setTextMessage);
    if (response.error) {
      return console.error("Error delete all messages")
    }
    setMessages(null)
    localStorage.setItem('toastMessage', response.message);
    window.location.reload();
  }, [])


  const updateCurrentChat = useCallback((chat) => {
    setCurrentChat(chat) // menyimpan percakapan ke currentChat, berdasarkan userBox yg diklik
  },[])

  return (
    <ChatContext.Provider value={{
      user, setUser,
      ChatFriendList,
      setChatFriendList,
      userChats,
      potentialChats, 
      updateCurrentChat,
      currentChat,
      messages,
      sendTextMessage,
      deleteAllMessage,
      deleteUserChat
    }}>
      {children}
    </ChatContext.Provider>
  )
}



/* LIST STATE REACT CONTEXT */
// ChatFriendList | Menampung data yang dibutuhkan di Chat Box : masih data dummy
// userChats | /chats/find-all | Cari semua obrolan chat yang ada kitanya , untuk user box
