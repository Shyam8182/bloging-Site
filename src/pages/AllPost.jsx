import React, { useEffect, useState } from 'react'
import Container from '../components/container/Container'
import servises from '../appwrite/config'
import PostCard from '../components/container/PostCard'

function AllPost() {
   const [post ,setPost] = useState([])

   useEffect(()=>{
    servises.getAllPost([]).then((posts)=>{
      // console.log("from all post ",posts);
      
        if(posts){
            setPost(posts.documents)
        }
    })
   },[])
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {
                  post.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                <PostCard post={{...post}}/>
                    </div>
            ))
            }
        </div>
      </Container>
    </div>
  )
}

export default AllPost
