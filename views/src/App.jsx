import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div class="container mx-auto px-4 bg-slate-100 pt-3">

        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">

            {/* Navbar */}
            {window.location.pathname !== '/register' && window.location.pathname !== '/login' && <Navbar />}

            {/* Page content here SEKALIGUS Define ROUTE URL*/}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/post' element={<PostPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>

          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <li><a href='/'>Home</a></li>
              <li><a href='/login'>Login</a></li>
              <li><a href='/register'>Register</a></li>
            </ul>
          </div>
        </div>

      {window.location.pathname !== '/register' && window.location.pathname !== '/login' && <Footer />}
      
      </div>


    </Router>


  )
}

export default App
