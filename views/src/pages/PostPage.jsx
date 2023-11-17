import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Partner from '../components/Partner';
import toast, { Toaster } from 'react-hot-toast';
import { instance } from '../modules/axios/index.js';

async function fetchPosts() {
  try {
    const response = await instance.get('http://localhost:3000/api/v1/post');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

function PostPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => {
      setPosts(data);
    }).catch(error => {
      toast.error(error.message);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mx-6">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md col-span-1">
        <h2 className="text-xl font-bold mb-4">Kategori</h2>
        <ul>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => navigate('/kategori1')}>web developer</li>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => navigate('/kategori2')}>database engineer </li>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => navigate('/kategori3')}>social media plan</li>
        </ul>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols gap-4 ">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-2 ">{post.post_title}</h2>
                <div>
                  <button className="btn btn-primary mr-2">Chat Owner</button>
                  <button className="btn btn-primary mr-2">Ambil Pekerjaan</button>
                  <button className="btn btn-primary">View</button>
                </div>
              </div>

              <div className="flex items-center mb-2">
                <img src={post.post_img} alt="gambar projek" className="w-16 h-16 object-cover rounded-full" />
                <p className="ml-2">{post.unique_id}</p>
              </div>
              <p>{post.post_desc}</p>
              <div className="mt-4">
                <p>Budget: {post.post_pricing}</p>
                <p>Project Status: On Going</p>
                <p>Worktime: {post.post_deadline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostPage;
