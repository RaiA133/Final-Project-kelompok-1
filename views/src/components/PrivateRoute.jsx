import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function PrivateRoute({
  children,
  ...rest
}) {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      setIsLogin(true)
    } 
    else {
      navigate("/login")
    }
  }, [])
  return (
    <div>
      {isLogin ? (
        children
      ) : (
        <></>
      )}
    </div>
  )
}

export default PrivateRoute