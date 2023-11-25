import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PostContext } from '../contexts/postContext';

function PostDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams(); // Mendapatkan SLUG dari URL
  const { postState, post_img_link, set_post_img_link } = useContext(PostContext);
  const selectedPost = Array.isArray(postState) ? postState.find((post) => post.slug === slug) : null;

  // Pastikan postingan yang dipilih ditemukan sebelum menampilkan datanya
  if (!selectedPost) {
    return <div className="flex justify-center items-center h-64">Postingan tidak ditemukan.</div>;
  }
  
  if (selectedPost.post_img) {
    const link = `${import.meta.env.VITE_BACKEND_BASEURL}/post/picture/` + selectedPost.post_img
    set_post_img_link(link)
  } else {
    const link = import.meta.env.VITE_POST_PIC_DEFAULT
    set_post_img_link(link)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mb-16 mt-6 mx-5 card shadow-md">

      <div className="col-span-2 p-10 pt-8 bg-base-100">

        <div className="flex justify-between">
          <h3 className="text-2xl font-extrabold text-base-900 sm:text-3xl">{selectedPost.post_title}</h3>
          <button className="btn btn-sm btn-circle btn-ghost right-2 top-2" onClick={() => navigate("/post")} >✕</button>
        </div>
        <p className="mt-6 text-base text-base-500">
          {selectedPost.post_desc}
        </p>

        <div className="divider divider-start text-primary mt-8">Skill Needed</div>

        <div className="block md:flex justify-between">
          <div className="mb-5">

            {selectedPost.skills.map((skill, index) => (
              <li key={index} className="flex items-start md:col-span-1 mb-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-sm text-base-700">{skill}</p>
              </li>
            ))}

          </div>
          <div className="flex justify-center">
            <img src={post_img_link} className="w-[280px] md:w-96 h-fit rounded-lg shadow-2xl" />
          </div>
        </div>


      </div>

      <div className="row-span-2 p-5 bg-base-200 ps-8">

        <div className="stats bg-primary text-secondary-content w-fit lg:w-full mb-5">
          <div className="stat w-fit">
            <div className="stat-title text-base-100">Minimum Revenue</div>
            <div className="stat-value">{selectedPost.min_price}</div>
            {/* <div className="stat-value">Rp.<span>1.200.000</span></div> */}
            <div className="divider mb-2" />
            <div className="stat-title text-base-100">Maximum Revenue</div>
            <div className="stat-value">{selectedPost.max_price}</div>
            {/* <div className="stat-value">Rp.<span>2.000.000</span></div> */}
            <div className="stat-actions">
              <button className="btn btn-sm mr-2">Chat Owner</button>
              <button className="btn btn-sm">Ambil Kerjaan</button>
            </div>
          </div>
        </div>
        <div className="stats bg-secondary text-secondary-content w-fit lg:w-full ms-5 lg:ms-0">
          <div className="stat w-fit">asd</div>
        </div>

      </div>

    </div>
    // <div class="mx-auto border mb-10">
    //   <div className="hero-content flex-col mx-4 card bg-base-100 mt-10">

    //     <div className="flex border w-full">
    //       <div className="flex w-full">
    //         <h2 className="text-2xl font-bold">{selectedPost.post_title}</h2>
    //       </div>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //         <button className="btn btn-sm btn-neutral w-32 mr-10" onClick={() => navigate("/")}>Chat Owner</button>
    //         <button className="btn btn-sm btn-primary w-32 mr-10" onClick={() => navigate("/")}>Ambil Kerjaan</button>
    //       </div>
    //     </div>
    //     <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-56 shadow-2xl" />
    //     <div>
    //       <p className="p-5">
    //         saya butuh aplikasi kasir berbasis desktop, fiturnya standar kasir aja, scan barcode, penjualan, pembelian, master data barang, suplier, diskon, user, laporan, kurang lebih seperti itu, kalau yg sudah ada
    //         `bisa dicantumin link demonya, bahasa pemrograman bebas saya butuh aplikasi kasir berbasis desktop, fiturnya standar kasir aja, scan barcode, penjualan, pembelian, master data barang, suplier, diskon,
    //         user, laporan, kurang lebih seperti itu, kalau yg sudah ada bisa dicantumin link demonya, bahasa pemrograman bebas
    //         {selectedPost.post_desc}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex w-full lg:flex-row  mt-5">
    //     <div className="flex">
    //       <div className="text-center">
    //         <div className="w-28 rounded">
    //           <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className=" ml-20 rounded-2xl shadow-2xl" />
    //         </div>
    //         <h3 className="font-bold">User 1</h3>
    //         <div>
    //           <button className="btn w-44 btn-neutral btn-xs mt-3 mx-12">Lihat Profile</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card bg-base-100">
    //       <div className="m-5">
    //         <p>
    //           Budget : {selectedPost.max_price} - {selectedPost.min_price}
    //         </p>
    //         <p>Published date : {selectedPost.createdAt}</p>
    //         <p>Expired :{selectedPost.post_expired_in}</p>
    //         <p>Selected worktime : {selectedPost.post_worktime}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PostDetailPage;
