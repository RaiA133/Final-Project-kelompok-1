import { createContext, useState } from 'react';

export const ChatFriendContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [ChatFriendList, setChatFriendList] = useState([
    { username: 'Alex', status: 'online', friend: true, lastMessage: 'Hallo bro !!' },
    { username: 'Johnny', status: 'offline', friend: true, lastMessage: 'Aku sedang Diluar ini tolong chat nanti lagi ya' },
    { username: 'Irwan', status: 'offline', friend: false, lastMessage: 'Tgl 30 paling bisanya' },
  ]);
  return (
    <ChatFriendContext.Provider value={{ ChatFriendList, setChatFriendList }}>
      {children}
    </ChatFriendContext.Provider>
  )
}

