import { useNavigate } from "react-router-dom";

function PostPage() {
  const navigate = useNavigate();

  const handleSort = (value) => {
    console.log(value);
    // Implement your sorting function here
  }

  return (
    <div className="grid grid-cols-4 gap-4 mx-6">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Kategori</h2>
        <ul>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => navigate('/kategori1')}>Kategori 1</li>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => navigate('/kategori2')}>Kategori 2</li>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => navigate('/kategori3')}>Kategori 3</li>
        </ul>
      </div>
      <div className="col-span-3">
        <div className="mb-4">
          <label htmlFor="sort" className="mr-2">Sort by:</label>
          <select id="sort" onChange={(e) => handleSort(e.target.value)}>
            <option value="category">Category</option>
            <option value="tags">Tags</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div className="grid grid-cols gap-4 ">
          <div>
            <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 ">Nama Projek</h2>

              <div className="flex items-center mb-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="gambar projek" className="w-16 h-16 object-cover rounded-full" />
                <p className="ml-2">Nama User</p>
              </div>
              <p>Deskripsi projek</p>
              <div className="mt-4">
                <p>Budget: $1000</p>
                <p>Project Status: On Going</p>
                <p>Worktime: 2 weeks</p>
              </div>
              <div className="mt-4">
                <button className="btn btn-primary mr-2">Chat Owner</button>
                <button className="btn btn-primary mr-2">Ambil Pekerjaan</button>
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>
          {/* Tambahkan postingan lainnya di sini */}
        </div>
      </div>
    </div>
  );
}

export default PostPage;
