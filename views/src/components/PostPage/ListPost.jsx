import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { UserContext } from "../../contexts/UserContext";
import { getPostDetailBySlug } from "../../modules/fetch";

function ListPost({ post, id }) {
  const navigate = useNavigate();
  const { setPostDetailState, } = useContext(PostContext);
  const { userState, img_profile_link } = useContext(UserContext); // profile kita

 
  // getPostDetailBySlug
  async function handleDetailPost(slug) {
    const response = await getPostDetailBySlug(slug); // Fetch data
    if (response.status[1] === "Success") {
      setPostDetailState(response.data); // Set state if the response is successful
    }
  }
  // console.log(postDetailState)

  return (
    <div className="bg-base-100 card shadow-md p-10">
      <h2 className="text-xl font-bold mb-2">{post.post_title}</h2>
      <div className="flex items-center mb-2">
        <img src={img_profile_link || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="gambar projek" className="w-10 h-10 object-cover rounded-full" />
        <p>{userState.username || "username"}</p>
      </div>
      <p className="text-sm max-h-20 overflow-hidden">{post.post_desc}</p>
      <div className="divider"/>
      <div className="text-sm mt-2">
        <span>Budget :</span>
        {post.max_price}
        <p>Project Status: On Going</p>
        <p>Worktime: {post.post_worktime}</p>
      </div>
      <div className="mt-4">
        {/* <button className="btn btn-neutral btn-sm mr-2">Chat Owner</button> */}
        {/* <button className="btn btn-neutral btn-sm mr-2">Ambil Pekerjaan</button> */}
        {/* <button onClick={() => navigate(`/post/${post.id}`)} className="btn btn-primary">
          View
        </button> */}
        <button onClick={() => handleDetailPost(post.slug)} className="btn btn-neutral btn-sm">
          View Detail
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