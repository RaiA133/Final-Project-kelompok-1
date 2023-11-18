import { useNavigate } from 'react-router-dom';
import iconLocation from '../assets/icon/map-pin.svg';
import iconGlobe from '../assets/icon/globe-alt.svg';
import iconGithub from '../assets/icon/github.svg';
import iconFacebook from '../assets/icon/facebook.svg';
import iconInstagram from '../assets/icon/instagram.svg';
import Partner from '../components/Partner';

function CreatePostPage() {
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
              <div className='grid gap-2 grid-cols-4 my-4 justify-center items-center'>
                <img src={iconGlobe} className='w-7 hover:cursor-pointer' alt="Personal Website" onClick={() => window.open("https://tailwindcss.com", "_blank")} />
                <img src={iconGithub} className='w-6 hover:cursor-pointer' alt="Personal Github" onClick={() => window.open("https://tailwindcss.com", "_blank")} />
                <img src={iconFacebook} className='w-6 hover:cursor-pointer' alt="Personal Facebook" onClick={() => window.open("https://tailwindcss.com", "_blank")} />
                <img src={iconInstagram} className='w-6 hover:cursor-pointer' alt="Personal Github" onClick={() => window.open("https://tailwindcss.com", "_blank")} />
              </div>
              <button className='btn btn-primary mb-3 w-60 xl:w-80' onClick={() => navigate("/profile")}>Edit Profile</button>
              <div className="border rounded-xl bg-slate-200 p-5 text-sm w-60 xl:w-80 h-96">Tulisan</div>
            </div>

            <div className="col-span-2 p-10 bg-white card shadow-md">

              <div className="flex justify-between">
                <p className="text-4xl font-bold">Tambah Postingan</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="btn max-[640px]:px-10 max-[640px]:btn-sm btn-neutral px-10" type='submit'>SIMPAN</button>
                  <button className="btn max-[640px]:px-10 max-[640px]:btn-sm btn-neutral px-10" onClick={() => navigate("..", { relative: "path" })}>BATAL</button>
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label"><span className="label-text">Title Post</span></label>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="post_title"
                  placeholder="Title of your post / your demand"
                />
              </div>

              <div className="form-control w-full"></div>

              <div className="form-control w-full">
                <label className="label"><span className="label-text">Description</span></label>
                <textarea
                  className="textarea textarea-bordered h-60"
                  type="text"
                  name="post_desc"
                  placeholder="Description"
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-5'>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Category</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="post_title"
                    placeholder="Post Category"
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Tags</span></label>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="post_title"
                    placeholder="Post Tags"
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label"><span className="label-text">Price Range</span></label>
                <div className='flex items-center'>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="min_price"
                    placeholder="Min Price"
                  />
                  <div className='text-2xl font-bold mx-5'>
                    -
                  </div>
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    name="max_price"
                    placeholder="Max Price"
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-5'>

                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Worktime</span></label>
                  <div className='flex justify-center'>
                    <input
                      className="input input-bordered w-full me-2"
                      type="number"
                      name="post_deadline"
                      placeholder="00"
                    />
                    <select className="select select-bordered join-item">
                      <option disabled selected>Time</option>
                      <option>Day</option>
                      <option>Week</option>
                      <option>Month</option>
                    </select>
                  </div>
                </div>

                <div className="form-control w-full">
                <label className="label"><span className="label-text">Picture</span></label>
                <div className='flex items-center'>
                  <input 
                    className="file-input file-input-bordered w-full" 
                    type="file" 
                    name="post_img"
                    placeholder="Upload Image"
                  />
                  
                </div>
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

export default CreatePostPage