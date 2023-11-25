import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from '../../contexts/PostContext';

function DeatilPost({ data }) {
  const navigate = useNavigate();
  const { post_img_link } = useContext(PostContext);

  return (
    <div>
      {data.unique_id ? (
        <>
          <div className="hero h-fit bg-base-200 py-5 px-2">
            <div className="hero-content flex-col lg:flex-row">

              <div className="ms-2">
                <div className="flex">
                  <img src={post_img_link} className="max-w-[330px] rounded-lg shadow-2xl" />
                  <div className="col border p-5">
                    <h1 className="text-4xl font-bold h-fit">{data.post_title}</h1>
                    <div className="flex mt-3">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="gambar projek" className="w-10 h-10 object-cover rounded-full" />
                      <p className="ms-3 btn btn-ghost btn-sm">username</p>
                    </div>
                  </div>
                </div>
                <p className="py-6">{data.post_desc}</p>
                <div className="mt-1 text-sm">
                  <span className="font-bold">Minimum Revenue : </span>
                  {data.min_price}
                  <p><span className="font-bold">Project Status: </span>On Going</p>
                  <p><span className="font-bold">Worktime: </span>{data.post_worktime}</p>
                </div>
                <button onClick={() => navigate(`/post/${data.slug}`)} className="btn btn-primary mt-5">
                  More Detail
                </button>
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
