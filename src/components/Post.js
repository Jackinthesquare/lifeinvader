// const Post = ({post}) => {
//     return (
//         <div>
//             <img src={post.imgage} height="250" width="250" />
//             <p>Post by{post.username}</p>
//             <p>{post.content}</p>
//         </div>
//     )
// }

// export default Post;

import { useState } from 'react'

const Post = ({post}) => {
  const [likes, setLikes] = useState(0)
  
  return(
    <div className='post'>
      <img className='post-img' src={post.image} />
      <p>Post by {post.username} • {likes} likes</p>
      <button onClick={() => { setLikes(likes + 1)}}><i class="fa-solid fa-heart style={{color: '#d33'}}"></i>
      </button>
      <p>{post.content}</p>
    </div>
  )
}

export default Post;