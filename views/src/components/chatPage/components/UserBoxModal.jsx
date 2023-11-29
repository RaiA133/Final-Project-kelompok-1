import { useContext, useState } from "react";
import { ChatContext } from "../../../contexts/ChatContext";
import { createChat } from "../../../modules/fetch";

function UserBoxModal() {
  const [searchUsername, setSearchUsername] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [filteredChats, setFilteredChats] = useState([]);
  const { user, potentialChats, findOrCreateChat } = useContext(ChatContext) // data semua user yg belum pernah ngobrol dengan kita

  async function AddFriend(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    const { searchUsername } = formDataObject;
  
    const filteredUsers = potentialChats.filter((user) => {
      return searchUsername && user.username.includes(searchUsername);
    });
  
    try {
      if (filteredUsers.length > 0) {
        const response = await createChat(user.unique_id, filteredUsers[0].unique_id);        
        if (response.status[1] === "Success") {
          console.log("berhasil");
        } else {
          console.error("Gagal menambahkan teman. Respons tidak sesuai yang diharapkan.");
        }
      } else {
        console.error("User tidak ditemukan berdasarkan pencarian.");
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  const handleSearchChange = (e) => {
    setSearchUsername(e.target.value);
    const filteredUsers = potentialChats.filter((chat) => {
      return chat.username.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredChats(filteredUsers);
  };

  const handleUsernameSelect = (selectedUsername) => {
    setIsDropdownVisible(false);
    setSearchUsername(selectedUsername); // Jika Anda ingin mengisi input dengan username yang dipilih
  };

  return (
    <div className='flex justify-end mt-2'>
      <button className="btn btn-primary btn-sm" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Friend</button>
      <dialog id="my_modal_5" className="modal modal-top sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Insert Username !</h3>
          <div className="divider mt-0"></div>

          <form method="dialog" onSubmit={AddFriend}>
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name='searchUsername'
                autoComplete='off'
                value={searchUsername}
                onChange={handleSearchChange}
                onFocus={() => setIsDropdownVisible(true)}
              />
            </div>
            <div className="modal-action">
              <button className="btn btn-secondary btn-sm text-white" type='submit'>Submit</button>
            </div>
          </form>
        </div>

        {/* Dropdown untuk menampilkan hasil filter */}
        {isDropdownVisible && searchUsername && filteredChats.length > 0 && (
          <ul className="p-2 shadow menu dropdown-content h-64 overflow-hidden z-[1] bg-base-100 rounded-box absolute w-60 top-36 md:top-[410px] md:w-fit">
            {filteredChats.map((chat) => (
              <li key={chat.unique_id}>
                <button
                  type="button"
                  className="btn btn-ghost pt-[1rem]"
                  onClick={() => handleUsernameSelect(chat.username)}
                >
                  {chat.username}
                </button>
              </li>
            ))}
          </ul>
        )}

      </dialog>
    </div>
  );
}

export default UserBoxModal