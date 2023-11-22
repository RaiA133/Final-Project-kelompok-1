import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChatContextProvider } from './contexts/ChatContext.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx';
import { PostContextProvider } from "./contexts/PostContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ChatContextProvider>
        <UserContextProvider>
          <PostContextProvider>
            <App />
          </PostContextProvider>
        </UserContextProvider>
      </ChatContextProvider>
    </Router>
  </React.StrictMode>,
)