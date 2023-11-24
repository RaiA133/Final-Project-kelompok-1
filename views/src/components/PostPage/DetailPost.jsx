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
                  <p className="ms-3 btn btn-ghost btn-sm">username</p>
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
  );
}

export default DeatilPost;
