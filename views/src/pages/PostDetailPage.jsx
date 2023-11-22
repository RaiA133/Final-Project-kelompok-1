import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../contexts/postcontext";

function PostDetailPage() {
      const navigate = useNavigate();
      const { id } = useParams(); // Mendapatkan ID dari URL
      const { postState } = useContext(PostContext);

      // Mencari postingan yang sesuai dengan ID dari URL
      const selectedPost = Array.isArray(postState) ? postState.find((post) => post.id === parseInt(id)) : null;

      // Pastikan postingan yang dipilih ditemukan sebelum menampilkan datanya
      if (!selectedPost) {
            return <div>Postingan tidak ditemukan.</div>;
      }

      return (
            <div class="flex-auto">
                  <div className="hero-content flex-col lg:flex-row ml-4">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-56 mt-10 shadow-2xl" />
                        <div>
                              <div className="flex p-5">
                                    <div className="flex w-3/4">
                                          <h2 className="text-2xl font-bold">{selectedPost.post_title}</h2>
                                    </div>
                                    <div className="flex-auto w-32">
                                          <button onClick={() => navigate("/")} className="btn btn-neutral btn-sm me-5">
                                                Chat Owner
                                          </button>
                                          <button onClick={() => navigate("/")} className="btn btn-primary btn-sm">
                                                Ambil Kerjaan
                                          </button>
                                    </div>
                              </div>

                              <p className="p-5">
                                    saya butuh aplikasi kasir berbasis desktop, fiturnya standar kasir aja, scan barcode, penjualan, pembelian, master data barang, suplier, diskon, user, laporan, kurang lebih seperti itu, kalau yg sudah ada
                                    `bisa dicantumin link demonya, bahasa pemrograman bebas saya butuh aplikasi kasir berbasis desktop, fiturnya standar kasir aja, scan barcode, penjualan, pembelian, master data barang, suplier, diskon,
                                    user, laporan, kurang lebih seperti itu, kalau yg sudah ada bisa dicantumin link demonya, bahasa pemrograman bebas
                                    {selectedPost.post_desc}
                              </p>
                        </div>
                  </div>
                  <div className="flex w-full lg:flex-row  mt-5">
                        <div className="flex w-32">
                              <div className="text-center">
                                    <div className="w-28 rounded">
                                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className=" ml-20 rounded-2xl shadow-2xl" />
                                    </div>
                                    <h3 className="font-bold">User 1</h3>
                                    <div>
                                          <button className="btn w-44 btn-neutral btn-xs mt-3 mx-12">Lihat Profile</button>
                                    </div>
                              </div>
                        </div>
                        <div className="flex-auto mx-20">
                              <div className="p-5 mx-16">
                                    <p>
                                          Budget : {selectedPost.max_price} - {selectedPost.min_price}
                                    </p>
                                    <p>Published date : {selectedPost.createdAt}</p>
                                    <p>Expired :{selectedPost.post_expired_in}</p>
                                    <p>Selected worktime : {selectedPost.post_worktime}</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default PostDetailPage;
