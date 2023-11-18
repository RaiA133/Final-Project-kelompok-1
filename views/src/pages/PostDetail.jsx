import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Partner from '../components/Partner';
import toast, { Toaster } from 'react-hot-toast';
import { instance } from '../modules/axios/index.js';

function PostDetailPage() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // Simulate fetching post detail
  useEffect(() => {
    const postDetail = {
      post_title: "Nama Projek",
      post_img: "URL Gambar",
      unique_id: "ID Unik",
      post_desc: "Deskripsi Projek",
      post_pricing: "Budget",
      post_deadline: "Worktime",
    };
    setPost(postDetail);
  }, []);

  if (!post) return null;

  return (
    <div className="grid grid-cols-2 gap-4 mx-6">
      <div className="col-span-1">
        <img src={post.post_img} alt="gambar projek" className="w-full object-cover rounded-lg" />
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">{post.unique_id}</h2>
          <p>{post.post_desc}</p>
        </div>
        <div className="mt-4">
          <button className="btn btn-primary mr-2">Chat Owner</button>
          <button className="btn btn-primary">Ambil Pekerjaan</button>
        </div>
      </div>
      <div className="col-span-1 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">{post.post_title}</h2>
        <div className="mt-4">
          <p>Budget: {post.post_pricing}</p>
          <p>Published Date: Tanggal Publikasi</p>
          <p>Expired: Tanggal Kadaluarsa</p>
          <p>Selected Worktime: {post.post_deadline}</p>
        </div>
      </div>
    </div>
  );
}

export default PostDetailPage;
