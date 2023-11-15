import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const navigate = useNavigate()
  let location = useLocation();

  return (
    <div className="container mx-auto bg-slate-100 pt-3" data-theme="light">

      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">

          {/* Navbar | location.pathname : untuk cek current url*/}
          {location.pathname !== '/register' && location.pathname !== '/login' && <Navbar />}

          {/* Page content here SEKALIGUS Define ROUTE URL*/}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/post' element={
              <PrivateRoute>
                <PostPage />
              </PrivateRoute>
            } />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li><a onClick={() => navigate("/")}>Home</a></li>
            <li><a onClick={() => navigate("/login")}>Login</a></li>
            <li><a onClick={() => navigate("/register")}>Register</a></li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      {location.pathname !== '/register' && location.pathname !== '/login' && <Footer />}

    </div>
  )
}

export default App
