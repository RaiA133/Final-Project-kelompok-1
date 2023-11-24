import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { createPost } from "../modules/fetch";
import Partner from "../components/Partner";
import { useEffect, useState, useContext } from "react";
import ProfilePreview from "../components/ProfilePreview";
import { PostContext } from "../contexts/postContext";

function CreatePostPage({ PostForm }) {
  const navigate = useNavigate();
  const { postState } = useContext(PostContext);
  const [selectedImage, setSelectedImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!selectedImage) {
      const successMessage = "Masukan File yang Berbeda";
      toast.error(
        <>
          <span className="leading-normal">{successMessage}</span>
        </>,
        { duration: 2500 }
      );
      return;
    }

    const formData = new FormData(e.target);
    // const formDataObject = Object.fromEntries(formData);
    // console.log(formDataObject);
    try {
      const response = await createPost(formData);
      setSelectedImage("");

      if (response.status[0] === 201) {
        const successMessage = response.message;
        const newPostId = response.data.id;

        toast.success(
          <>
            {postState.length > 0 && (
              <div>
                <span className="leading-normal">{successMessage}</span>
                <button
                  className="ms-4 btn btn-xs my-0"
                  onClick={() => navigate(`/post/${newPostId}`)} // Menggunakan ID postingan baru di sini
                >
                  Lihat
                </button>
              </div>
            )}
          </>,
          { duration: 2500 }
        );
        e.target.reset(); // reset form ketika berhasil
      }
    } catch (error) {
      let failedMessage = error.message;
      console.log(error);
      console.error(failedMessage);
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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <Toaster
              toastOptions={{
                style: {
                  maxWidth: "600px",
                },
              }}
            />

            <div className="col-span-2 p-10 bg-base-100 card shadow-md">
              <div className="flex justify-between">
                <p className="text-4xl font-bold">Tambah Postingan</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="btn max-[640px]:px-10 max-[640px]:btn-sm btn-neutral px-10" type="submit">
                    SIMPAN
                  </button>
                  <button className="btn max-[640px]:px-10 max-[640px]:btn-sm btn-neutral px-10" onClick={() => navigate("..", { relative: "path" })}>
                    BATAL
                  </button>
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Title Post</span>
                </label>
                <input className="input input-bordered w-full" type="text" name="post_title" placeholder="Title of your post / your demand" required />
              </div>

              <div className="form-control w-full"></div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea className="textarea textarea-bordered h-60" type="text" name="post_desc" placeholder="Description" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select className="select select-bordered w-full max-w-xs" name="post_category" required defaultValue="">
                    <option value="" disabled hidden>
                      Post Category
                    </option>
                    <option value="Application">Application</option>
                    <option value="Website">Website</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Digital Art">Digital Art</option>
                    <option value="Animation">Animation</option>
                    <option value="Gaming">Gaming</option>
                  </select>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Tags</span>
                  </label>
                  <input className="input input-bordered w-full" type="text" name="post_tags" placeholder="Post Tags" required />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price Range</span>
                </label>
                <div className="flex items-center">
                  <input className="input input-bordered w-full" type="text" name="min_price" placeholder="Min Price" required />
                  <div className="text-2xl font-bold mx-5">-</div>
                  <input className="input input-bordered w-full" type="text" name="max_price" placeholder="Max Price" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Worktime</span>
                  </label>
                  <div className="flex justify-center">
                    <input className="input input-bordered w-full me-2" type="text" name="post_worktime" placeholder="00" required />
                    <select className="select select-bordered join-item" name="post_worktime_time">
                      <option value="Day">Day</option>
                      <option value="Week">Week</option>
                      <option value="Month">Month</option>
                    </select>
                  </div>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Picture</span>
                  </label>
                  <div className="flex items-center">
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

            <ProfilePreview />

          </div>

          <Partner />
                      
        </form>
      </div>
    </>
  );
}

export default CreatePostPage;
