import { useState, useContext } from "react";
import { PostContext } from "../contexts/postcontext";
import ListPost from "../components/PostPage/ListPost";

function PostPage() {
  const { postState } = useContext(PostContext); // lise semua post

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(postState)
    ? postState
      .filter((post) => selectedCategory === null || post.post_category === selectedCategory)
      .filter((post) => selectedTags === null || post.post_tags === selectedTags)
      .slice(indexOfFirstItem, indexOfLastItem)
    : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 mb-16 mx-5">
      <div className="row-span-2 flex flex-col text-xl items-center pt-6 pb-10 h-fit">

        <div className="flex-auto grid grid-cols gap-4 card w-full mb-5">
          {currentItems.map((post, id) => (
            <ListPost post={post} id={id} />
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

      <div className="col-span-2 p-10 bg-base-100 card shadow-md mt-6 min-w-40 h-fit sticky top-5">

      </div>

      {/* <div className="col-span-2 p-10 bg-base-100 card shadow-md mt-6 min-w-40">
        <h2 className="text-xl font-bold mb-4">Kategori</h2>
        <ul>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => filterByCategory(null)}>
            All
          </li>
          {postState.length > 0 &&
            [...new Set(postState.map((post) => post.post_category))].map((category, id) => (
              <li key={id} className="cursor-pointer hover:underline text-blue-500" onClick={() => filterByCategory(category)}>
                {category}
              </li>
            ))}
        </ul>
        <h2 className="text-xl font-bold mb-4">Tags</h2>
        <ul>
          <li className="cursor-pointer hover:underline text-blue-500" onClick={() => filterByTags(null)}>
            All
          </li>
          {postState.length > 0 &&
            [...new Set(postState.map((post) => post.post_tags))].map((tags, id) => (
              <li key={id} className="cursor-pointer hover:underline text-blue-500" onClick={() => filterByTags(tags)}>
                {tags}
              </li>
            ))}
        </ul>
      </div> */}
    </div>
  );
}

export default PostPage;
