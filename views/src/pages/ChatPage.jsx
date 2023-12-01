import { useContext } from 'react';
import { DecodedTokenContext } from '../components/PrivateRoute';
import toast, { Toaster } from 'react-hot-toast';
import UserBox from '../components/chatPage/UserBox';
import ChatBox from '../components/chatPage/ChatBox';

function ChatPage() {
  const { decodedTokenState } = useContext(DecodedTokenContext)

  return (
    <>
      <div className="px-5 mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-32">

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