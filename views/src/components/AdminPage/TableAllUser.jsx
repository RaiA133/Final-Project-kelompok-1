import { useContext, useState } from "react";
import { AllUserContext } from "../../components/AdminRoute";
import { getUserByUniqueId, deleteAdministrator } from "../../modules/fetch";
import Detail from "./components/Detail";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function TableAllUser() {
  const navigate = useNavigate()
  const [role, setRole] = useState(2)
  const [detailData, setDetailData] = useState(null);
  const { allUser, getRole } = useContext(AllUserContext)
  const users = allUser && allUser.data ? allUser.data : [''];
  const handleRoleChange = (e) => setRole(e.target.value);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // jumlah baris per 1 halaman pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(users)
    ? users
      .slice(indexOfFirstItem, indexOfLastItem)
    : [];

  async function handleDetail(unique_id) {
    const response2 = await getUserByUniqueId(unique_id)
    if (response2.status[1] === 'Success') {
      setDetailData(response2.data);
    }
  }

  async function handleDeleteUser(unique_id) {
    try {
      const secondConfirm = confirm('Apakah Anda yakin ? Hapus Beserta Postingannya')
      if (secondConfirm) {
        const response = await deleteAdministrator(unique_id);
        if (response.status[1] === 'Success') {
          toast.success(response.message, {
            duration: 6000,
          })
        }
        navigate("/administrator");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message, {
        duration: 6000,
      })
      navigate("/administrator");
      console.error('An error occurred while deleting user:', error.message);
    }
  }

  let no = 1

  return (
    <>

      <Toaster
        toastOptions={{
          style: {
            maxWidth: '600px'
          }
        }}
      />

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">

          <div className="flex justify-center w-full">
            <p className="text-xl font-bold">Detail Users</p>
          </div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className='divider' />

          <span className="pb-2 flex justify-start">
            <Detail data={detailData || ''} />
          </span>

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="flex justify-center">
        <select className="select select-bordered select-sm w-sm" onChange={handleRoleChange}>
          <option value='2'>User</option>
          <option value='1'>Administrator</option>
        </select>
      </div>
      <div className="flex justify-center">
        <div className="overflow-x-auto w-screen h-30 mt-5 flex">
          <table className="table w-[1400px] bg-base-100">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-center text-black font-black">Action</th>
                <th className="text-center text-black font-black">Name, Role & Country</th>
                <th className="text-center text-black font-black">Unique_id</th>
                <th className="text-center text-black font-black">Company & Job</th>
                <th className="text-center text-black font-black"></th>
              </tr>
            </thead>
            <tbody>

              {currentItems
                .filter(user => user.user_role_id === parseInt(role))
                .map((user) => (
                  <tr key={user.id}>
                    <th className="ps-7">
                      {no++}
                    </th>
                    <th className="px-0 flex justify-center pt-8">

                      <button className="btn btn-ghost btn-xs" onClick={() => {
                        handleDetail(user.unique_id)
                        document.getElementById('my_modal_2').showModal()
                      }}>details</button>

                      {parseInt(role) == 2 ? (
                        <>
                          <button className="btn btn-error btn-xs ml-2" onClick={() => document.getElementById('my_modal_1').showModal()}>delete</button>
                          <dialog id="my_modal_1" className="modal">
                            <div className="modal-box w-fit">
                              <h3 className="font-bold text-lg text-center">Are you sure ?</h3>
                              <p className="pt-4 text-center mx-5">Hapus user beserta semua postingannya</p>
                              <div className="modal-action flex justify-between gap-20">
                                <form method="dialog">
                                  <button className="btn btn-error w-20" onClick={() => {
                                    handleDeleteUser(user.id)
                                  }}>Yes</button>
                                </form>
                                <form method="dialog">
                                  <button className="btn w-20">Close</button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                        </>
                      ) : (
                        <></>
                      )}

                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={`${import.meta.env.VITE_BACKEND_BASEURL}/profile/picture/${user.img_profile}` || import.meta.env.VITE_PROFILE_DEFAULT}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.username}</div>
                          <span className={`badge ${parseInt(role) === 1 ? 'badge-warning' : 'badge-success'} badge-sm`}>
                            {parseInt(role) === 1 ? getRole[0].role : getRole[1].role}
                          </span>
                        </div>
                        <div className="text-sm opacity-50">{user.country}
                        </div>
                      </div>
                    </td>
                    <td className="min-w-[150px]">{user.unique_id}</td>
                    <td className="flex flex-col items-center">
                      <div className="text-center">
                        {user.company || '-'}
                        <br />
                        <span className="badge badge-ghost badge-sm w-[200px]">
                          {user.job || '-'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}

            </tbody>
          </table>

        </div>
      </div>
      <div className="flex justify-center">

        <div className="join grid grid-cols-2 w-80 mt-10">
          <button className="join-item btn btn-outline" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous page
          </button>
          <button className="join-item btn btn-outline" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>
            Next
          </button>
        </div>

      </div>
    </>
  )
}

export default TableAllUser