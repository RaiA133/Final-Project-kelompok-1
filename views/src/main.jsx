import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PostContextProvider } from "./contexts/postContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
            <Router>
                  <PostContextProvider>
                        <App />
                  </PostContextProvider>
            </Router>
      </React.StrictMode>
);
