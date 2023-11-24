import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { PostContext } from "../../contexts/postcontext";
import { UserContext } from "../../contexts/UserContext";

function ListPost({ post, id }) {
  const navigate = useNavigate();
  const { postState } = useContext(PostContext);
  console.log(postState);
  const { userState, img_profile_link, set_img_profile_link } = useContext(UserContext);


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
    <div className="bg-base-100 card shadow-md p-10">
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

    // <div className="card bg-base-100 shadow-xl">
    //   <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       Shoes!
    //       <div className="badge badge-secondary">NEW</div>
    //     </h2>
    //     <p>If a dog chews shoes whose shoes does he choose?</p>
    //     <div className="card-actions justify-end">
    //       <div className="badge badge-outline">Fashion</div>
    //       <div className="badge badge-outline">Products</div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ListPost