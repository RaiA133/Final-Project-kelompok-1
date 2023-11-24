import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

function DeatilPost({ data }) {
  const navigate = useNavigate();
  const { id } = useParams(); // Mendapatkan ID dari URL
  const { postState } = useContext(PostContext);

  // Mencari postingan yang sesuai dengan ID dari URL
  const selectedPost = Array.isArray(postState) ? postState.find((post) => post.id === parseInt(id)) : null;

  // Pastikan postingan yang dipilih ditemukan sebelum menampilkan datanya
  // if (!selectedPost) {
  //   return <div>Postingan tidak ditemukan.</div>;
  // }

  return (
    <div>
      {data.unique_id ? (
        <>
          <div className="hero h-fit bg-base-200 py-5 px-2">
            <div className="hero-content flex-col lg:flex-row">
              <div>
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              </div>
              <div className="ms-2">
                <h1 className="text-4xl font-bold h-12 max-h-28 overflow-auto">{data.post_title}</h1>
                <div className="flex items-center mb-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="gambar projek" className="w-10 h-10 object-cover rounded-full" />
                  <p className="ms-3 btn btn-ghost btn-sm">{data.username}</p>
                </div>
                <p className="py-6">{data.post_desc}</p>
              <div className="mt-1 text-sm">
                <span>Budget :</span>
                {data.max_price}
                <p>Project Status: On Going</p>
                <p>Worktime: {data.post_worktime}</p>
              </div>
              <button className="btn btn-primary mt-3">Get Started</button>
            </div>
          </div>
        </div>
        <div className="mt-5 font-light">Dibuat : {data.createdAt}</div>
        </>
      ) : (
        <div className="flex justify-center items-center h-64">
          Anda Belum Memilih Pekerjaan
        </div>
      )}
    </div>

    // <div class="flex-auto">
    //   <div className="hero-content flex-col lg:flex-row ml-4">
    //     <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-56 mt-10 shadow-2xl" />
    //     <div>
    //       <div className="flex p-5">
    //         <div className="flex w-3/4">
    //           <h2 className="text-2xl font-bold">{selectedPost.post_title}</h2>
    //         </div>
    //         <div className="flex-auto w-32">
    //           <button onClick={() => navigate("/")} className="btn btn-neutral btn-sm me-5">
    //             Chat Owner
    //           </button>
    //           <button onClick={() => navigate("/")} className="btn btn-primary btn-sm">
    //             Ambil Kerjaan
    //           </button>
    //         </div>
    //       </div>

    //       <p className="p-5">
    //         saya butuh aplikasi kasir berbasis desktop, fiturnya standar kasir aja, scan barcode, penjualan, pembelian, master data barang, suplier, diskon, user, laporan, kurang lebih seperti itu, kalau yg sudah ada
    //         `bisa dicantumin link demonya, bahasa pemrograman bebas saya butuh aplikasi kasir berbasis desktop, fiturnya standar kasir aja, scan barcode, penjualan, pembelian, master data barang, suplier, diskon,
    //         user, laporan, kurang lebih seperti itu, kalau yg sudah ada bisa dicantumin link demonya, bahasa pemrograman bebas
    //         {selectedPost.post_desc}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex w-full lg:flex-row  mt-5">
    //     <div className="flex w-32">
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
    //     <div className="flex-auto mx-20">
    //       <div className="p-5 mx-16">
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

export default DeatilPost;
