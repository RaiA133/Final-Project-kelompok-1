import { useContext } from 'react';
import { DecodedTokenContext } from '../components/PrivateRoute';
import toast, { Toaster } from 'react-hot-toast';
import socket from '../modules/socket';
import UserBox from '../components/chatPage/UserBox';
import ChatBox from '../components/chatPage/ChatBox';

function ChatPage() {
  const { decodedTokenState } = useContext(DecodedTokenContext)
  // console.log(decodedTokenState)

  return (
    <>
      <div className="px-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3">

          <Toaster
            toastOptions={{
              style: {
                maxWidth: '600px'
              }
            }}
          />

          {/* USER BOX */}
          <UserBox />

          {/* CHAT BOX */}
          <ChatBox />

        </div>
      </div>
    </>
  )
}

export default ChatPage