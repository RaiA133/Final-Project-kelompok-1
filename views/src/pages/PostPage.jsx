import { useState, useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import ListPost from "../components/PostPage/ListPost";
import DeatilPost from "../components/PostPage/DetailPost";
import { getPostTerbaru, getPostTerlama } from "../modules/fetch";

function PostPage() {
  const { postState, postDetailState, setPostState } = useContext(PostContext); // list semua post

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState(null);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filterByTags = (category) => {
    setSelectedTags(category);
    setCurrentPage(1);
  };

  const filterByTime = async (category) => {
    if (category == 'terbaru') {
      try {
        const response = await getPostTerbaru(); // Fetch data
        if (response.status[1] === "Success") {
          setPostState(response.data); // Set state if the response is successful
        }
      } catch (err) {
        // console.log(err)
      }
    } else if (category == 'terlama') {
      try {
        const response = await getPostTerlama(); // Fetch data
        if (response.status[1] === "Success") {
          setPostState(response.data); // Set state if the response is successful
        }
      } catch (err) {
        // console.log(err)
      }
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(postState)
    ? postState
      .filter((post) => selectedCategory === null || post.post_category === selectedCategory)
      .filter((post) => selectedTags === null || post.post_tags === selectedTags)
      .slice(indexOfFirstItem, indexOfLastItem)
    : [];


  return (
    <>
    
      <div className="bg-base-100 mt-5 flex justify-center p-5 gap-3">
        <select 
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
          onChange={(e) => filterByCategory(e.target.value)}
        >
          <option value="" disabled>Categories</option>
          {Array.isArray(postState) &&
          postState.map((post) => (
            <option key={post.id} value={post.post_category}>{post.post_category}</option>
          ))}
        </select>
        <select 
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
          onChange={(e) => filterByTags(e.target.value)}
        >
          <option value=""  disabled>Tags</option>
          {Array.isArray(postState) &&
          postState.map((post) => (
            <option key={post.id} value={post.post_tags}>{post.post_tags}</option>
          ))}
        </select>
        <select 
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
          onChange={(e) => filterByTime(e.target.value)}
        >
          <option value="terbaru" selected>Terbaru</option>
          <option value="terlama">Terlama</option>
        </select>
      </div>

      <div className="flex justify-center text-4xl font-bold items-center h-10 mt-5">
        Postingan
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 mb-16 mx-5 xl:mx-32">
        <div className="row-span-2 flex flex-col text-xl items-center pt-6 pb-10 h-fit">

          <div className="flex-auto grid grid-cols gap-4 card w-full mb-5">
            {currentItems.map((post, id) => (
              <div key={id}>
                <ListPost post={post} id={id} />
              </div>
            ))}
          </div>

          <div className="join grid grid-cols-2">
            <button className="join-item btn btn-outline" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous page
            </button>
            <button className="join-item btn btn-outline" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>
              Next
            </button>
          </div>

        </div>

        <div className="col-span-2 p-10 bg-base-100 card shadow-md mt-6 min-w-40 h-fit sticky top-5 hidden lg:block">
          <DeatilPost data={postDetailState} />
        </div>
        
      </div>
    </>
  )
}

export default PostPage;
