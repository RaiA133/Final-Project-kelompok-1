import { useContext, useState } from "react";
import { AllUserContext } from "../../components/AdminRoute";
import { getUserByUniqueId, deleteAdministrator } from "../../modules/fetch";
import Detail from "./components/Detail";

function TableAllUser() {
  const { allUser, getRole } = useContext(AllUserContext)
  const users = allUser && allUser.data ? allUser.data : [];
  const [role, setRole] = useState(2)
  const [detailData, setDetailData] = useState(null);
  const handleRoleChange = (e) => setRole(e.target.value);
  async function handleDetail(unique_id) {
    const response3 = await getUserByUniqueId(unique_id)
    if (response3.status[1] === 'Success') {
      setDetailData(response3.data);
    }
  }

  async function handleDeleteUser(id) {
    try {
      const response = await deleteAdministrator(id);
     
      if (response.status[0] === 'Success') {
        navigate("/administrator");
        console.log('User deleted successfully');
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('An error occurred while deleting user:', error.message);
    }
  }
  
  
  return (
    <>
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

              {users
                .filter(user => user.user_role_id === parseInt(role))
                .map((user) => (
                  <tr key={user.id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th className="px-0 flex justify-center pt-8">

                      <button className="btn btn-ghost btn-xs" onClick={() => {
                        handleDetail(user.unique_id)
                        document.getElementById('my_modal_2').showModal()
                      }}>details</button>

                      <button className="btn btn-error btn-xs ml-2" onClick={() => {
                        handleDeleteUser(user.id)}}
                      >delete</button>

                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={`${import.meta.env.VITE_BACKEND_BASEURL}/profile/picture/${user.img_profile}`}
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
          <button className="join-item btn btn-outline">
            Previous page
          </button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    </>
  )
}

export default TableAllUser