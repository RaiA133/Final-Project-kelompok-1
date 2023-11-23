import { createContext, useEffect, useState } from 'react';
import { userProfile } from '../modules/fetch';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [userState, setUserState] = useState({});
  const [img_profile_link, set_img_profile_link] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userProfile(); // get semua data profile
        if (response.status[1] === 'Success') {
          setUserState(response.data); //mengerim response get diatas ke react context
        }
      }
      catch (err) {
        // console.log(err)
      }
    };
    fetchData();
  }, [navigate]) // ini artinya akan berjalan tanpa refresh

  return (
    <UserContext.Provider value={{
      userState,
      setUserState,
      img_profile_link,
      set_img_profile_link,
    }}>
      {children}
    </UserContext.Provider>
  );
};



/* LIST STATE REACT CONTEXT */
// userState | /profile | ambil data user yang kita login kan
// img_profile_link | di set & dipke di Navbar | berisi link statis dari masing masing user yg kita login kan