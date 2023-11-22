import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { postContext } from "../contexts/postcontext";

function PostPage() {
      const navigate = useNavigate();
      const { postState } = useContext(postContext);

      return (
            <div className="grid grid-cols-4 gap-4 mx-6">
                  <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Kategori</h2>
                        <ul>
                              <li className="cursor-pointer hover:underline text-blue-500" onClick={() => navigate("/kategori1")}></li>
                              <li className="cursor-pointer hover:underline text-blue-500" onClick={() => navigate("/kategori2")}>
                                    Kategori 2
                              </li>
                              <li className="cursor-pointer hover:underline text-blue-500" onClick={() => navigate("/kategori3")}>
                                    Kategori 3
                              </li>
                        </ul>
                  </div>
                  <div className="col-span-3">
                        <div className="grid grid-cols gap-4 ">
                              <div>
                                    <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
                                          <h2 className="text-xl font-bold mb-2" defaultValue={postState.post_title}></h2>

                                          <div className="flex items-center mb-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="gambar projek" className="w-16 h-16 object-cover rounded-full" />
                                                <p className="ml-2">Nama User</p>
                                          </div>
                                          <p>Deskripsi projek</p>
                                          <div className="mt-4">
                                                <span>Budget :</span>

                                                <p>Budget: $1000</p>
                                                <p>Project Status: On Going</p>
                                                <p>Worktime: 2 weeks</p>
                                          </div>
                                          <div className="mt-4">
                                                <button className="btn btn-primary mr-2">Chat Owner</button>
                                                <button className="btn btn-primary mr-2">Ambil Pekerjaan</button>
                                                <button onClick={() => navigate("/post/detail")} className="btn btn-primary">
                                                      View
                                                </button>
                                          </div>
                                    </div>
                              </div>
                              <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold mb-2 ">Nama Projek</h2>

                                    <div className="flex items-center mb-2">
                                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="gambar projek" className="w-16 h-16 object-cover rounded-full" />
                                          <p className="ml-2">Nama User</p>
                                    </div>
                                    <p>{postState.post_desc}</p>
                                    <div className="mt-4">
                                          <p>Budget: $1000</p>
                                          <p>Project Status: On Going</p>
                                          <p>Worktime: 2 weeks</p>
                                    </div>
                                    <div className="mt-4">
                                          <button className="btn btn-primary mr-2">Chat Owner</button>
                                          <button className="btn btn-primary mr-2">Ambil Pekerjaan</button>
                                          <button onClick={() => navigate("/post/detail")} className="btn btn-primary">
                                                View
                                          </button>
                                    </div>
                              </div>
                        </div>
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
                                    <button onClick={() => navigate("/post/detail")} className="btn btn-primary">
                                          View
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default PostPage;
