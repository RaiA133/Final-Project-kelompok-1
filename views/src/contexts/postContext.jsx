import { createContext, useEffect, useState } from "react";
import { getAllPostingan } from "../modules/fetch";
import { useNavigate } from "react-router-dom";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
      const navigate = useNavigate();
      const [postState, setPostState] = useState({});

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await getAllPostingan(); // Fetch data
                        if (response.status[1] === "Success") {
                              setPostState(response.data); // Set state if the response is successful
                        }
                  } catch (err) {
                        // console.log(err)
                  }
            };
            fetchData();
      }, [navigate]); // Re-fetch data when navigate changes

      return <PostContext.Provider value={{ postState, setPostState }}>{children}</PostContext.Provider>;
};
