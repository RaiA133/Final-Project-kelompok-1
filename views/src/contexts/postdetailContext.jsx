// import { createContext, useEffect, useState } from "react";
// import { getPostDetailById } from "../modules/fetch";
// import { useNavigate } from "react-router-dom";

// export const PostDetailContext = createContext();

// export const PostDetailContextProvider = ({ children }) => {
//       const navigate = useNavigate();
//       const [postdetailState, setPostdetailState] = useState({});

//       useEffect(() => {
//             const fetchData = async () => {
//                   try {
//                         const response = await getPostDetailById(); // Fetch data
//                         if (response.status[1] === "Success") {
//                               setPostdetailState(response.data); // Set state if the response is successful
//                         }
//                   } catch (err) {
//                         // console.log(err)
//                   }
//             };
//             fetchData();
//       }, [navigate]); // Re-fetch data when navigate changes

//       return <PostDetailContext.Provider value={{ postdetailState, setPostdetailState }}>{children}</PostDetailContext.Provider>;
// };
