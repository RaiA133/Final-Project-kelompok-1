import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from "../modules/fetch";
import toast, { Toaster } from 'react-hot-toast';

function RegisterPage() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return;
    }
    try {
      const response = await register(
        e.target.name.value,
        e.target.username.value,
        e.target.email.value,
        password
      );
      if (response.status[0] === 201) {
        const successMessage = response.message;
        toast.success(successMessage + ' Silahkan Login', {
          duration: 6000,
        });
      } 
    }
    catch (error) {
      let failedMessage = error.message // data message dari authController BE
      console.error(failedMessage)
      toast.error(failedMessage, {
        duration: 6000,
      });
    }
      
  }

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
            <div className="card-actions justify-between mb-5">
              <h2 className="card-title text-2xl">Register</h2>
              <button className="btn btn-square btn-sm" onClick={() => navigate("/")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} >

              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" name="name" />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Username</span></label>
                <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" name="username" />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" placeholder="" className="input input-bordered w-full max-w-xs" name="email" />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Password</span></label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  autoComplete='on'
                  placeholder=""
                />
                <label className="label place-content-end">
                  <a onClick={togglePasswordVisibility} className="label-text-alt text-xs underline" style={{ cursor: 'pointer' }}>
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </a>
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Confirm Password</span></label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type={showConfirmPassword ? 'text' : 'password'}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  autoComplete='on'
                  placeholder=""
                />
                <label className="label place-content-end">
                  {password !== confirmPassword && (
                    <span className="label-text-alt text-red-600 me-28">Password tidak sama</span>
                  )}
                  <a onClick={toggleConfirmPasswordVisibility} className="label-text-alt text-xs underline" style={{ cursor: 'pointer' }}>
                    {showConfirmPassword ? 'Hide Password' : 'Show Password'}
                  </a>
                </label>
              </div>

              <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary w-80" type="submit">Register</button>
                <p className='text-sm text-center'>Already have account ?
                  <span className='underline text-sky-600 decoration-sky-600 ms-1' style={{ cursor: 'pointer' }} onClick={() => navigate("/login")}>Login</span>
                </p>
              </div>

            </form>

          </div>
        </div>
      </div>

    </div>
  )
}

export default RegisterPage