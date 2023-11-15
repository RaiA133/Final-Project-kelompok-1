import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from "../modules/fetch";
import toast, { Toaster } from 'react-hot-toast';

function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className='px-0'>

      <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">

          <Toaster 
            toastOptions={{
              style: {
                maxWidth:'600px'
              }
            }}
          />

          <div className="card-body gap-0">
            <h2 className="card-title text-2xl my-5">Login</h2>

            <form 
              id="login-form"
              onSubmit={async (e) => {

                // let toastMessage;

                e.preventDefault();
                try {
                  const response = await login(
                    e.target.email.value,
                    e.target.password.value
                  );
                  if (response.status[0] === 200) {
                    const successMessage = response.message;
                    toast.success(successMessage, {
                      duration: 6000,
                    });
                    window.location.href = "/"
                  } 
                  window.localStorage.setItem("token", response.token);
                } 
                catch (error) {
                  let failedMessage = error.message // data message dari authController BE
                  toast.error(failedMessage, {
                    duration: 6000,
                  });
                }
              }}
            >

              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Email</span></label>
                <input 
                  className="input input-bordered w-full max-w-xs" 
                  type="email" 
                  name="email"
                  placeholder="" 
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Password</span></label>
                <input 
                  className="input input-bordered w-full max-w-xs" 
                  type={showPassword ? 'text' : 'password'} 
                  name="password"
                  placeholder="" 
                />
                <label className="label place-content-end">
                  <a onClick={togglePasswordVisibility} className="label-text-alt text-xs underline" style={{ cursor: 'pointer' }}>
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </a>
                </label>
              </div>

              <div className="card-actions justify-center mt-4">
                <button 
                  className="btn btn-primary w-80"
                  type="submit" 
                  form="login-form"
                >Login</button>
                <p className='text-xs text-center'>Dont have account ? 
                  <span className='underline text-sky-600 decoration-sky-600 ms-1' style={{ cursor: 'pointer' }} onClick={() => navigate("/register")}>Register</span>
                </p>
              </div>

            </form>

          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginPage