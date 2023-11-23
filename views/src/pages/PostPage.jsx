import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DecodedTokenContext } from "../components/PrivateRoute"

function PostPage() {
  const { tokenDecodedState, setTokenDecodedState } = useContext(DecodedTokenContext)
  console.log(tokenDecodedState)
  const navigate = useNavigate()
  return (
    <div className="mx-6">
      <div className='h-screen'>
        <h1 className='text-3xl font-bold my-5'>Halaman Post</h1>
        <hr />
        <button onClick={() => navigate('/')} className="btn btn-primary">To Home</button>
      </div>
    </div>
  )
}

export default PostPage