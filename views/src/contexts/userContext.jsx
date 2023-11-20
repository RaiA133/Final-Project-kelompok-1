import { createContext, useEffect, useState } from 'react';
import { userProfile } from '../modules/fetch';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [userState, setUserState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userProfile(); // get semua data profile
        if (response.status[0] === 200) {
          setUserState(response.data); //mengerim response get diatas ke react context
        }
      } catch (error) {
        console.error({
          'Error fetching data': error.message,
          'halaman': 'userContext'
        });
      }
    };

    fetchData();
  }, [navigate]) // ini artinya akan berjalan tanpa refresh

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

