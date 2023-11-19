import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { createPost } from "../modules/fetch";
import iconLocation from '../assets/icon/map-pin.svg';
import iconGlobe from '../assets/icon/globe-alt.svg';
import iconGithub from '../assets/icon/github.svg';
import iconFacebook from '../assets/icon/facebook.svg';
import iconInstagram from '../assets/icon/instagram.svg';
import Partner from '../components/Partner';
import { useEffect, useState } from 'react';

function CreatePostPage({ PostForm }) {
const navigate = useNavigate()
const [selectedImage, setSelectedImage] = useState(null);


async function handleSubmit(e) {
  e.preventDefault();
  
  if (!selectedImage) {
    const successMessage = "Masukan File yang Berbeda";
    toast.error(
      <>
        <span className='leading-normal'>{successMessage}</span>
      </>,
      { duration: 6000 }
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
        { duration: 6000 }
      )
      e.target.reset(); // reset form ketika berhasil
    }

  } catch (error) {
    let failedMessage = error.message
    console.log(error)
      console.error(failedMessage)
      toast.error(failedMessage, {
        duration: 6000,
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

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

          <Toaster
            toastOptions={{
              style: {
                maxWidth: '600px'
              }
            }}
          />

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
                required
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
                required
              />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-5'>
              <div className="form-control w-full">
                <label className="label"><span className="label-text">Category</span></label>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="post_category"
                  placeholder="Post Category"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label"><span className="label-text">Tags</span></label>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="post_tags"
                  placeholder="Post Tags"
                  required
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
                  required
                />
                <div className='text-2xl font-bold mx-5'>
                  -
                </div>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="max_price"
                  placeholder="Max Price"
                  required
                />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-5'>

              <div className="form-control w-full">
                <label className="label"><span className="label-text">Worktime</span></label>
                <div className='flex justify-center'>
                  <input
                    className="input input-bordered w-full me-2"
                    type="text"
                    name="post_worktime"
                    placeholder="00"
                    required
                  />
                  <select className="select select-bordered join-item" name="post_worktime_time">
                    <option value="Day">Day</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                  </select>
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label"><span className="label-text">Picture</span></label>
                <div className='flex items-center'>
                  <input
                    className="file-input file-input-bordered w-full"
                    type="file"
                    name="file"
                    placeholder="Upload Image"
                    accept="image/*"
                    required
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setSelectedImage(URL.createObjectURL(file));
                    }}
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