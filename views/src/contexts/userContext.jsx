import { createContext, useContext, useEffect, useState } from 'react';
import { getAllDataUserAdmin, testSession, userProfile } from '../modules/fetch';
import { useNavigate } from 'react-router-dom';
import { DecodedTokenContext } from '../components/PrivateRoute';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [userState, setUserState] = useState({});
  const [img_profile_link, set_img_profile_link] = useState("");
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const fetchData = async () => {

      const ambilRole = await testSession()
      if (ambilRole.tokenDecoded.user_role_id == 1) { // kondisi admin / bukan ada disini
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }

      console.log('ambilRole', ambilRole.tokenDecoded.user_role_id)
      const response = await userProfile(); // get semua data profile mu
        if (response.status[1] === 'Success') {
          setUserState(response.data); //mengerim response get diatas ke react context
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
      isAdmin, setIsAdmin,
    }}>
      {children}
    </UserContext.Provider>
  );
};
