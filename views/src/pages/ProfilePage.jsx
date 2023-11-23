// require('dotenv').config()
import { useNavigate } from 'react-router-dom';
import ProfilePriview from '../components/ProfilePreview'
import Partner from '../components/Partner';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import { createPost } from "../modules/fetch";
import { useEffect, useState } from 'react';
import ProfilePriview from '../components/ProfilePreview'

function ProfilePage() {
  const navigate = useNavigate()
  const { userState } = useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault();

    if (!selectedImage) {
      const successMessage = "Masukan File yang Berbeda";
      toast.error(
        <>
          <span className='leading-normal'>{successMessage}</span>
        </>,
        { duration: 2500 }
      );
      return
    }

    const formData = new FormData(e.target);
    try {

      const response = await createPost(formData);
      setSelectedImage("");

      if (response.status[0] === 201) {
        const successMessage = response.message;
        toast.success(
          <>
            <span className='leading-normal'>{successMessage}</span>
            <button className='ms-4 btn btn-xs my-0' onClick={() => navigate("/post")}>Lihat</button>
          </>,
          { duration: 2500 }
        )
        e.target.reset(); // reset form ketika berhasil
      }

    } catch (error) {
      let failedMessage = error.message
      console.log(error)
      console.error(failedMessage)
      toast.error(failedMessage, {
        duration: 2500,
      });
    }
  }

  useEffect(() => {
    if (PostForm?.image) {
      setSelectedImage(`http://localhost:8000/${PostForm?.image}`);
    }
  }, [PostForm]);

  return (
    <>
      <div className="p-5">
        
        <form action="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

            <ProfilePriview />
            
            <div className="row-span-3 col-span-2 p-10 bg-base-100 card shadow-md">
              <div className="flex justify-between">
                <p className="text-4xl font-bold">Edit Profile</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="btn max-[640px]:px-10 max-[640px]:btn-sm btn-neutral px-10" type='submit'>SIMPAN</button>
                  <button className="btn max-[640px]:px-10 max-[640px]:btn-sm btn-neutral px-10" onClick={() => navigate("..", { relative: "path" })}>BATAL</button>
                </div>
              </div>

              <div className='divider'/>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5'>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Name</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    defaultValue={userState.name}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Username</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="username"
                    placeholder="Your Username"
                    defaultValue={userState.username}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Email</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    defaultValue={userState.email}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Address</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    defaultValue={userState.address}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Password</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="password"
                    name="password"
                    placeholder="Change Your Password"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Confirm Password</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="password"
                    name="password"
                    placeholder="Confirm Password Change"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Birth Date</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="date"
                    name="birth_date"
                    placeholder=""
                    defaultValue={userState.birth_date}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Birth Place</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="birth_place"
                    placeholder="Your Birth Place"
                    defaultValue={userState.birth_place}
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label"><span className="label-text">About Me</span></label>
                <textarea
                  className="textarea textarea-bordered h-40"
                  type="text"
                  name="about"
                  placeholder="Your Bio"
                  defaultValue={userState.about}
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-5'>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Job</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="job"
                    placeholder="Your Job"
                    defaultValue={userState.job}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Company</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="company"
                    placeholder="Current Company"
                    defaultValue={userState.company}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Country</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="country"
                    placeholder="Your country"
                    defaultValue={userState.country}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Contact</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="contact"
                    placeholder="Your Contact"
                    defaultValue={userState.contact}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Github</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="github_link"
                    placeholder="Your Github Link"
                    defaultValue={userState.github_link}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Personal Website</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="web_link"
                    placeholder="Your Personal Web Link"
                    defaultValue={userState.web_link}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Facebook Link</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="fb_link"
                    placeholder="Your Facebook Link"
                    defaultValue={userState.fb_link}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Instagram Link</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="ig_link"
                    placeholder="Your Instagram Link"
                    defaultValue={userState.ig_link}
                  />
                </div>
              </div>
            </div>

          </div>

          <Partner />

        </form>

      </div>
    </>
  )
}

export default ProfilePage