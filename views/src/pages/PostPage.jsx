import { useNavigate } from "react-router-dom"

function PostPage() {
  const navigate = useNavigate()
  return (
    <div class="mx-6">
      <div className='h-screen'>
        <h1 className='text-3xl font-bold my-5'>Halaman Post</h1>
        <hr />
        <button onClick={() => navigate('/')} className="btn btn-primary">To Home</button>
      </div>
    </div>
  )
}

export default PostPage