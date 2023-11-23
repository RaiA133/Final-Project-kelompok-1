function UserBoxModal() {

  async function AddFriend(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    console.log(formDataObject)
  }

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
                name='createChat'
                autoComplete='off'
              />
              {/* <label className="label">
                <span className="label-text-alt text-red-600">Username not found</span>
              </label> */}
            </div>

            <div className="modal-action">
              <button className="btn btn-secondary btn-sm text-white" type='submit'>Submit</button>
            </div>
          </form>

        </div>
      </dialog>
    </div>
  )
}

export default UserBoxModal