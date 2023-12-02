import { createContext, useCallback, useEffect, useState } from "react";
import { getAllPostingan, getYourPostingan, updatePostStatusBySlug } from "../modules/fetch";
import { useNavigate } from "react-router-dom";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [postState, setPostState] = useState({});
  const [postDetailState, setPostDetailState] = useState({});
  const [post_img_link, set_post_img_link] = useState({});
  const [allYourPost, setAllYourPost] = useState([]);
  const [userPostByUniqueId, setUserPostByUniqueId] = useState([]);
  const [statusPostChange, setStatusPostChange] = useState(null);
  const [allPostStatus, setAllPostStatus] = useState([]);
  const [postStatusBySlug, setpostStatusBySlug] = useState([]);

  const [categoryTags, setCageoryTags] = useState({
    categories: [
      'Consulting',
      'Content Creation',
      'Data Analysis',
      'Design',
      'E-commerce',
      'GIS Development',
      'Illustration Design',
      'Marketing',
      'Mobile App Development',
      'Photography',
      'Translation',
      'Video Editing',
      'Virtual Assistance',
      'Web Programming'
    ],
    tags: [
      "App Development",
      "Administrative",
      "Business",
      "Consulting",
      "Content Creation",
      "Data Analysis",
      "Design",
      "Editing",
      "E-commerce",
      "GIS Development",
      "Illustration",
      "Language",
      "Logo Design",
      "Marketing",
      "Mobile App Development",
      "Product Photography",
      "Social Media",
      "Translation",
      "Travel",
      "Video Editing",
      "Virtual Assistance",
      "Web Development",
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPostingan(); // Fetch data
        if (response.status[1] === "Success") {
          setPostState(response.data); // Set state if the response is successful
        }
        const response2 = await getYourPostingan(); 
        if (response2.status[1] === "Success") {
          setAllYourPost(response2.data);
        }
      } catch (err) {
        // console.log(err)
      }
    };
    fetchData();
  }, [navigate, statusPostChange]); // Re-fetch data when navigate changes
  

  const postStatusChange = useCallback(async (status, slug) => {
    try {
      const response = await updatePostStatusBySlug(status, slug);
      setStatusPostChange(response.data)
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  // useEffect(() => {
  //   const getPostStatusBySlug = async () => {
  //     const response = await getPostStatusBySlug(slug);
  //     if (response.status[1] === 'Success') {
  //       setMessages(response.data);
  //     }
  //   }
  //   getPostStatusBySlug()
  // }, [currentChat, userOrMessageDel])


  return <PostContext.Provider value={{
    postState, setPostState,
    postDetailState, setPostDetailState,
    post_img_link, set_post_img_link,
    categoryTags, setCageoryTags,
    allYourPost, setAllYourPost,
    userPostByUniqueId, setUserPostByUniqueId,
    postStatusChange,
    postStatusBySlug,
  }}>{children}</PostContext.Provider>;
};
