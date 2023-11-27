import { createContext, useContext, useEffect, useState } from "react";
import { getAllDataUserAdmin, getUserRoleAdmin } from "../modules/fetch";
import { DecodedTokenContext } from "./PrivateRoute";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

export const AllUserContext = createContext();

function AdminRoute({
  children,
  ...rest
}) {
  const navigate = useNavigate();
  const { decodedTokenState } = useContext(DecodedTokenContext)
  const { isAdmin, setIsAdmin } = useContext(UserContext);
  const [allUser, setAllUser] = useState({})
  const [getRole, setGetRole] = useState()

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const response2 = await getUserRoleAdmin() // ambil semua data role user
        if (response2.status[1] === 'Success') {
          setGetRole(response2.data)
        }
        if (decodedTokenState.user_role_id !== 1) {
          const toastMessage = error.message;
          window.localStorage.setItem('toastMessage', toastMessage);
          navigate("/");
        }
        const response = await getAllDataUserAdmin() // ambil semua data user
        if (response.status[1] === 'Success') {
          setAllUser(response)
          setIsAdmin(true)
        } else {
          navigate("/");
        }
      } catch (error) {
        const toastMessage = error.message;
        window.localStorage.setItem('toastMessage', toastMessage);
        console.error('Error checking admin status:', error);
        navigate("/");
      }
    };
    checkAdminStatus();
  }, [navigate]);

  return (
    <div>
      <AllUserContext.Provider value={{ 
        allUser, 
        getRole,
      }}>
        {isAdmin ? (
          children
        ) : (
          // loading animation
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </AllUserContext.Provider>

    </div>
  );
}

export default AdminRoute