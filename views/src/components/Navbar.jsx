
function Navbar() {
  return (
    <div className="w-full navbar bg-white rounded-2xl">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-3 font-bold text-3xl"><a href='/'>!U</a></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><a href='/login'>Login</a></li>
          <li><a href='/register'>Register</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar