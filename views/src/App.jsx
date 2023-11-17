import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AdminPage from './pages/AdminPage';
import { useEffect, useState } from 'react';


function App() {
  let location = useLocation();
  const hideOnRegisterLogin = location.pathname !== '/register' && location.pathname !== '/login'; // location.pathname : untuk cek current url
  
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [window.localStorage.getItem("token")]);

  return (
    <div className="container mx-auto bg-slate-100 pt-3" data-theme="light">

      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">

          {/* Navbar */}
          { hideOnRegisterLogin && <Navbar />}

          {/* Page content here SEKALIGUS Define ROUTE URL*/}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/post' element={<PrivateRoute> <PostPage /> </PrivateRoute>} />
            <Route path='/administrator' element={<PrivateRoute> <AdminPage /> </PrivateRoute>} />
          </Routes>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">

            {/* Sidebar content here */}
            <li><a onClick={() => navigate("/")}>Home</a></li>
            {!isLogin && <li><a onClick={() => navigate("/login")}>Login</a></li>}
            {!isLogin && <li><a onClick={() => navigate("/register")}>Register</a></li>}
            {isLogin && <li><a onClick={() => navigate("/post")}>Post</a></li>}
            
          </ul>
        </div>
      </div>

      {/* Footer */}
      { hideOnRegisterLogin && <Footer />}

    </div>
  )
}

export default App
