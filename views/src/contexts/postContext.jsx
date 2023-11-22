import { createContext, useEffect, useState } from "react";
import { getAllPostingan } from "../modules/fetch";
import { useNavigate } from "react-router-dom";

export const postContext = createContext();

export const PostContextProvider = ({ children }) => {
      const navigate = useNavigate();
      const [postState, setPostState] = useState({});
      const [post_title, set_post_title] = useState("");

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await getAllPostingan(); // Fetch data
                        console.log(response); // Log the response to check its structure

                        // Check if response status is 'Success' or something else
                        if (response && response.status === "Success") {
                              setPostState(response.data); // Set state if the response is successful
                        }
                  } catch (error) {
                        console.error("Error fetching data:", error);
                  }
            };

            fetchData();
      }, [navigate]); // Re-fetch data when navigate changes

      return <postContext.Provider value={{ postState, setPostState, post_title, set_post_title }}>{children}</postContext.Provider>;
};
