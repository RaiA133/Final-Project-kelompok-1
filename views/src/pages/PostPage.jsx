import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PostContext } from "../contexts/postcontext";
import { UserContext } from "../contexts/UserContext";

function PostPage() {
  const navigate = useNavigate();
  const { postState } = useContext(PostContext);
  console.log(postState);
  const { userState, img_profile_link, set_img_profile_link } = useContext(UserContext);
  // State untuk menyimpan kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState(null);

  // Fungsi untuk memfilter data berdasarkan kategori yang dipilih
  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };
  const filterByTags = (category) => {
    setSelectedTags(category);
  };

  useEffect(() => {
    if (userState.img_profile) {
      const link = `${import.meta.env.VITE_BACKEND_BASEURL}/profile/picture/` + userState.img_profile;
      set_img_profile_link(link);
    } else {
      const link = import.meta.env.VITE_PROFILE_DEFAULT;
      set_img_profile_link(link);
    }
  }, [userState]);

  return (
    <div className="flex-auto grid-cols gap-4 mx-5 mt-5">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Kategori</h2>
        <ul>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => filterByCategory(null)}>
            All
          </li>
          {postState.length > 0 &&
            [...new Set(postState.map((post) => post.post_category))].map((category, id) => (
              <li key={id} className="cursor-pointer hover:underline text-blue-500" onClick={() => filterByCategory(category)}>
                {category}
              </li>
            ))}
        </ul>
        <h2 className="text-xl font-bold mb-4">Tags</h2>
        <ul>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => filterByTags(null)}>
            All
          </li>
          {postState.length > 0 &&
            [...new Set(postState.map((post) => post.post_tags))].map((tags, id) => (
              <li key={id} className="cursor-pointer hover:underline text-blue-500" onClick={() => filterByTags(tags)}>
                {tags}
              </li>
            ))}
        </ul>
      </div>

      <div className="col-span-3">
        <div className="flex-auto grid grid-cols gap-4 mt-5">
          {postState
            .filter((post) => selectedCategory === null || post.post_category === selectedCategory) // Filter berdasarkan kategori yang dipilih
            .filter((post) => selectedTags === null || post.post_tags === selectedTags)
            .map((post, id) => (
              <div key={id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">{post.post_title}</h2>

                <div className="flex items-center mb-2">
                  <img src={img_profile_link || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="gambar projek" className="w-16 h-16 object-cover rounded-full" />
                  <p>{userState.username || "username"}</p>
                </div>

                <p>{post.post_desc}</p>

                <div className="mt-4">
                  <span>Budget :</span>
                  {post.max_price}
                  <p>Project Status: On Going</p>
                  <p>Worktime: {post.post_worktime}</p>
                </div>

                <div className="mt-4">
                  <button className="btn btn-primary mr-2">Chat Owner</button>
                  <button className="btn btn-primary mr-2">Ambil Pekerjaan</button>
                  <button onClick={() => navigate(`/post/${post.id}`)} className="btn btn-primary">
                    View
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PostPage;
