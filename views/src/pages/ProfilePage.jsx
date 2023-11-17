import { useNavigate } from 'react-router-dom';
import iconLocation from '../assets/icon/location.svg';
import Partner from '../components/Partner';

function ProfilePage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="p-5">

        <form action="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

            <div className="ms-6 flex flex-col text-xl items-center py-10 bg-white card shadow-md">
              <div className="avatar">
                <div className="w-60 xl:w-80 rounded-xl">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="mt-3 mb-1">
                <p className="font-bold">Username</p>
              </div>
              <div className="mb-3 flex justify-center">
                <img className='w-5' src={iconLocation} alt="Your SVG" />
                <p className="text-sm">Bandung, Indonesia</p>
              </div>
              <input type="file" className="file-input file-input-bordered file-input-sm w-60 xl:w-full max-w-xs mb-4" />
              <div className="border rounded-xl bg-slate-200 p-5 text-sm w-60 xl:w-80 h-96">Tulisan</div>
            </div>

            <div className="col-span-2 p-10 bg-white card shadow-md">
              <div className="flex justify-between">
                <p className="text-4xl font-bold">Edit Profile</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="btn max-[640px]:px-10 max-[640px]:btn-sm btn-neutral px-10" type='submit'>SIMPAN</button>
                  <button className="btn max-[640px]:px-10 max-[640px]:btn-sm btn-neutral px-10" onClick={() => navigate("..", { relative: "path" })}>BATAL</button>
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-5'>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Name</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="name"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Username</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="username"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Email</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="email"
                    name="email"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Password</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="password"
                    name="password"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Birth Place</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="birth_place"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Birth Date</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="date"
                    name="birth_date"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label"><span className="label-text">About Me</span></label>
                <textarea
                  className="textarea textarea-bordered"
                  type="text"
                  name="text"
                  placeholder="Bio"
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-5'>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Job</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="birth_place"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Company</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="company"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Address</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="address"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Country</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="country"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Github</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="github_link"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Personal Website</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="web_link"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Facebook Link</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="fb_link"
                    placeholder=""
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Instagram Link</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="ig_link"
                    placeholder=""
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