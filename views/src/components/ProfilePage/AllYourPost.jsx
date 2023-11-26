import { useContext } from "react"
import { useNavigate } from 'react-router-dom';
import { PostContext } from "../../contexts/PostContext";
import { delYourPostinganById } from "../../modules/fetch";

function AllYourPost() {
  const navigate = useNavigate()
  const { allYourPost } = useContext(PostContext);

  return (
    <div className="p-10 bg-base-100 card shadow-md mt-5 overflow-auto w-full" id='asd'>
      <div className="flex justify-between">
        <p className="text-4xl font-bold">Semua Postinganmu</p>
      </div>
      <div className="divider" />
      <div className="overflow-x-auto table-container">
        <table className="table">

          {allYourPost && allYourPost.length > 0 ? (
            <>
              {/* head */}
              <thead thead>
                <tr>
                  <th></th>
                  <th>Name | Category & Tags</th>
                  <th>Job & revenue</th>
                  <th>Created At</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {allYourPost.map((post, id) => (
                  <tr key={id}>
                    <th>
                      {id + 1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3 w-full">
                        <div>
                          <div className="font-bold truncate">{post.post_title}</div>
                          <span className="badge badge-warning badge-sm w-full lg:w-fit h-fit truncate">{post.post_category}</span>
                          <span className="badge badge-sencodary badge-sm w-full lg:w-fit h-fit truncate">#{post.post_tags}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="w-64 truncate overflow-hidden ...">
                        {post.post_desc}
                      </p>
                      <span className="badge badge-ghost badge-sm h-fit text-center px-5">{post.min_price} - {post.max_price}</span>
                    </td>
                    <td className="truncate">{post.createdAt}</td>
                    <th className="truncate">
                      <button className="btn btn-ghost btn-xs me-2" onClick={() => {
                        navigate(`/post/${post.slug}`)
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });
                      }}>details</button>
                      <button className="btn btn-error btn-xs"
                        onClick={async () => {
                          const hapus_post = await delYourPostinganById(post.id);
                          if (hapus_post.status[1] == "Success") {
                            const toastMessage = hapus_post.message
                            window.localStorage.setItem('toastMessage', toastMessage);
                            window.location.reload();
                            setTimeout(() => {
                              localStorage.removeItem('toastMessage');
                            }, 100)
                          }
                        }}>delete</button>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name | Category & Tags</th>
                  <th>Job & revenue</th>
                  <th>Created At</th>
                  <th></th>
                </tr>
              </tfoot>
            </>
          ) : (
            <div className="flex justify-center items-center py-10">Kamu belum melakukan posting</div>
          )}

        </table>
      </div>
    </div >
  )
}

export default AllYourPost