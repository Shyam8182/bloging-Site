import React from 'react'
import { Link } from 'react-router-dom'
import servises from '../../appwrite/config'

function PostCard(post) {
  console.log("from post card akho 2 ",post);
  // console.log("from post card image url",post.post.feturedimage);
  // console.log(servises.getFilePriweu(post.post.feturedimage))
  
  // console.log("from post card ",post.post.$id,post.post.tital,post.post.feturedimage);
  
  return (
    <Link to={`/post/${post.post.$id}`}>
        <div className='w-full bg-gray-600 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
            <img src={servises.getFilePriweu(post.post.feturedimage)} alt="image not showing for financial issues"
            className='rounded-xl' />

            </div>
            <h2 className='text-xl font-bold'>
                {post.post.tital}
            </h2>
            </div>
    </Link>
  )
}

export default PostCard
