import { useNavigate } from "react-router-dom";

function PostDetailPage() {
      const navigate = useNavigate();
      return (
            <div class="flex-auto">
                  <div className="hero-content flex-col lg:flex-row ml-4">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-56 shadow-2xl" />
                        <div>
                              <div className="flex p-5">
                                    <div className="flex w-3/4">
                                          <h2 className="text-2xl font-bold">Tittle Postingan!</h2>
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
                              </p>
                        </div>
                  </div>
                  <div className="flex w-full lg:flex-row  mt-5">
                        <div className="flex w-32">
                              <div>
                                    <div className="w-36 rounded">
                                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-32 ml-20 rounded-2xl shadow-2xl" />
                                    </div>
                                    <div>
                                          <button className="btn btn-wide btn-neutral btn-sm mt-3 mx-4">Lihat Profile</button>
                                    </div>
                              </div>
                        </div>
                        <div className="flex-auto mx-20">
                              <div className="p-5 mx-16">
                                    <p>Published budget : </p>
                                    <p>Published date :</p>
                                    <p>Expired</p>
                                    <p>Selected worktime : </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default PostDetailPage;
