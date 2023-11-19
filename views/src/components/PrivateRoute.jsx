import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { testSession } from "../modules/fetch";

function PrivateRoute({
  children,
  ...rest
}) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = window.localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // memanggil test session di fetch untuk menjalankan testSession di backend dengan middleware yg sudah dibuat
        const response = await testSession()

        if (response.status[1] === 'Success') {
          setIsLogin(true);
        } else {
          navigate("/login");
        }
      } catch (error) {

        // toast yang dikirim ke halaman login jika sesi login berakhir
        const successMessage = error.message;
        window.localStorage.setItem('toastMessage', successMessage);
        console.error('Error checking login status:', error);
        navigate("/login");
      }
    };

    checkLoginStatus();
  }, [navigate]);

  return (
    <div>
      {isLogin ? (
        children
      ) : (
        <></>
      )}
    </div>
  );
}

export default PrivateRoute