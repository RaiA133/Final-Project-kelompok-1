import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [window.localStorage.getItem("token")]);

  return (
    <div className="w-full navbar bg-white rounded-2xl">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-3 font-bold text-3xl"><a style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>!U</a></div>
      <div className="flex-none hidden lg:block gap-2">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          {!isLogin && (
            <>
              <li><a onClick={() => navigate("/login")}>Login</a></li>
              <li><a onClick={() => navigate("/register")}>Register</a></li>
            </>
          )}

        </ul>
      </div>
      {isLogin && (
        <div className="flex-noneblock gap-2">
          <div className="dropdown dropdown-end me-5">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a
                onClick={() => {
                  setIsLogin(false);
                  window.localStorage.setItem('toastMessage', 'Berhasil Logout');
                  window.localStorage.removeItem("token");
                  window.location.href = "/"
                }}
              >Logout</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar